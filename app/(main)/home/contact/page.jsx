import React from 'react'
import { CiMail } from "react-icons/ci";
import { BsTelephone } from "react-icons/bs";
import { FaRegPaperPlane } from "react-icons/fa";

function page() {
  return (
    <main className="min-h-dvh">
      <div className="flex md:justify-between max-md:flex-col items-center p-5 w-full gap-3">
        <div className="w-full flex flex-col justify-center items-center  py-8 px-2">
          <div className="flex flex-col gap-4 pb-10">
            <h2 className="text-2xl">Team Logo</h2>
            <h2 className="text-xl">Presents</h2>
            <h2 className="text-2xl">Brand Name</h2>
          </div>
          <div className="flex flex-col w-full border p-2 gap-3">
            <h2 className="text-2xl font-bold">Contact Us</h2>
            <div className="flex items-center justify-center gap-2 text-lg">
              <CiMail />
              <p>ourmailofficial@gmail.com</p>
            </div>
            <div className="flex justify-center flex-col items-center gap-2">
              <div className="flex items-center justify-center gap-2 text-lg">
                <BsTelephone />
                <p>Our customer call lines</p>
              </div>
              <p>08077712399</p>
              <p>07074722899</p>
              <p>09079722219</p>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col justify-center  border py-8 px-2">
          <h2 className="text-xl font-bold text-center">
            We Would Love to hear from you: <br /> lets get in touch
          </h2>
          <form action="" className="flex flex-col px-2 py-4  gap-1">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              className="border py-2 px-2 rounded-sm m-1"
            />
            <label htmlFor="Phone no">Phone no:</label>
            <input
              type="number"
              name="Phone no"
              className="border py-2 px-2 rounded-sm m-1"
            />
            <label htmlFor="name">Email:</label>
            <input
              type="email"
              name="email"
              className="border py-2 px-2 rounded-sm m-1"
            />
            <label htmlFor="name">Your Message:</label>
            <textarea
              className="border py-2 px-2 rounded-sm m-1 resize-none"
              name="comment"
              rows={"5"}
              cols={"40"}
              id=""
            ></textarea>

            <button className='flex border justify-center items-center gap-2 py-2 rounded-sm mt-4'>
              <span>Send Message</span>
              <FaRegPaperPlane className='text-red-700' />
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}

export default page
