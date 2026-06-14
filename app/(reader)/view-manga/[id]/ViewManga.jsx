"use client";
import { Eye, EyeClosed, EyeOff, XIcon } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

const ViewManga = ({ singleManga }) => {
  const [hide, setHide] = useState(null);

  const hideFunc = () => setHide(!hide);

  const sortedPages = [...singleManga.bookPages].sort(
    (a, b) => a.order - b.order,
  );
  return (
    <main className="relative">
      <div className="absolute inset-0 h-screen bg-black/40 pointer-events-none"></div>

      {hide && (
        <div className="fixed flex justify-between items-center w-full bg-white/30 backdrop-blur-md border-b border-white/30 duration-300 transition-all transform text-black/80 px-1 py-1">
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
        <div className="absolute fixed right-0 px-1 py-1 top-3 m-3 bg-white/30 backdrop-blur-md border-b border-white/30 text-black/80 ">
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

          {sortedPages.map((page) => (
            <section key={page.order} className="h-screen snap-start flex ">
              <img
                src={page.url}
                alt={`Page ${page.order}`}
                className=" max-md:h-screen max-md:w-full object-contain "
              />
            </section>
          ))}

          <img
            src={singleManga.backCover}
            alt="Back cover "
            className="max-md:h-screen max-md:w-full object-contain max-md:snap-start"
          />
        </div>
      </div>
    </main>
  );
};

export default ViewManga;
