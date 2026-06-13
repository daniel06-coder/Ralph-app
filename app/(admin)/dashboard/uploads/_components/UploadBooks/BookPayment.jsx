import { useBook } from '@/context/BookContext';
import React, { useState } from 'react'

const BookPayment = () => {

  const  [pricingOpt, setPricingOpt] = useState("paid")
    const {bookData, updateBookData} = useBook()

     const handlePricingToggle = (option) => {
       setPricingOpt(option);
       updateBookData("free", option === "free");
       if (option === "free") {
         updateBookData("price", "");
         updateBookData("discountPrice", "");
       }
     };

  return (
    <main>
      <div>
        <h1 className="text-2xl pb-2 font-semibold">Pricing</h1>

        <div className="flex flex-col gap-4 ">
          <div className="  flex justify-center items-center  ">
            <div className="border border-gray-700  flex rounded-sm">
              <button
                onClick={() => handlePricingToggle("paid")}
                className={`px-5 py-1 ${pricingOpt === "paid" ? "" : "bg-red-700/40"}`}
              >
                Paid
              </button>
              <div className="border border-gray-700"></div>
              <button
                onClick={() => handlePricingToggle("free")}
                className={`px-5 py-1 ${pricingOpt === "free" ? "" : "bg-red-700/40 "}`}
              >
                Free
              </button>
            </div>
          </div>

          {pricingOpt === "free" ? (
            <div className="flex justify-center items-center h-[13rem]">
              <p className="text-bold text-[5rem] text-gray-600">
                This Book Is Free
              </p>
            </div>
          ) : (
            <form action="" className="flex flex-col py-8 gap-3">
              <div className="flex flex-col gap-2 ">
                <label htmlFor="Title" className="font-semibold text-xl">
                  ($) Enter Price
                </label>
                <div className="pl-7">
                  <input
                    type="number"
                    value={bookData.price}
                    onChange={(e) => updateBookData("price", e.target.value)}
                    className="w-sm p-1 border border-gray-500 outline-none"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2 ">
                <label htmlFor="Author" className="font-semibold text-xl">
                  ($) Enter Discount Price
                </label>
                <div className="flex flex-col w-fit pl-7">
                  <input
                    type="number"
                    className="w-sm p-1 border border-gray-500 outline-none"
                    value={bookData.discountPrice}
                    onChange={(e) =>
                      updateBookData("discountPrice", e.target.value)
                    }
                  />
                  <p className="ml-auto text-sm text-gray-600">optional</p>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>

      <div>
        <h1 className="text-2xl pb-4 font-semibold">Settings</h1>

        <div className="flex items-center gap-3">
          <h2 className="text-xl">Allow Downloads?</h2>
          <button
            onClick={() => updateBookData("allowDownload", true)}
            className={`px-4 py-1 ${bookData.allowDownload === true ? "bg-red-700/40" : ""}`}
          >
            Yes
          </button>
          <button
            onClick={() => updateBookData("allowDownload", false)}
            className={`px-4 py-1 ${bookData.allowDownload === false ? "bg-red-700/40" : ""}`}
          >
            No
          </button>
        </div>
      </div>
    </main>
  );
}

export default BookPayment
