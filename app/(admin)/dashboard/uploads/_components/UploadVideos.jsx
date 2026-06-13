import React from "react";
import { BsCameraVideo, BsPlusCircle } from "react-icons/bs";
import { IoMdPaperPlane } from "react-icons/io";
// import { MdOndemandVideo } from "react-icons/md";

const UploadVideos = () => {
  return (
    <main className="w-full ">
      <div className="w-full h-full flex flex-col gap-3">
        <h1 className="text-xl uppercase font-[400]">Upload Videos</h1>

        <div className="flex justify-between w-full gap-2">
          {/* glossy background */}

          <div className="bg-gray-600/10 rounded-xl backdrop-blur-xl w-full h-full flex flex-col justify-center items-center px-5 py-10 gap-4">
            <p className="text-sm font-semibold text-white/60">
              Nothing has been uploaded
            </p>

            <div className="h-[20em] w-[20em] rounded-full flex items-center justify-center border-5 border-white/80 relative  overflow-hidden ring-5 ring-red-600/60">
              <input
                className="  absolute  inset-0 w-full opacity-0"
                type="file"
              />
              <div className="flex flex-col justify-center items-center">
                <BsCameraVideo className="text-[10rem] text-red-600" />
                <p className="text-gray-300 uppercase text-sm">
                  Drag and drop / click to upload
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:w-[45%] px-2 relative">
            <form action="" className="flex flex-col gap-2">
              <label
                htmlFor="Title"
                className="text-lg font-[200] text-white/80"
              >
                Title
              </label>
              <input
                type="text"
                className="p-2 border  border-white/40 outline-none placeholder:text-sm  text-sm"
                placeholder="Video Title"
              />

              <label
                htmlFor="Description"
                className="text-lg font-[200] text-white/80"
              >
                Description
              </label>
              <textarea
                name="Description"
                className="resize-none p-2 border  border-white/40 outline-none placeholder:text-sm text-sm"
                placeholder="Describe your Video......."
                cols={20}
                rows={5}
                id=""
              ></textarea>

              <div className="flex justify-between">
                <div className="border border-white/40 w-full relative flex items-center justify-center">
                  <input
                    type="file"
                    accept="image/*"
                    // onChange={}
                    className="absolute inset-0 opacity-0"
                  />
                  <div className="flex jusitify-center items-center py-3 gap-2">
                    <BsPlusCircle />
                    <p className="text-lg font-[200] text-white/80">
                      Upload Thumbnail
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex  justify-between w-full absolute bottom-0">
                <button className="px-4 py-2  bg-red-500/40">Cancel</button>
                <button className="flex justify-center items-center gap-1 px-4 py-2  bg-red-500/40">
                  Send <IoMdPaperPlane />
                </button>
              </div>
            </form>
          </div>
        </div>

    
      </div>
    </main>
  );
};

export default UploadVideos;
