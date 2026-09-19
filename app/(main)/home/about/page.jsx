"use client";
import Image from "next/image";
import { motion } from "framer-motion";
// import Image from 'next/image';
import Link from "next/link";
import React from "react";
import { useState } from "react";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaCirclePlay } from "react-icons/fa6";
import { IoIosLink } from "react-icons/io";
import { AiOutlineGlobal } from "react-icons/ai";

const page = () => {
  const [openFaq, setFaqOpen] = useState(false);

  const dropDown = (i) => {
    setFaqOpen(openFaq === i ? false : i);
  };

  const creativeRolesandProf = [
    {
      label: "Uzoma Rapheal",
      role: "Founder",
      img: "/profile/user.jpeg",
      url: "/main",
      founder: true,
      fSmall: true,
    },
    {
      label: "Uzoma Rapheal",
      role: "Founder",
      img: "/profile/user.jpeg",
      url: "/main",
    },
    {
      label: "Akujuobi Valantine",
      role: "Graphic Designer",
      img: "/profile/Aphix.jpeg",
      url: "/main",
    },
    {
      label: "Uzoma Rapheal",
      role: "Founder",
      img: "/profile/ralphimage.jpeg",
      url: "/main",
      founder: true,
      fLarge: true,
    },
    {
      label: "Anyanwu Daniel",
      role: "Developer",
      img: "/profile/DanielA.jpeg",
      url: "/main",
    },
    {
      label: "",
      role: "",
      img: "/profile/user.jpeg",
      url: "/main",
    },
    {
      label: "",
      role: "",
      img: "/profile/user.jpeg",
      url: "/main",
    },
    {
      label: "",
      role: "",
      img: "/profile/user.jpeg",
      url: "/main",
    },
    {
      label: "",
      role: "",
      img: "/profile/user.jpeg",
      url: "/main",
    },
    {
      label: "",
      role: "",
      img: "/profile/user.jpeg",
      url: "/main",
    },
    {
      label: "",
      role: "",
      img: "/profile/user.jpeg",
      url: "/main",
    },
  ];

  return (
    <main className="">
      {/* first section */}
      <section className="">
        <div className="relative max-lg:grid max-lg:grid-cols-2 max-md:grid-cols-1 max-lg:gap-2 px-2  outline">
          {/* the first card is the div below */}
          <div className="max-lg:relative max-lg:top-25 max-md:top-0 flex flex-col justify-start py-3 lg:w-[35%]   max-md:shadow-none md:shadow md:shadow-black/90  ">
            <div className=" flex flex-col max-lg:flex-col-reverse ">
              <div className="flex flex-col  max-md:hidden lg:items-start item-center gap-2  px-7  lg:py-4  w-full lg:border-b ">
                <h2 className="text-[2rem] uppercase">The Best Team</h2>
                <h2 className="text-[2rem]">Presents</h2>
                <img src="/Our Art Is Yours logo.png" alt="" className="md:h-[7rem] md:w-[14rem] object-contain" />
              </div>

              <div className="lg:pr-15 px-7 max-md:px-1 lg:pl-4  py-4  flex flex-col gap-3">
                <h2 className="text-xl uppercase font-bold py-2">
                  <span className="text-red-700 "> What </span> We Offer
                </h2>

                <div className=" flex gap-2 flex-col ">
                  {/* Video below */}
                  <div className="relative flex ">
                    <video
                      src="/miles.mp4"
                      className="h-full w-full"
                      autoPlay
                    ></video>
                    <div className="absolute top-15 inset-0 space-y-2 lg:space-y-6 flex items-center flex-col  ">
                      <FaCirclePlay className="text-red-700 text-[4rem]" />
                      <button className="text-sm uppercase">
                        Click to watch full video
                      </button>
                    </div>
                  </div>

                  <p>
                    Our Services cater to diverse audiences including fans,
                    authors, creators, publishers, brands, studios and
                    businesses
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* the second card that will need an absolute to the parend cards relative */}
          <div className="lg:absolute lg:w-[35%]  lg:right-110 bg-[#191919]/60 lg:top-18 backdrop-blur-xs lg:shadow-white-700/10 lg:shadow-[0px_0px_3px] md:shadow md:shadow-black/90 lg:border-none  ">
            {/* second cards content */}
            <div className="lg:pr-15 px-7 max-md:px-1 lg:pl-4  py-4  flex flex-col gap-3">
              <h2 className="text-xl uppercase font-bold py-2">
                Who <span className="text-red-700 "> We </span> Are
              </h2>

              <div className=" flex gap-2 flex-col ">
                {/* Video below */}
                <div className="relative flex ">
                  <video
                    src="/miles.mp4"
                    className="h-full w-full"
                    autoPlay
                  ></video>
                  <div className="absolute top-15 inset-0 space-y-2 lg:space-y-6 flex items-center flex-col  ">
                    <FaCirclePlay className="text-red-700 text-[4rem]" />
                    <button className="text-sm uppercase">
                      Click to watch full video
                    </button>
                  </div>
                </div>

                <p>
                  Our Art is yours is a creative brand encompassing culture, top
                  notch storytelling, education and entertainment.
                </p>
              </div>
            </div>

            <div className="lg:pr-15 px-7 max-md:px-1 lg:pl-4  py-4  flex flex-col gap-3">
              <h2 className="text-xl uppercase font-bold py-2">
                What <span className="text-red-700 "> We </span> Do
              </h2>

              <div className=" flex gap-2 flex-col ">
                {/* Video below */}
                <div className="relative flex ">
                  <video
                    src="/miles.mp4"
                    className="h-full w-full"
                    autoPlay
                  ></video>
                  <div className="absolute top-15 inset-0 space-y-2 lg:space-y-6 flex items-center flex-col  ">
                    <FaCirclePlay className="text-red-700 text-[4rem]" />
                    <button className="text-sm uppercase">
                      Click to watch full video
                    </button>
                  </div>
                </div>

                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                  omnis aspernatur doloribus in deserunt modi accusantium illo
                  similique.
                </p>
              </div>
            </div>
          </div>
          {/* third card that will have a relative instead of absolute*/}
          <div className="md:relative  lg:w-[35%] max-lg:w-full max-lg:left-60 max-lg:bottom-2  lg:left-216 bg-[#191919]/60 lg:bottom-110 backdrop-blur-xs lg:shadow-white-700/10 lg:shadow-[0px_0px_3px] md:shadow md:shadow-black/90 lg:border-none  ">
            {/* second cards content */}
            <div className="lg:pr-15 px-7 max-md:px-1 lg:pl-4  py-4  flex flex-col gap-3">
              <h2 className="text-xl uppercase font-bold py-2">
                Who We <span className="text-red-700 "> Are </span>
              </h2>

              <div className=" flex gap-2 flex-col ">
                {/* Video below */}
                <div className="relative flex ">
                  <video
                    src="/miles.mp4"
                    className="h-full w-full"
                    autoPlay
                  ></video>
                  <div className="absolute top-15 inset-0 space-y-2 lg:space-y-6 flex items-center flex-col  ">
                    <FaCirclePlay className="text-red-700 text-[4rem]" />
                    <button className="text-sm uppercase">
                      Click to watch full video
                    </button>
                  </div>
                </div>

                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                  omnis aspernatur doloribus in deserunt modi accusantium illo
                  similique.
                </p>
              </div>
            </div>

            <div className="lg:pr-15 px-7 max-md:px-1 lg:pl-4  py-4  flex flex-col gap-3">
              <h2 className="text-xl uppercase font-bold py-2">
                What We <span className="text-red-700 "> Do </span>
              </h2>

              <div className=" flex gap-2 flex-col ">
                {/* Video below */}
                <div className="relative flex ">
                  <video
                    src="/miles.mp4"
                    className="h-full w-full"
                    autoPlay
                  ></video>
                  <div className="absolute top-15 inset-0 space-y-2 lg:space-y-6 flex items-center flex-col  ">
                    <FaCirclePlay className="text-red-700 text-[4rem]" />
                    <button className="text-sm uppercase">
                      Click to watch full video
                    </button>
                  </div>
                </div>

                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                  omnis aspernatur doloribus in deserunt modi accusantium illo
                  similique.
                </p>
              </div>
            </div>
          </div>

          {/* our location and FaQ directory button below, this should be flexed  */}
          <div className=" max-lg:hidden absolute bottom-65 w-[63%] gap-10 shadow  shadow-black/90 flex justify-between py-3 px-5  ">
            <div className="flex flex-col w-[50%]">
              <h2 className="text-xl uppercase font-bold py-2">
                BUSSINESS LOCATION{" "}
              </h2>
              <p className="text-sm">
                From the day of it's inception, our business is located here on
                our business official website at{" "}
                <a href="#" className="underlined">
                  www.ourartisyours.com.{" "}
                </a>{" "}
                On our different social media handles and on internet web
                stores. In the coming years, while still being on the internet,
                we would have key offices all over africa.
              </p>
            </div>

            <div className="flex flex-col w-[50%] gap-5">
              <h2 className="text-xl uppercase font-bold py-2">
                Frequently Asked Question
              </h2>
              {/* copy one faq question and put here */}

              <div className="flex flex-col gap-2 justify-center border px-2 py-2">
                <div className=" flex items-center w-full ">
                  <span className="font-semibold max-lg:text-sm text-lg  w-[95%] ">
                    How do i navigate the website
                  </span>

                  <button
                    className="border-none outline-none  outline-none"
                    onClick={() => dropDown(1)}
                  >
                    {openFaq === 1 ? (
                      <CiCirclePlus className="font-bold text-xl" />
                    ) : (
                      <CiCircleMinus className="font-semibold text-xl" />
                    )}
                  </button>
                </div>

                <p
                  className={`transition-all duration-300 text-sm ease-in-out transform   ${
                    openFaq === 1
                      ? " opacity-0 max-h-0 mb-auto -translate-y-1 pointer-events-none "
                      : "opacity-100 max-h-full mb-auto translate-y-1 pointer-events-auto "
                  } `}
                >
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Quis, dicta! Ipsam incidunt delectus quibusdam obcaecati magni
                  dignissimos eum excepturi suscipit voluptates optio. Iusto
                  tempora quia et, aliquam necessitatibus autem doloremque.
                </p>

                {/* <div className='border w-xl mt-3'></div> */}
              </div>

              <div className="flex flex-col gap-1">
                <Link
                  href={"/home/faq"}
                  className="flex w-full hover:bg-white/20 transform transition-all duration-500  items-center px-2 border py-2 pointer"
                >
                  <button className="text-lg max-lg:text-sm w-[95%]  text-left">
                    Click to View More
                  </button>
                  <FaLongArrowAltRight className="text-xl max-lg:text-sm" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* our location and FaQ directory button below, this is for small and medium screens  */}
        <div className=" lg:hidden max-lg:relative  w-full gap-1 max-md:gap-4 shadow  shadow-black/90 max-lg:flex max-lg:justify-between max-md:flex-col  p-3  ">
          <div className="flex flex-col md:w-[50%]">
            <h2 className="text-xl max-md:text-center uppercase font-bold py-2">
              Our Location
            </h2>
            <p className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia
              corporis voluptatem laboriosam harum quidem quam odit possimus
              eaque quos fugit.
            </p>
          </div>

          <div className="flex flex-col md:w-[50%] gap-5">
            <h2 className="text-xl max-md:text-center uppercase font-bold py-2">
              Frequently Asked Question
            </h2>
            {/* copy one faq question and put here */}

            <div className="flex flex-col gap-2 justify-center border px-2 py-2">
              <div className=" flex items-center w-full ">
                <span className="font-semibold max-lg:text-sm text-lg  w-[95%] ">
                  How do i navigate the website
                </span>

                <button
                  className="border-none outline-none  outline-none"
                  onClick={() => dropDown(1)}
                >
                  {openFaq === 1 ? (
                    <CiCirclePlus className="font-bold text-xl" />
                  ) : (
                    <CiCircleMinus className="font-semibold text-xl" />
                  )}
                </button>
              </div>

              <p
                className={`transition-all duration-300 text-sm ease-in-out transform   ${
                  openFaq === 1
                    ? " opacity-0 max-h-0 mb-auto -translate-y-1 pointer-events-none "
                    : "opacity-100 max-h-full mb-auto translate-y-1 pointer-events-auto "
                } `}
              >
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis,
                dicta! Ipsam incidunt delectus quibusdam obcaecati magni
                dignissimos eum excepturi suscipit voluptates optio. Iusto
                tempora quia et, aliquam necessitatibus autem doloremque.
              </p>

              {/* <div className='border w-xl mt-3'></div> */}
            </div>

            <div className="flex flex-col gap-1">
              <Link
                href={"/main/faq"}
                className="flex w-full hover:bg-white/20 transform transition-all duration-500  items-center px-2 border py-2 pointer"
              >
                <button className="text-lg max-lg:text-sm w-[95%]  text-left">
                  Click to View More
                </button>
                <FaLongArrowAltRight className="text-xl max-lg:text-sm" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* second section */}
      <section className="flex flex-col gap-20">
        <div className="flex max-md:flex-col md:justify-between w-full md:px-2 py-4 gap-6 md:gap-2 ">
          <div className="md:w-[50%] flex flex-col gap-2 ">
            <h1 className="md:text-xl text-lg max-md:px-1 text-red-600">
              OUR DREAM,
            </h1>
            <p className="md:text-2xl text-xl max-md:px-1 font-semibold">
              WHAT WE HOPE TO ACCOMPLISH<span className="text-red-600">?</span>
            </p>
            {/* the background of the below div is gonna be a video and text will be ontop with two button below askig to watch the video or countinue reading */}
            <div className="relative w-full">
              <video
                src="/spideyVid.mp4"
                className="w-full max-md:hidden"
                autoPlay
                muted
                loop
              ></video>
              <video
                src="/milesmoralesPhone.mp4"
                className="w-full md:hidden h-full w-full"
                autoPlay
                muted
                loop
              ></video>
              <div className="inset-0 bg-black/80 absolute backdrop-blur-sm"></div>
              <div className="absolute top-0 left-0 h-full pt-1 md:pt-3 flex flex-col md:gap-4 gap-2 ">
                <p className="md:text-lg text-[0.9rem] px-2 text-white/90 ">
                  We are working towards becoming a world class brand that would
                  elevate creativity in Africa with an emphasis on different art
                  forms and mediums. A brand that would push the boundaries of
                  Animation technology and Computer Generated Imagery (CGI) in
                  Africa while also encompassing culture, top notch
                  storytelling, entertainment, education as well as the ability
                  to positively impact and resonate with different demographics.
                </p>
                <div className="flex justify-center gap-10 mb-auto">
                  <button className="md:px-4 px-2  py-2 bg-red-700 text-sm text-white/90 rounded-sm">
                    Countinue Reading{" "}
                  </button>
                  <button className="md:px-4 px-2 flex justify-center items-center gap-2  py-2 bg-red-700 text-sm text-white/90 rounded-sm">
                    Watch Video <FaCirclePlay />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-5 md:w-[50%]">
            <h1 className="md:text-2xl text-xl max-md:px-1 font-semibold text-center md:text-right">
              Meet Our Dedicated{" "}
              <span className="text-red-600"> Team of Creatives </span> and
              Buisness Professionals
            </h1>

            <div className="grid max-md:grid-cols-2 max-md:place-items-center grid-cols-5 gap-2">
              {creativeRolesandProf.map((item, index) => (
                <Link
                  key={index}
                  href={item.url}
                  className={` flex text-center gap-2 
                    ${item.fSmall === true ? "md:hidden col-span-2" : " "}
                     ${item.fLarge === true ? "max-md:hidden" : ""} 
                     ${item.founder === true ? "flex-col " : "flex-col-reverse"}`}
                >
                  <Image
                    height={800}
                    width={800}
                    src={item.img}
                    alt="/image"
                    className={` object-cover ${item.founder === true ? "h-[11rem] w-[10rem]" : "h-[10rem] w-[8rem]"} `}
                  />
                  <div className={`flex flex-col-reverse`}>
                    <p className="text-white/90 text-semibold text-sm ">
                      Role:{" "}
                      <span className="text-red-600 text-bold ">
                        {item.role}
                      </span>
                    </p>
                    <p className="text-sm font-semibold">{item.label}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="flex max-md:flex-col gap-6 md:justify-between w-full md:px-2 py-4 md:gap-2 ">
          <div className="flex flex-col gap-5 md:w-[50%]">
            <h1 className="md:text-2xl max-md:text-center text-xl max-md:px-1 font-semibold ">
              Our Online <span className="text-red-600"> Sales Channel</span>{" "}
              and Publishing <br className="max-md:hidden" /> Platforms
            </h1>

            <div className="flex flex-col gap-2">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 5, ease: "easeInOut" }}
                className="overflow-hidden whitespace-nowrap  border-black flex gap-1 text-xl max-md:flex-col"
              >
                <h2 className="max-md:text-center max-md:text-sm ">
                  Get Our Official Website at
                  <span className="max-md:hidden ">:</span>
                </h2>
                <Link
                  href={"/"}
                  className="flex gap-1 items-center justify-center"
                >
                  www.offiacialwebsite.com <IoIosLink />{" "}
                </Link>
              </motion.div>

              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 5, ease: "easeInOut" }}
                className="overflow-hidden whitespace-nowrap  border-black flex gap-1 text-xl max-md:flex-col pt-3"
              >
                <h2 className="max-md:text-center max-md:text-sm ">
                  Download Our App on playstore with
                  <span className="max-md:hidden ">:</span>
                </h2>
                <Link
                  href={"/"}
                  className="flex gap-1 items-center justify-center"
                >
                  www.offiacialwebsite.com <IoIosLink />{" "}
                </Link>
              </motion.div>

              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 5, ease: "easeInOut" }}
                className="overflow-hidden whitespace-nowrap  border-black text-xl"
              >
                <div className="flex  justify-center md:items-center gap-1 pt-3 font-semibold max-md:w-full max-md:text-sm max-md:text-center">
                  <AiOutlineGlobal className="max-md:text-xl" />
                  <p className="max-md:flex max-md:justify-center max-md:items-center">
                    Catch us Live on our various social media{" "}
                    <br className="md:hidden" /> platforms
                  </p>
                </div>

                <div className="flex flex-col max-md:justify-center max-md:items-center gap-4 ">
                  <div className="flex  gap-1 pt-3">
                    <Link
                      href={"/main"}
                      className="flex gap-1 items-center justify-center "
                    >
                      <Image
                        height={800}
                        width={800}
                        alt="/"
                        className="h-8 w-8 object-cover "
                        src={"/icons/icons8-instagram-96.png"}
                      />
                      Instagram
                      <p className="pr-3 max-md:hidden">
                        : https://www.instagram.com/nathankress/
                      </p>
                      <IoIosLink />
                    </Link>
                  </div>
                  <div className="flex  gap-1 pt-3">
                    <Link
                      href={"/main"}
                      className="flex gap-1 items-center justify-center "
                    >
                      <Image
                        height={800}
                        width={800}
                        alt="/"
                        className="h-8 w-8 object-cover "
                        src={"/icons/icons8-youtube.png"}
                      />
                      Youtube
                      <p className="pr-3 max-md:hidden">
                        : https://www.youtube.com/watch?v=YvT78voqZY0
                      </p>
                      <IoIosLink />
                    </Link>
                  </div>
                  <div className="flex  gap-1 pt-3">
                    <Link
                      href={"/main"}
                      className="flex gap-1 items-center justify-center "
                    >
                      <Image
                        height={800}
                        width={800}
                        alt="/"
                        className="h-8 w-8 object-cover "
                        src={"/icons/icons8-amazon-96.png"}
                      />
                      Amazon
                      <p className="pr-3 max-md:hidden">
                        : https://www.instagram.com/nathankress/
                      </p>
                      <IoIosLink />
                    </Link>
                  </div>
                  <div className="flex  gap-1 pt-3">
                    <Link
                      href={"/main"}
                      className="flex gap-1 items-center justify-center "
                    >
                      <Image
                        height={800}
                        width={800}
                        alt="/"
                        className="h-8 w-8 object-cover "
                        src={"/icons/icons8-instagram-96.png"}
                      />
                      Instagram
                      <p className="pr-3 max-md:hidden">
                        : https://www.instagram.com/nathankress/{" "}
                      </p>
                      <IoIosLink />
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          <div className="md:w-[50%] flex flex-col gap-4 text-right">
            <h1 className="md:text-2xl text-xl max-md:px-1 font-semibold text-center md:text-right">
              WHY CHOOSE US AND<span className="text-red-600">OUR TEAM ?</span>
            </h1>
            {/* the background of the below div is gonna be a video and text will be ontop with two button below askig to watch the video or countinue reading */}
            <div className="relative w-full">
              <video
                src="/spideyVid.mp4"
                className="w-full max-md:hidden"
                autoPlay
                muted
                loop
              ></video>
              <video
                src="/milesmoralesPhone.mp4"
                className="w-full md:hidden h-full w-full"
                autoPlay
                muted
                loop
              ></video>
              <div className="inset-0 bg-black/80 absolute backdrop-blur-sm"></div>
              <div className="absolute top-0 left-0 h-full pt-1 md:pt-3 flex flex-col md:gap-4 gap-2 ">
                <p className="md:text-lg text-[0.9rem] px-2 text-white/90 ">
                  You should trust us because with our collective interests and
                  efforts we can establish a creative hub and community that can
                  not only assists people discover, develop and monetize their
                  creative talents or skills but one that can inspire, inform,
                  educate, entertain as well as assist Africa to rethink the way
                  we view Artist's and Creativity.
                </p>
                <div className="flex justify-center gap-10 mb-auto">
                  <button className="md:px-4 px-2  py-2 bg-red-700 text-sm text-white/90 rounded-sm">
                    Countinue Reading{" "}
                  </button>
                  <button className="md:px-4 px-2 flex justify-center items-center gap-2  py-2 bg-red-700 text-sm text-white/90 rounded-sm">
                    Watch Video <FaCirclePlay />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default page;
