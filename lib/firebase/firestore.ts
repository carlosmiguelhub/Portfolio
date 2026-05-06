import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
  serverTimestamp,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "./config";

export type FirebaseProject = {
  id?: string;
  title: string;
  slug: string;
  category: string;
  year: string;
  description: string;
  overview: string;
  tech: string[];
  features: string[];
  liveUrl: string;
  githubUrl: string;
  coverImage?: string;
  featured: boolean;
  status: "draft" | "published";
};

const projectsRef = collection(db, "projects");

export async function getPublishedProjects() {
  const q = query(
    projectsRef,
    where("status", "==", "published"),
    orderBy("createdAt", "desc")
  );

  const snapshot = await getDocs(q);

  return snapshot.docs.map((document) => ({
    id: document.id,
    ...document.data(),
  })) as FirebaseProject[];
}

export async function getAllProjects() {
  const q = query(projectsRef, orderBy("createdAt", "desc"));
  const snapshot = await getDocs(q);

  return snapshot.docs.map((document) => ({
    id: document.id,
    ...document.data(),
  })) as FirebaseProject[];
}

export async function getProjectBySlug(slug: string) {
  const q = query(
    projectsRef,
    where("slug", "==", slug),
    where("status", "==", "published")
  );

  const snapshot = await getDocs(q);

  if (snapshot.empty) {
    return null;
  }

  const document = snapshot.docs[0];

  return {
    id: document.id,
    ...document.data(),
  } as FirebaseProject;
}

export async function getProjectById(id: string) {
  const documentRef = doc(db, "projects", id);
  const snapshot = await getDoc(documentRef);

  if (!snapshot.exists()) {
    return null;
  }

  return {
    id: snapshot.id,
    ...snapshot.data(),
  } as FirebaseProject;
}

export async function createProject(project: FirebaseProject) {
  const result = await addDoc(projectsRef, {
    ...project,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  });

  return result.id;
}

export async function updateProject(id: string, project: Partial<FirebaseProject>) {
  const documentRef = doc(db, "projects", id);

  await updateDoc(documentRef, {
    ...project,
    updatedAt: serverTimestamp(),
  });
}

export async function deleteProject(id: string) {
  const documentRef = doc(db, "projects", id);
  await deleteDoc(documentRef);
}