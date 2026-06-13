'use server'
import { db } from "@/lib/firebase";
import { doc, getDoc } from "firebase/firestore";
import { BookHeart, Bookmark, BookOpen, Download, X } from "lucide-react";
import Link from "next/link";
import React from "react";

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

  const singleManga = await fetchSingleProducts(id);

  if (!singleManga) {
    return <div>No product found.</div>;
  }




  return (
    <main>
      <div>
        <div className="max-md:h-[15rem] max-md:relative flex justify-center max-md:w-full ">
          <img
            id="p-show"
            src={singleManga.frontCover}
            alt={singleManga.title}
            className="w-full h-full object-cover "
          />

          <div className="absolute inset-0  backdrop-blur-md shadow-xl border-b border-white/30 bg-gradient-to-br from-dark/50 to-dark/30 ">
            <div className="flex w-full justify-between px-2 py-4">
              <Link href={"/discover-stories/manga"}>
                <X />
              </Link>
              <Download />
            </div>
          </div>
          <div className="absolute bottom-0 top-18">
            <img
              src={singleManga.frontCover}
              alt={singleManga.title}
              className="h-[12rem] w-[8rem] object-cover"
            />
          </div>
        </div>

        <div className="pt-12 justify-center flex flex-col items-center gap-5 ">
          <div className="flex flex-col gap-4 items-center justify-center">
            <h1 className={`text-2xl font-bold `}>{singleManga.title}</h1>
            <p className="text-md text-gray-500">{singleManga.author}</p>
          </div>
          <div className="flex  gap-15 items-center justify-center  ">
            <div className="flex flex-col items-center active:text-red-600  hover:text-red-600  text-gray-300 text-sm gap-1">
              <Link
                className="flex flex-col items-center"
                href={`/view-manga/${singleManga.id}`}
              >
                <BookOpen />
                <p>Read</p>
              </Link>
            </div>
            <div className="flex flex-col  items-center active:text-red-600 hover:text-red-600  text-gray-300 text-sm gap-1">
              <Bookmark />
              <p>Save</p>
            </div>
            <div className="flex flex-col items-center active:text-red-600  hover:text-red-600  text-gray-300 text-sm gap-1">
              <BookHeart />
              <p>Like</p>
            </div>
          </div>
        </div>

        <div className="w-full  border-[0.5px] my-5 border-red-700/50"></div>

        <div className="p-2 flex flex-col gap-2 ">
          <h2 className="text-xl font-semibold text-white">Synopsis</h2>

          <p className="text-[14px] font-light text-gray-400">
            {singleManga.description}
          </p>
        </div>
      </div>
    </main>
  );
}
