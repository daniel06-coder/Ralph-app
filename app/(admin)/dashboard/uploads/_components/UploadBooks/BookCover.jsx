'use client'
import React, { useEffect, useState } from "react";
import { BsPlusCircle } from "react-icons/bs";
import { useBook } from "@/context/BookContext";
import { uploadImage } from "@/lib/cloudinary";
const BookCover = () => {
  const selectCategories = [
    { label: "Action" },
    { label: "Adventure" },
    { label: "Autobiography"},
    { label: "Comedy"},
    { label: "Crime" },
    { label: "Drama" },
    { label: "Fantasy"},
    { label: "Fiction" },
    { label: "Historical" },
    { label: "History" },
    { label: "Horror" },
    { label: "Mystery" },
    { label: "Naija matter" },
    { label: "Non-fiction" },
    { label: "Psycological"},
    { label: "Romance"  },
    { label: "School" },
    { label: "Sci-fi"},
    { label: "Slice of life" },
    { label: "Sport" },
    { label: "Superhero" },
    { label: "Thriller"},
];

const handleGenreChange =(label) => {
  const current = bookData.genres || [];
  const updated = current.includes(label) ? current.filter((g) => g !== label) : [...current, label];
  updateBookData("genres", updated)
}

const [frontCover, setFrontCover] = useState(null)
const [backCover, setBackCover] = useState(null)
const [dropDownBtn , setDropDownBtn] = useState(false)
const [selectOption, setSelectOption] = useState("Select an Option")


const handleFileChange = (e, type) => {
 const file = e.target.files[0];
 if (file) {
  const url = URL.createObjectURL(file);

  if (type === "front") {
    
    setFrontCover(url)
  }else{
    setBackCover(url)

  }
 }
}


const {bookData, updateBookData} = useBook();
const filterPagesSent =  ["comics", "visual novel", "manga", "light novel"]


const dropDownFunction = () => {
  setDropDownBtn(!dropDownBtn);
};

const handleOptionClicked =  (filterPagesSent)=> {
  setSelectOption(filterPagesSent)
  setDropDownBtn(false);
}
// useEffect(() => {
//   return () => {
//     if (frontCover) URL.revokeObjectURL(frontCover);
//     if (backCover) URL.revokeObjectURL(backCover);
//   };
// }, [frontCover, backCover]);

  return (
    <main>
      <div className=" flex justify-between px-1 pb-10">
        <h1 className="text-2xl ">Upload Book</h1>
        {/* <select
          name=""
          id=""
          className="bg-red-800/70 hover:bg-red-800 text-white/80 w-[10rem] border-none outline-none px-1  "
        >
          <option value="Comic" className="bg-red-900">
            Comic
          </option>
          <option value="Graphic Novel " className="bg-red-900 ">
            Graphic Novel
          </option>
          <option value="Manga" className="bg-red-900 ">
            Manga
          </option>
        </select> */}
        <div
          className={`flex flex-col gap-1 items-center relative border-t border-x border-red-600 ${dropDownBtn ? "" : "border-b"}`}
        >
          <button onClick={dropDownFunction} className="w-[10rem] px-3 py-1 ">
            <h2 className=" ">{selectOption}</h2>
          </button>
          {dropDownBtn && (
            <div
              className={`flex flex-col gap-2 absolute w-[10.1rem] border-b border-x  border-red-600 md:my-8 transition-full   `}
            >
              {filterPagesSent.map((select) => (
                <button
                  key={select}
                  onClick={async () => {
                    handleOptionClicked(select);
                    updateBookData("filter", select);
                  }}
                  className={` py-1    ${bookData.filter === select ? "active bg-red-700" : ""}`}
                >
                  {select}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-10">
        <form action="" className="flex flex-col gap-3">
          {/* Book title */}
          <div className="flex gap-4 items-center">
            <label htmlFor="Title" className="font-semibold text-xl">
              Title
            </label>
            <input
              type="text"
              value={bookData.title}
              onChange={(e) => updateBookData("title", e.target.value)}
              className="w-sm p-1 border-b border-gray-500 outline-none"
            />
          </div>

          {/* Author */}
          <div className="flex gap-4 items-center">
            <label htmlFor="Author" className="font-semibold text-xl">
              Author
            </label>
            <input
              type="text"
              value={bookData.author}
              onChange={(e) => updateBookData("author", e.target.value)}
              className="w-sm p-1 border-b border-gray-500 outline-none"
            />
          </div>

          {/* Genre */}
          <div className="flex w-full flex-col py-5">
            <h2 className="font-semibold text-xl">Categories</h2>
            <div className="grid grid-cols-3  place-center gap-2 lg:w-[35%] py-2">
              {selectCategories.map((item, index) => {
                return (
                  <div key={index} className="flex gap-1 items-center">
                    <input
                      type="checkbox"
                      id={item.label}
                      checked={bookData.genres?.includes(item.label) || false}
                      onChange={() => handleGenreChange(item.label)}
                    />
                    <label htmlFor="Action">{item.label}</label>
                  </div>
                );
              })}
            </div>

            <p className=" text-gray-400">
              Selected: {bookData.genres?.join(", ") || "None"}
            </p>
          </div>
          {/* Description */}
          <div className="flex gap-4 ">
            <label htmlFor="Description" className="font-semibold text-xl">
              Description
            </label>
            <textarea
              name=""
              cols={10}
              rows={3}
              id=""
              value={bookData.description}
              onChange={(e) => updateBookData("description", e.target.value)}
              className="p-2 resize-none w-sm p-1 border border-gray-500 outline-none"
            ></textarea>
          </div>
        </form>

        <div className="w-full  flex flex-col ">
          <h2 className="text-2xl pb-5 ">Book Cover</h2>

          <div className="flex justify-between lg:gap-35">
            {/* This is where user clicks to upload front and back pages */}
            <div className="flex w-full gap-3 flex-col ">
              {/* upload Front cover */}
              <div className="border relative flex items-center justify-center">
                <input
                  type="file"
                  accept="image/*"
                  onChange={async (e) => {
                    handleFileChange(e, "front");
                    const urlFront = await uploadImage(e.target.files[0]);
                    updateBookData("frontCover", urlFront);
                  }}
                  className="absolute inset-0 opacity-0"
                />
                <div className="flex jusitify-center items-center py-3 gap-2">
                  <BsPlusCircle />
                  <p className="uppercase">Upload Front Cover</p>
                </div>
              </div>
              {/* upload Back cover */}
              <div className="border relative flex items-center justify-center">
                <input
                  accept="image/"
                  onChange={async (e) => {
                    handleFileChange(e, "back");
                    const urlBack = await uploadImage(e.target.files[0]);
                    updateBookData("backCover", urlBack);
                  }}
                  type="file"
                  className="absolute inset-0 opacity-0"
                />
                <div className="flex jusitify-center items-center py-3 gap-2">
                  <BsPlusCircle />
                  <p className="uppercase">Upload Back Cover</p>
                </div>
              </div>
            </div>

            {/* This is where the uploaded covers will appear */}
            <div className="w-full flex justify-center gap-10 items-center ">
              {/* Front cover */}
              {frontCover ? (
                <div className="  h-[12rem] w-[9rem] flex justify-center items-center">
                  <img
                    src={frontCover}
                    className="object-cover"
                    alt="frontPreview"
                  />
                </div>
              ) : (
                <div className=" border-2 border-red-700 border-dotted h-[12rem] w-[9rem] flex justify-center items-center">
                  <p className="text-gray-700">Front Cover</p>
                </div>
              )}
              {/* Back cover */}
              {backCover ? (
                <div className="  h-[12rem] w-[9rem] flex justify-center items-center">
                  <img src={backCover} alt="back Preview" />
                </div>
              ) : (
                <div className=" border-2 border-red-700 border-dotted h-[12rem] w-[9rem] flex justify-center items-center">
                  <p className="text-gray-700">Back Cover</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default BookCover;
