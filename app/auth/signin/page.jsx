import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaApple, FaInstagram, FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";



const page = async () => {


  return (
    <main className="min-h-dvh flex md:py-5  justify-center">
      <div className=" flex md:my-5 flex-col lg:border   lg:bg-black/10 lg:px-20 max-md:w-full ">
        <div className="flex flex-col   h-full justify-center p-3 rounded-md space-y-6 md:space-y-8  ">
          <h1 className="text-center  font-bold text-2xl pb-3 ">
            Sign in to your Account
          </h1>

          <form className="border flex items-center justify-center gap-3  py-3  rounded-full w-full">
            <FcGoogle className="text-2xl" />
            <button type="submit">
              <p>Continue with Google</p>
            </button>
          </form>

          <button className="border flex items-center justify-center gap-3 py-3 rounded-full w-full">
            <FaFacebook className="text-2xl" />
            <p>Continue with Facebook</p>
          </button>
          <button className="border flex items-center justify-center gap-3  py-3  rounded-full w-full">
            <FaInstagram className="text-2xl" />
            <p>Continue with Instagram</p>
          </button>
          <button className="border flex items-center justify-center gap-3  py-3  rounded-full w-full">
            <FaSquareXTwitter className="text-2xl" />
            <p>Continue with Twitter</p>
          </button>

          <p className="text-xs  text-center">
            By signing in, you agree to our terms and privacy policy
          </p>
        </div>
      </div>
    </main>
  );
};

export default page;
