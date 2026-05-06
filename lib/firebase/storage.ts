import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "./config";

export async function uploadProjectImage(file: File) {
  const filePath = `projects/${Date.now()}-${file.name}`;
  const storageRef = ref(storage, filePath);

  await uploadBytes(storageRef, file);

  const downloadUrl = await getDownloadURL(storageRef);

  return downloadUrl;
}