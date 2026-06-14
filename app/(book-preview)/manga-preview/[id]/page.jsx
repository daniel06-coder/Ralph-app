'use server'
import { db } from "@/lib/firebase";
import { doc, getDoc } from "firebase/firestore";
import MangaPrev from "./MangaPrev";

export const fetchSingleProducts = async (id) => {
  if (!id) return null;
  //    console.log("fetching id:", id);

  const docRef = doc(db, "manga", id);
  const docSnap = await getDoc(docRef);

  //   console.log("exists:", docSnap.exists());
    console.log("data:", docSnap.data());

  if (docSnap.exists()) {
    return { id: docSnap.id, ...docSnap.data() };
  }

  return null;
};

export default async function page(props) {
  const { id } = await props.params;

  //   console.log("id:", id);

  const previewManga = await fetchSingleProducts(id);

  if (!previewManga) {
    return <div>No product found.</div>;
  }




  return <MangaPrev previewManga={previewManga} />;
}
