"use client";
import React, { useEffect, useState } from "react";
import BookCover from "./BookCover";
import BookFileUpload from "./BookFileUpload";
import BookPayment from "./BookPayment";
import { AnimatePresence, motion } from "framer-motion";
import { MdNavigateNext } from "react-icons/md";
import { useBook } from "@/context/BookContext";
import { addDoc, collection } from "firebase/firestore";
import { db } from "@/lib/firebase";
// import { div } from "framer-motion/client";

const bookSectionList = [
  { label: "Cover" },
  { label: "Upload" },
  { label: "Payment" },
];



const BookStepper = () => {
    const {bookData} = useBook();
  const [activeBookPage, setActiveBookPage] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isMounted, setIsMounted] = useState(false);

  const bookTabComponents = [
    <BookCover />,
    <BookFileUpload />,
    <BookPayment />,
  ];

//   Logic to save data to local Storage
  useEffect(() => {
    setIsMounted(true);
    const savedBookPage = localStorage.getItem("currentBookPage");

    if (savedBookPage !== null) {
      setActiveBookPage(Number(savedBookPage));
    }
  }, []);
  useEffect(() => {
    if (isMounted) {
      localStorage.setItem("currentBookPage", activeBookPage);
    }
  }, [activeBookPage, isMounted]);
  if (!isMounted) return null;

  // const showCurrentBookTab = () => {
  //   if (activeBookPage === "Cover") return <BookCover />;
  //   if (activeBookPage === "Upload") return <BookFileUpload />;
  //   if (activeBookPage === "Payment") return <BookPayment />;
  // };

  const goNext = () => {
    setDirection(1);
    setActiveBookPage((prev) => prev + 1);
  };

  const goPrev = () => {
    setDirection(-1);
    setActiveBookPage((prev) => prev - 1);
  };

  const isFirst = activeBookPage === 0;
  const isLast = activeBookPage === bookSectionList.length - 1;



  const handleSubmit = async() =>{
    if (!bookData.title || !bookData.filter) {
      alert("please fill all required fields");
      return;
    }

    try{
    //the variable below will determines which collection the data goes based of the filter
    const firebaseCollectionName = bookData.filter;
     await addDoc(collection(db, firebaseCollectionName),{
        ...bookData,
        createdAt: new Date(),
     });
     alert('Book Upload Succesful');
  } catch (error){
    console.error(error)
    alert("upload Failed")
  }
}



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
                  setDirection(index > activeBookPage ? 1 : -1);
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
            initial={{ x: direction * 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: direction * -100, opacity: 0 }}
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
            onClick={handleSubmit}
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

export default BookStepper;
