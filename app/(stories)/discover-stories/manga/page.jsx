'use client'
import { db } from '@/lib/firebase';
import { collection, getDocs } from 'firebase/firestore'
import { Filter, FilterIcon, Settings, SlidersHorizontal } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
const page = () => {
  const [manga, setManga] = useState([]);

  const getManga = async () => {
    try {
      const snapshot = await getDocs(collection(db, "manga"));
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setManga(data);
    } catch (error) {
      console.error("failed to fetch", error);
    }
  };
  useEffect(() => {
    getManga();
  }, []);
  return (
    <main>
      <div className="px-2 border-t border-red-600/40  ">
        <div className="flex justify-between items-center py-2  ">
          <div className="w-[40%] max-md:w-[10%]">
            <SlidersHorizontal />
          </div>
          <div className="max-md:w-[90%] px-1 w-full md:flex  ">
            <input
              type="text"
              className="border border-gray-700 outline-none max-md:w-full md:w-[60%] py-1 px-3 md:py-2 max-md:placeholder:text-sm "
              placeholder="Search Manga"
            />
          </div>
        </div>
        <div className=" py-1   grid grid-cols-6  max-md:grid-cols-3 w-full md:gap-4 gap-2  ">
          {manga.map((mangas) => (
            <div key={mangas.id}>
              <Link
                href={`/manga-preview/${mangas.id}`}
                className="break-inside-avoid mb-2"
              >
                <img
                  src={mangas.frontCover}
                  alt={mangas.title}
                  className="w-full h-full object-cover  "
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default page
