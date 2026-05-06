import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  type User,
} from "firebase/auth";
import { auth } from "./firebase/config";

export async function loginAdmin(email: string, password: string) {
  const result = await signInWithEmailAndPassword(auth, email, password);
  return result.user;
}

export async function logoutAdmin() {
  await signOut(auth);
}

export function listenToAuthState(callback: (user: User | null) => void) {
  return onAuthStateChanged(auth, callback);
}