"use server";
import { db } from "@/lib/firebase";
import { doc, getDoc } from "firebase/firestore";
import ViewManga from "./ViewManga";

export const readManga = async (id) => {
  if (!id) return null;
  //    console.log("fetching id:", id);

  const docRef = doc(db, "manga", id);
  const docSnap = await getDoc(docRef);

  //   console.log("exists:", docSnap.exists());
  console.log("data:", docSnap.data());

  if (docSnap.exists()) {
    const data = docSnap.data();
    return {
      id: docSnap.id,
      ...docSnap.data(),
      createdAt: data.createdAt?.toDate().toISOString() || null,
    };
  }

  return null;
};

export default async function page(props) {
  const { id } = await props.params;

  //   console.log("id:", id);

  const singleManga = await readManga(id);

  if (!singleManga) {
    return <div>No product found.</div>;
  }
  console.log(singleManga);

  return <ViewManga singleManga={singleManga} />;
}
