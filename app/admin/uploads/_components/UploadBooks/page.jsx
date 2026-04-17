import React, { useState } from "react";
import BookCover from "./BookCover";
import BookFileUpload from "./BookFileUpload";
import BookPayment from "./BookPayment";
import { AnimatePresence, motion } from "framer-motion";
import { MdNavigateNext } from "react-icons/md";
// import { div } from "framer-motion/client";

const bookSectionList = [
  { label: "Cover" },
  { label: "Upload"},
  { label: "Payment" },
];


const bookTabComponents = [<BookCover />, <BookFileUpload />, <BookPayment />];

const page = () => {
  const [activeBookPage, setActiveBookPage] = useState(0);
  const [nextBookPage, setNextBookPage] = useState(1);

  // const showCurrentBookTab = () => {
  //   if (activeBookPage === "Cover") return <BookCover />;
  //   if (activeBookPage === "Upload") return <BookFileUpload />;
  //   if (activeBookPage === "Payment") return <BookPayment />;
  // };

  const goNext = () => {
    setNextBookPage(1);
    setActiveBookPage((prev) => prev + 1);
  };
  const goPrev = () => {
    setNextBookPage(-1);
    setActiveBookPage((prev) => prev - 1);
  };

  const isFirst = activeBookPage === 0;
  const isLast = activeBookPage === bookSectionList.length - 1;

  return (
    <main>
      <nav className="flex justify-start pb-8">
        {bookSectionList.map((tab, index) => {
          return (
            <div
              key={tab.label}
              className=" flex items-center justify-start transition-all duration-300 text-sm text-gray-600"
            >
              <button
                onClick={() => {
                  setNextBookPage(index > activeBookPage ? 1 : -1);
                  setActiveBookPage(index);
                }}
                className={` pointer ${activeBookPage === index ? "active text-white " : " text-gray-600 "} `}
              >
                {tab.label}
              </button>
              {index < bookSectionList.length - 1 && <MdNavigateNext />}
            </div>
          );
        })}
      </nav>

      <div className="text-white">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeBookPage}
            initial={{ x: nextBookPage * 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: nextBookPage * -100, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            {bookTabComponents[activeBookPage]}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex w-full justify-between pt-8">
        {!isFirst && (
          <button
            onClick={goPrev}
            className="px-4 py-2 bg-white/70 hover:bg-white/90  text-black/90  hover:text-red-700  transition-all duration-300 transform  text-sm  outline-none rounded-xs  "
          >
            Previous
          </button>
        )}

        {isLast ? (
          <button
            className="px-4 py-2 bg-white/70 hover:bg-white/90  text-black/90  hover:text-red-700  transition-all duration-300 transform  text-sm  outline-none rounded-xs  "
            onClick={() => console.log("submit")}
          >
            Submit
          </button>
        ) : (
          <button
            onClick={goNext}
            className={` px-4 py-2 bg-white/70 hover:bg-white/90  text-black/90  hover:text-red-700  transition-all duration-300 transform  text-sm  outline-none rounded-xs ${isFirst ? " ml-auto flex justify-end items-end" : ""}`}
          >
            Next
          </button>
        )}
      </div>
    </main>
  );
};

export default page;
