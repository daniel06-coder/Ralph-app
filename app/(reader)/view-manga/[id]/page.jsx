'use server'
import { db } from "@/lib/firebase";
import { doc, getDoc } from "firebase/firestore";
import { BookHeart, Bookmark, BookOpen, Download, X, XIcon } from "lucide-react";
import Link from "next/link";
// import Link from "next/link";
import React from "react";


    export const readManga = async (id) => {
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
    
      const singleManga = await readManga(id);
    
      if (!singleManga) {
        return <div>No product found.</div>;
      }

      const sortedPages = [...singleManga.bookPages].sort((a, b) => a.order -b.order)

  return (
    <main className="relative">
      <div className="absolute inset-0 h-screen bg-black/40 pointer-events-none"></div>
      <div className="absolute flex justify-between items-center w-full bg-white/30 backdrop-blur-md border-b border-white/30 text-black/80 px-1 py-1">
        <Link className="text-xl w-[10%]" href={`/manga-preview/${singleManga.id} `}><XIcon/></Link>
        <div className="flex w-full flex-col justify-center items-center">
          <p className="font-semibold">You are Now Reading</p>
          <h2 className="font-bold text-red-700 text-xl">{singleManga.title}</h2>
        </div>
        <div className="w-[10%] flex flex-col items-center px-1">
          <h2 className="font-semi-bold">pages</h2>

          <p className="text-xl">{singleManga.bookPages.length}</p>
        </div>
      </div>
      <div className="h-screen overflow-y-scroll snap-y snap-mandatory">
        <div className="h-screen snap-start ">
          <img
            src={singleManga.frontCover}
            alt=""
            className="h-screen w-full object-contain"
          />

          {sortedPages.map((page) => (
            <section key={page.order} className="h-screen snap-start flex ">
              <img
                src={page.url}
                alt={`Page ${page.order}`}
                className=" max-w-full max-h-full object-cover "
              />
            </section>
          ))}

          <img
            src={singleManga.backCover}
            alt="Back cover "
            className="h-screen w-full object-contain snap-start"
          />
        </div>
      </div>
    </main>
  );
}


