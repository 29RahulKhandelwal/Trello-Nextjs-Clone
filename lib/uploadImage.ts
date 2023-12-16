import { ID, storage } from "@/appwrite";

const uploadImage = async (file: File) => {
  if (!file) return;

  const fileUploaded = await storage.createFile(
    "656ad15bdeed84d1b47b",
    ID.unique(),
    file
  );
  return fileUploaded;
};

export default uploadImage;
