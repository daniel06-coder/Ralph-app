"use client";
import { Eye, EyeClosed, EyeOff, Lock, XIcon } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

const ViewManga = ({ singleManga }) => {
  const [hide, setHide] = useState(null);
  const hideFunc = () => setHide(!hide);

  const sortedPages = [...singleManga.bookPages].sort(
    (a, b) => a.order - b.order,
  );

  // just a simulation change later when adding authentication and payment
  const hasPurchased = false;
  const freeManga = singleManga.free;
  console.log(freeManga);

  
 

    const canReadAll = freeManga || hasPurchased;
    const visiblePages = canReadAll ? sortedPages : sortedPages.slice(0, 2)


  return (
    <main className="relative">
      <div className="absolute inset-0 h-screen bg-black/40 pointer-events-none"></div>

      {hide && (
        <div className="fixed flex z-2 justify-between items-center w-full bg-white/30 backdrop-blur-md border-b border-white/30 duration-300 transition-all transform text-black/80 px-1 py-1">
          <Link
            className="text-xl w-[10%]"
            href={`/manga-preview/${singleManga.id} `}
          >
            <XIcon />
          </Link>
          <div className="flex w-full flex-col justify-center items-center">
            <p className="font-semibold">You are Now Reading</p>
            <h2 className="font-bold text-red-700 text-xl">
              {singleManga.title}
            </h2>
          </div>
          <div className="w-[10%] flex flex-col items-center px-1">
            <Eye onClick={hideFunc} />
          </div>
        </div>
      )}

      {!hide && (
        <div className="absolute z-2 fixed right-0 px-1 py-1 top-3 m-3 bg-white/30 backdrop-blur-md border-b border-white/30 text-black/80 ">
          {" "}
          <EyeOff onClick={hideFunc} />
        </div>
      )}

      <div className="max-md:h-screen max-md:overflow-y-scroll overflow-x-scroll  max-md:snap-y snap-mandatory">
        <div className="max-md:h-screen snap-start ">
          <img
            src={singleManga.frontCover}
            alt=""
            className="max-md:h-screen max-md:w-full object-contain"
          />
          {visiblePages.map((page) => (
            <section key={page.order} className="h-screen snap-start flex ">
              <img
                src={page.url}
                alt={`Page ${page.order}`}
                className=" max-md:h-screen max-md:w-full object-contain "
              />
            </section>
          ))}
          {!canReadAll && (
            <div className="relative">
              <img
                src={singleManga.frontCover}
                alt=""
                className="max-md:h-screen max-md:w-full object-contain max-md:snap-start"
              />

              <div className="absolute inset-0 justify-center items-center flex w-full bg-black/30 backdrop-blur-sm">
                <div className="flex flex-col gap-3 text-xl items-center">
                  <div className="flex gap-1">
                    <Lock className="text-red-700" />
                    <p>Book Locked</p>
                  </div>
                  <p>Pay to continue enjoying</p>
                </div>
              </div>
            </div>
          )}
          (
          {canReadAll && (
            <img
              src={singleManga.backCover}
              alt="Back cover "
              className="max-md:h-screen max-md:w-full object-contain max-md:snap-start"
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default ViewManga;
