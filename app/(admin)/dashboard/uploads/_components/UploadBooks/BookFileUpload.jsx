import { useBook } from "@/context/BookContext";
import { div } from "framer-motion/client";
import { Form } from "lucide-react";
import React, { useEffect, useState } from "react";
import { GrGallery } from "react-icons/gr";
import { MdDelete } from "react-icons/md";
// import { MdOutlineUploadFile } from "react-icons/md";

const BookFileUpload = () => {
  const [comicUpload, setComicUpload] = useState([]);
  const [uploading, setUploading] = useState(false);
  const { bookData, updateBookData } = useBook();

  const handleComicUpload = async (e) => {
    //  if you just want to upload a single file no need for the Array.from
    const files = Array.from(e.target.files); // convert FileList to array
    setUploading(true);

    try {
      // use this logic below if you want to upload multiple files
      const newUploads = await Promise.all(
        files.map(async (file, index) => {
          const formData = new FormData();
          formData.append("file", file);
          formData.append(
            "upload_preset",
            process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET,
          );

          const response = await fetch(
            `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
            {
              method: "POST",
              body: formData,
            },
          );

          const data = await response.json();

          return {
            id: crypto.randomUUID(), // unique id for each image
            url: data.secure_url,
            name: file.name,
            order: comicUpload.length + index,
          };
        }),
      );
      setComicUpload((prev) => [...prev, ...newUploads]);
      const updated = [...comicUpload, ...newUploads];
      updateBookData(
        "bookPages",
        updated.map((p) => ({
          url: p.url,
          order: p.order,
        })),
      );
      return updated;
    } catch (error) {
      console.error("Upload Failed", error);
      alert("image upload failed");
    } finally {
      setUploading(false);
    }
  };
  // setComicUpload((prev) => [...prev, ...newUploads]); // keeps previous uploads

  // useEffect(() =>{
  //   const savedComicToLocal = JSON.parse(localStorage.getItem("comicUploads")) || [];
  //   setComicUpload(savedComicToLocal)
  // }, []);
  // useEffect(() => {
  //   localStorage.setItem("comicUploads", JSON.stringify(comicUpload));
  // }, [comicUpload])

  // use this logic below if you just want to upload a single file
  // if (comic){
  //   const url = URL.createObjectURL(comic)
  //   setComicUpload(url)
  // }

  //  const check = files.forEach( (mov, i, arr) => {
  //     if(arr.includes(files)){
  //       i + 1
  //     }
  //   })
  //   console.log(check)

  // call the function later with the code inside

  return (
    <main>
      {/* header and filter below */}
      <div className="flex justify-between ">
        <h1 className="text-2xl font-semibold">Upload Book pages</h1>

        <div className="flex flex-col">
          {/* add a counter below that will help know how man pages have been added to the page */}
          <p className="text-xl font-semibold">200 Pages Max</p>

          <div className="flex py-6 gap-2">
            <p className="text-xl  uppercase"> upload by</p>
            <select
              name=""
              id=""
              className="bg-red-800/70 hover:bg-red-800 text-white/80 w-[10rem] border-none outline-none px-1  "
            >
              <option value="">Image</option>
              <option value="">File</option>
            </select>
          </div>
        </div>
      </div>
      {/* upload photo/file below */}
      <div className="flex justify-center items-center">
        <div className="border-5 border-white/80 overflow-hidden ring-5 ring-red-600/60 relative flex items-center justify-center h-[15rem] w-[20rem]">
          {comicUpload.length >= 200 ? (
            <div className="relative h-[11rem] ">
              <input type="none" className="absolute inset-0 opacity-0" />
              <p className="absolute top-0 w-[10rem]">Max upload Reached</p>
            </div>
          ) : (
            <input
              type="file"
              // use logic to to check if users chooses send by file and if so change the accept below to file
              accept="image/*" // ensures only images are selected
              multiple // allows the selecting multiple files
              onChange={handleComicUpload}
              className="absolute inset-0 opacity-0"
            />
          )}

          <div className="flex flex-col jusitify-center items-center py-3 gap-4">
            {/* use logic to to check if users chooses send by file and if so
            change the icons below to indicate */}
            <GrGallery className="text-[5rem] text-red-600" />
            {/* <MdOutlineUploadFile className="text-[5rem] text-red-600"  /> */}
            {/* the Upload comics can change to upload graphic novel or manga if they are selected by filter  */}
            <p className="text-gray-300 uppercase text-sm">Upload Comics</p>
          </div>
          {uploading && (
            <p className="text-sm text-gray-400 absolute bottom-2">
              {" "}
              Uploading.....{" "}
            </p>
          )}
        </div>
      </div>

      {/* image/file preview below */}
      {/* Upload a single image */}
      {/* <div>
        <img src={comicUpload} alt="" />
      </div> */}

      {/* Upload multiple images below */}
      <div className="flex flex-col gap-4 pt-10">
        <div className="flex justify-between">
          <h1 className="text-xl">Preview Uploads</h1>
          <p
            className={`text-xl font-semibold ${comicUpload.length >= 200 ? "text-red-700" : " "}`}
          >
            {comicUpload.length}/<span className="text-red-700">200</span>
          </p>
        </div>

        <div className="grid grid-cols-3 h-full gap-1 px-10 py-5">
          {comicUpload.map((comic, index) => (
            <div key={comic.id} className="relative ">
              <img
                src={comic.url}
                alt={comic.name}
                className="h-[30rem] w-full object-cover"
              />{" "}
              {/* display images */}
              <div className="absolute inset-0 bg-black/30"></div>
              <div className="absolute top-0 flex justify-between w-full px-2 bg-white/40 backdrop-blur-sm ">
                <span className="uppercase text-black/80 font-semibold">
                  page {index + 1}
                </span>{" "}
                {/* shows upload order */}
                <button
                  className="text-xl text-black/80"
                  value={bookData.bookPages}
                  onClick={() => {
                    setComicUpload((prev) => {
                      const updated = prev.filter((c) => c.id !== comic.id);
                      updateBookData(
                        "bookPages",
                        updated.map((p) => ({
                          url: p.url,
                          order: p.order,
                        })),
                      );
                      return updated;
                    });
                  }}
                >
                  <MdDelete />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default BookFileUpload;
