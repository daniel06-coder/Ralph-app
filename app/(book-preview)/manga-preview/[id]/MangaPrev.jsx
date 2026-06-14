import { BookHeart, Bookmark, BookOpen, Download, X } from "lucide-react";
import Link from "next/link";
import React from "react";
function MangaPrev({ previewManga }) {
  return (
    <main>
      <div className="md:flex md:justify-between max-md:flex-col  ">
        <div className="max-md:h-[15rem] max-md:relative flex justify-center max-md:w-full md:w-[50%] ">
          <img
            id="p-show"
            src={previewManga.frontCover}
            alt={previewManga.title}
            className="w-full h-full md:h-screen md:p-15 object-cover md:object-contain  md:opacity-60 "
          />

          <div className="absolute  inset-x-0  max-md:hidden  ">
            <div className="flex w-full justify-between px-2 py-4">
              <Link href={"/discover-stories/manga"}>
                <X />
              </Link>
              <Download />
            </div>
          </div>

          {/* small screen below */}
          <div className="absolute md:hidden inset-0  max-md:backdrop-blur-md shadow-xl border-b max-md:border-white/30 bg-gradient-to-br from-dark/50 to-dark/30 ">
            <div className="flex w-full justify-between px-2 py-4">
              <Link href={"/discover-stories/manga"}>
                <X />
              </Link>
              <Download />
            </div>
          </div>

          <div className="absolute md:hidden bottom-0 top-18">
            <img
              src={previewManga.frontCover}
              alt={previewManga.title}
              className="h-[12rem] w-[8rem]  object-cover"
            />
          </div>
        </div>

        <div className="md:w-[50%] md:p-10 ">
          <div className="pt-12 justify-center md:gap-9 flex flex-col items-center gap-5 ">
            <div className="flex flex-col gap-4 md:gap-8 items-center justify-center">
              <h1 className={`text-2xl md:text-3xl font-bold `}>
                {previewManga.title}
              </h1>
              <p className="text-md md:text-xl text-gray-500">
                {previewManga.author}
              </p>
            </div>
            <div className="flex  md:gap-20 gap-15 items-center justify-center  ">
              <div className="flex flex-col items-center active:text-red-600  hover:text-red-600  text-gray-300 text-sm gap-1">
                <Link
                  className="flex flex-col items-center"
                  href={`/view-manga/${previewManga.id}`}
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

          <div className="w-full  border-[0.5px] my-5 md:my-8 md:border-gray-700 border-red-700/50"></div>

          <div className="p-2 flex flex-col md:gap-4  gap-2 ">
            <h2 className="text-xl md:text-2xl font-semibold text-white">Synopsis</h2>

            <p className="text-[14px] md:text-[16px] font-light text-gray-400">
              {previewManga.description}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default MangaPrev;
