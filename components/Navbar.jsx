'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { CgMenuLeftAlt } from "react-icons/cg";
import { BiSearchAlt } from "react-icons/bi";
import { PiCaretCircleUpThin } from "react-icons/pi";
import { PiCaretCircleDownThin } from "react-icons/pi";
import { PiCaretCircleRightThin } from "react-icons/pi";
// import { motion } from "motion/react"
const Navbar = () => {
    const list = [
      { label: "Home", url: "/" },
      {
        label: " Daily Buzz",
        url: "/main",
        //   subItems:
        // [
        //       {label:"Alogs" , icon:"/", url: "/" },
        //       {label:"Blogs" , icon:"/", url: "/" },
        //       {label:"Latest information" , icon:"/", url: "/" },
        //       {label:"Trending topics" , icon:"/", url: "/" },
        // ]
      },
      {
        label: "Discover Stories",
        url: "/main",
        //   subItems:
        // [
        //      {label:"Manga" , icon:"/", url:"/" },
        //      {label:"Comics" , icon:"/", url:"/" },
        //      {label:"Graphic novels" , icon:"/", url:"/" },
        //      {label:"Stories" , icon:"/", url:"/" },
        // ]
      },
      {
        label: "Merch Zone",
        url: "/main",
        //    subItems:
        //   [
        //   {label:"Collection" , icon:"/", url:"" },
        //   {label:"Fashion Collection" , icon:"/", url:"" },
        //   {label:"Our merch" , icon:"/", url:"" },
        //   {label:"Todays offer" , icon:"/", url:"" },
        // ]
      },
      {
        label: "Spotlight Hub",
        url: "/main",
        //           subItems:
        //  [
        //         {label:"Anime" , icon:"", url:"" },
        //         {label:"Cartoons" , icon:"", url:"" },
        //         {label:"Adverts" , icon:"", url:"" },
        //   ]
      },
      {
        label: "Skillup Guide",
        url: "/main",
        // subItems:
        // [
        //   {label:"Drawing " , icon:"", url: "" },
        //   {label:"Animation" , icon:"", url: "" },
        // ]
      },
      {
        label: "Others",
        icon: <PiCaretCircleDownThin />,
        iconTwo: <PiCaretCircleRightThin />,
        iconThree: <PiCaretCircleUpThin />,
        url: "/main",
        subItems: [
          { label: "Faq", url: "/main/faq" },
          { label: "Contact Us", url: "/main/contact" },
          { label: "About Us", url: "/main/about" },
        ],
      },
    ];
    

        const [collapse, setCollapse] = useState([])
        const collapseFunc = (index) => {
          setCollapse((prev) =>
          prev.includes(index) ? prev.filter((x) => x !== index) : [index]
        )
        }
        

    const  [slider, setSlider] = useState(null)


    const slideLogic = (x) => {
      return(
        setSlider(slider === x ? null : x)
    )
    }

  return (
    <main>
      <div className=" z-10 w-full ">
        {/* FirstNav */}
        <nav
          className={`flex bg-[#161616]/50 backdrop-blur-sm  justify-between items-center px-4 py-1  h-12 w-full    `}
        >
          {/* ${slider ? "" : "shadow-xl shadow-black/30"} */}
          <button
            onClick={() => slideLogic(1)}
            className={`z-20 border-none outline-none  ${slider === 1 ? "opacity-0 delay-300 " : "opacity-100  "}`}
          >
            <CgMenuLeftAlt className="text-xl " />
          </button>
          <div
            onClick={() => slideLogic(2)}
            className="absolute left-1/2 transform -translate-x-1/2 max-md:z-10"
          >
            {/* added this { absolute left-1/2 transform -translate-x-1/2} here */}
            <button className="pointer">TEAM LOGO</button>
          </div>
          <div className="flex shadow-xl  max-md:justify-center max-md:items-center md:relative overflow-hidden">
            <input
              type="text"
              className="max-md:hidden bg-gray-950/50 text-gray-500  text-sm outline-none  rounded-full px-10 py-2"
            />

            <div className=" inset-y-0  md:absolute left-0 md:px-3 py-1 flex  md:justify-center rounded-full ">
              <BiSearchAlt className="md:relative md:top-2   " />
            </div>
            <Link
              href={"/"}
              className="max-md:hidden  hover:bg-black/10  backdrop-blur-sm inset-y-0  md:absolute right-0 px-2 flex  md:justify-center rounded-r-full "
            >
              <button className="text-xs text-bold uppercase outline-none">
                Submit
              </button>
            </Link>
          </div>
        </nav>
        {/* second nav */}
        {/* {slider === 2
        ? "translate-y-12  opacity-100 mb-9 shadow-md shadow-gray-950/30 pointer-events-auto"
        : "-translate-y-full opacity-0 pointer-events-none pb-auto  "} */}
        <nav
          className={`  relative w-full transform bg-[#161616]/50 backdrop-blur-sm flex duration-500 transition-all  justify-between items-center h-10 max-md:h-9 px-2 py-6  `}
        >
          <h2 className="absolute left-1/2 transform -translate-x-1/2 m-auto  max-md:text-xs">
            Brand Name
          </h2>

          <div className="flex md:gap-6 gap-2 md:pr-4 ">
            <Link
              href={"/auth/signin"}
              className="border md:px-4 px-2 md:py-[6px] py-1  rounded-full border-white hover:bg-black/10 justify-center items-center flex "
            >
              <button className="md:text-xs text-[0.6rem] ">Sign Up</button>
            </Link>
            {/* on small screen since only the sign up button is available let the login option be on the poped up modal */}
            <Link
              href={"/"}
              className="max-md:hidden border md:px-4 px-2 md:py-[6px] py-1 rounded-full border-white hover:bg-black/10 justify-center items-center flex "
            >
              <button className="text-xs">Log In</button>
            </Link>
          </div>
        </nav>
      </div>
      {/* nav slider*/}
      <div
        className={` bg-[#161616]/50 backdrop-blur-sm z-11 fixed top-0  flex flex-col fade-in transform ease-in-out transition-all  duration-500   max-md:gap-6  pt-17  h-full w-[85%] md:w-[13rem] lg:w-[16rem]  ${slider === 1 ? "opacity-100 translate-x-0 pointer-events-auto " : "opacity-0 -translate-x-full pointer-events-none"}`}
      >
        <button
          onClick={() => slideLogic(3)}
          className={`absolute top-0 px-3 pt-4 z-20 border-none outline-none ${slider === 1 ? "opacity-100 delay-300 " : "opacity-0  "}`}
        >
          <CgMenuLeftAlt className="text-xl " />
        </button>
        {list.map((items, index) => {
          return (
            <div key={index} className="relative ">
              <Link
                // *************************************************************** Possible bug below
                onClick={() =>
                  collapseFunc(index) || collapse.includes(index)
                    ? slideLogic(1)
                    : null
                }
                href={items.url}
                style={{ animationDelay: `${index * 0.2}s` }}
                className={` ${
                  slider === 1 ? "fadeIn" : ""
                } flex flex-col   pb-2 border-b py-2  lg:hover:bg-white/20  border-b-red-500/50 px-5  `}
              >
                <div className="flex items-center justify-between ">
                  <span className="max-md:text-xl font-semibold">
                    {items.label}
                  </span>
                  {collapse.includes(index) ? (
                    <div>
                      <span className="max-md:hidden flex">
                        {" "}
                        {items.iconTwo}
                      </span>{" "}
                      {/* large screen */}
                      <span className="md:hidden flex"> {items.icon}</span>
                    </div>
                  ) : (
                    <div>
                      {/* <span className='max-md:hidden flex'> {items.iconTwo}</span> */}
                      <span className="md:hidden flex"> {items.iconThree}</span>
                      <span className="max-md:hidden flex ">
                        {" "}
                        {items.icon}
                      </span>{" "}
                      {/*large screen */}
                    </div>
                  )}
                </div>
              </Link>

              <div
                className={` transform ease-in-out transition-all z-[-1] md:absolute md:left-52 lg:left-64 md:-top-1 flex flex-col  md:bg-[#161616]/50   duration-500 ${
                  collapse.includes(index)
                    ? "translate-x-0 opacity-100 pointer-events-auto max-md:max-h-full "
                    : "-translate-x-4 opacity-0 pointer-events-none max-md:max-h-0 "
                }`}
              >
                {items.subItems?.map((secItems, subIndex) => {
                  return (
                    <Link
                      href={secItems.url}
                      key={subIndex}
                      className="flex md:backdrop-blur-xl  flex-col  px-5 md:px-2 max-lg:active:bg-white py-2  lg:hover:bg-white/20 max-md:bg-red-100/10 max-md:my-1 py-1 w-full md:w-[8rem]  "
                    >
                      <span className="text-md md:text-xs font-semi-bold">
                        {" "}
                        {secItems.label}
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}

export default Navbar
