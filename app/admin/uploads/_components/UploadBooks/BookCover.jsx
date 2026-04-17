import React from "react";
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

  return (
    <main>
      <div className=" flex justify-between px-1 pb-10">
        <h1 className="text-xl ">Upload Book</h1>
        <select
          name=""
          id=""
          className="bg-red-800/70 hover:bg-red-800 text-white/80 w-[10rem] border-none outline-none px-1  "
        >
          <option value="Comic" className="bg-red-900">
            Comic
          </option>
          <option
            value="Graphic Novel "
            className="bg-red-900 "
          >
            Graphic Novel
          </option>
          <option value="Manga" className="bg-red-900 ">
            Manga
          </option>
        </select>
      </div>

      <div className="flex flex-col">
        <form action="" className="flex flex-col">
          <label htmlFor="Title">Title</label>
          <input type="text" className="w-xl" />
          <label htmlFor="Author">Author</label>
          <input type="text" />
          <div>
            <div>Categories</div>
            {selectCategories.map((item, index) => {
              return (
                <div key={index}>
                  <label htmlFor="Action">{item.label}</label>
                  <input type={item.select} />
                </div>
              );
            })}
          </div>
          <label htmlFor="Description"></label>
          <textarea
            name=""
            cols={70}
            rows={8}
            id=""
            className="p-2 resize-none"
          ></textarea>
        </form>

        <div>
          <h2>Cover</h2>

          <div>
            {/* This is where user clicks to upload front and back pages */}
            <div>
              {/* upload Front cover */}
              <div>
                <input type="file" />
                <div>
                  <p>Front Cover</p>
                  <BsPlusCircle />
                </div>
              </div>
              {/* upload Back cover */}
              <div>
                <input type="file" />
                <div>
                  <p>Back Cover</p>
                  <BsPlusCircle />
                </div>
              </div>
            </div>

            {/* This is where the uploaded covers will appear */}
            <div>
              {/* Front cover */}
              <div className=" border border-dotted">
                <p>Front Cover</p>
                <BsPlusCircle />
              </div>
              {/* Back cover */}
              <div className="border border-dotted">
                <p>Back Cover</p>
                <BsPlusCircle />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default BookCover;
