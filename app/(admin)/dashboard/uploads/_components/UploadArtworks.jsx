import { db } from "@/lib/firebase";
import { collection, deleteDoc, doc, getDocs, setDoc } from "firebase/firestore";
import { Loader, TrashIcon } from "lucide-react";
import React, { useEffect, useState } from "react";
import { BsCloudUpload } from "react-icons/bs";
import { IoMdPaperPlane } from "react-icons/io";

const UploadArtworks = () => {
  const [artTitle, setArtTitle] = useState("");
  const [artDescription, setArtDescription] = useState("");
  const [imageSelected, setImageSelected] = useState(null);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);

  const uploadImage = async (file) => {
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

    return data.secure_url;
  };

  const handleAdd = async () => {
    try {
      setUploading(true);

      const imageUrl = await uploadImage(imageSelected);

      await setDoc(
        doc(db, "artworks", crypto.randomUUID()),
        {
          artTitle,
          artDescription,
          image: imageUrl,
          createdAt: new Date(),
        },
        { merge: true },
      );

      setArtTitle("");
      setArtDescription("");
      setImageSelected(null);

      setUploading(false);
    } catch (error) {
      alert("Product not Sent");
    }finally{
      setUploading(false);
    }
  };
  
  // retrives the products and adds it to The already uploaded in the function
  const getProducts = async () => {
    try {
      const snapshot = await getDocs(collection(db, "artworks"));
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setProducts(data);
    } catch (error) {
      console.error("Failed to fetch:", error);
    }
  };
  useEffect(() => {
    getProducts();
  }, []);

  const handleDelete = async (id) => {
      if (!id) return;

      await deleteDoc(doc(db, "artworks", id))
      getProducts();
  }


  return (
    <main className="w-full ">
      <div className="w-full h-full flex flex-col gap-3">
        <h1 className="text-xl uppercase font-[400]">Upload File</h1>

        <div className="flex justify-between w-full gap-2">
          {/* glossy background */}

          <div className="bg-gray-600/10 rounded-xl backdrop-blur-xl w-full h-full flex flex-col justify-center items-center px-5 py-10 gap-4">
            {/* <p className="text-sm font-semibold text-white/60">
              Nothing has been uploaded
            </p> */}
            {uploading === true ? (
              <div
                className={` h-[20em] w-[20em] rounded-full flex items-center justify-center border-5 border-white/80 relative  gap-1 overflow-hidden ring-5 ring-red-600/60`}
              >
                <Loader className="animate-spin" />
                <p className="text-2xl">Uploading</p>
              </div>
            ) : (
              <div className="h-[20em] w-[20em] rounded-full flex items-center justify-center border-5 border-white/80 relative  overflow-hidden ring-5 ring-red-600/60">
                <input
                  className="  absolute  inset-0 w-full opacity-0"
                  type="file"
                  accept="image/"
                  onChange={(e) => setImageSelected(e.target.files[0])}
                />

                <div className="flex flex-col justify-center items-center">
                  <BsCloudUpload className="text-[10rem] text-red-600" />
                  <p className="text-gray-300 uppercase text-sm">
                    Drag and drop / click to upload
                  </p>
                </div>
              </div>
            )}
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
                value={artTitle}
                onChange={(e) => setArtTitle(e.target.value)}
                className="p-2 border  border-white/40 outline-none placeholder:text-sm  text-sm"
                placeholder="Artwork Title"
              />

              <label
                htmlFor="Description"
                className="text-lg font-[200] text-white/80"
              >
                Description
              </label>
              <textarea
                value={artDescription}
                onChange={(e) => setArtDescription(e.target.value)}
                className="resize-none p-2 border  border-white/40 outline-none placeholder:text-sm text-sm"
                placeholder="Describe your Art......."
                cols={20}
                rows={5}
                id=""
              ></textarea>

              <div className="flex  justify-between w-full absolute bottom-0">
                <button className="px-4 py-2  bg-red-500/40">Cancel</button>
                {uploading === true ? (
                  <p>Uploading...</p>
                ) : (
                  <button
                    type="button"
                    onClick={handleAdd}
                    disabled={uploading}
                    className="flex justify-center items-center gap-1 px-4 py-2  bg-red-500/40"
                  >
                    Send <IoMdPaperPlane />
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="py-5">
        <div>
          <h2>Already Uploaded</h2>
        </div>
        <div className="flex  space-x-2 p-4   overflow-x-auto scrollbar-hide   h-[15rem] w-full ">
          {products.map((product) => (
            <div key={product.id} className=" flex-shrink-0 relative ">
              <img
                src={product.image}
                alt={product.artTitle}
                width="800"
                className=" h-full w-full object-cover "
              />

              <div className="absolute justify-center flex  inset-0 bg-black/50  top-0">
                <button
                  onClick={() => handleDelete(product.id)}
                  className="text-red-700"
                >
                  <TrashIcon />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default UploadArtworks;
