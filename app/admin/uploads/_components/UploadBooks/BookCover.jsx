import React, { useEffect, useState } from "react";
import { BsPlusCircle } from "react-icons/bs";
const BookCover = () => {
  const selectCategories = [
    { label: "Action", select:"checkbox" },
    { label: "Thriller", select:"checkbox" },
    { label: "Romance", select:"checkbox" },
    { label: "Comedy", select:"checkbox" },
    { label: "Psycological", select:"checkbox" },
    { label: "Adventure", select:"checkbox" },
    { label: "School", select:"checkbox" },
    { label: "History", select:"checkbox" },
    { label: "Horror", select:"checkbox" },
];

const [frontCover, setFrontCover] = useState(null)
const [backCover, setBackCover] = useState(null)

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
        <select
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
        </select>
      </div>

      <div className="flex flex-col gap-10">
        <form action="" className="flex flex-col gap-3">
          <div className="flex gap-4 items-center">
            <label htmlFor="Title" className="font-semibold text-xl">
              Title
            </label>
            <input
              type="text"
              className="w-sm p-1 border-b border-gray-500 outline-none"
            />
          </div>

          <div className="flex gap-4 items-center">
            <label htmlFor="Author" className="font-semibold text-xl">
              Author
            </label>
            <input
              type="text"
              className="w-sm p-1 border-b border-gray-500 outline-none"
            />
          </div>

          <div className="flex w-full flex-col py-5">
            <h2 className="font-semibold text-xl">Categories</h2>
            <div className="grid grid-cols-3  place-center gap-2 lg:w-[35%] py-2">
              {selectCategories.map((item, index) => {
                return (
                  <div key={index} className="flex gap-1 items-center">
                    <label htmlFor="Action">{item.label}</label>
                    <input type={item.select} />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex gap-4 ">
            <label htmlFor="Description" className="font-semibold text-xl">
              Description
            </label>
            <textarea
              name=""
              cols={10}
              rows={3}
              id=""
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
                  onChange={(e) => handleFileChange(e, "front")}
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
                  onChange={(e) => handleFileChange(e, "back")}
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
                <div className=" border-2 border-red-700 border-dotted h-[12rem] w-[9rem] flex justify-center items-center">
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
