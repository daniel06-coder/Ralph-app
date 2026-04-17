'use client'
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import { FaLongArrowAltRight } from "react-icons/fa";

const page = () => {

    // const firstFaqList = [
    //     {label: 'question',  icon: <PiCaretCircleDownThin />,iconTwo: <PiCaretCircleUpThin />, subItems: [
    //         {label:'wianntndmdjdjfnjscnbciscbnsicshcbscbnsicnsicnsicnscnskcnscnoibevebjvdvbjdbvdkvibdvbdkd'}
    //     ] },
    // ]

      const [openFaq, setFaqOpen] = useState(false);

      const dropDown = (i) => {
        setFaqOpen(openFaq === i ? false : i);
      };

  return (
    <main className="flex flex-col  w-full ">
      <h3 className=" py-5 lg:py-10 max-md:text-center md:pl-7 font-bold lg:text-2xl text-lg ">
        Frequently Asked Questions
      </h3>

      <div className="grid grid-cols-3 p-2  max-md:grid-cols-1">
        <div className=" flex flex-col gap-8 ">
          {/* one */}
          <div className="flex flex-col gap-2 justify-center border px-2 py-2">
            <div className=" flex items-center w-full">
              <span className="font-semibold max-lg:text-sm text-xl  w-[95%] ">
                How do i navigate the website
              </span>

              <button
                className="border-none  outline-none"
                onClick={() => dropDown(1)}
              >
                {openFaq === 1 ? (
                  <CiCircleMinus className="font-semibold text-xl" />
                ) : (
                  <CiCirclePlus className="font-bold text-xl" />
                )}
              </button>
            </div>

            <p
              className={`transition-all duration-300 max-lg:text-sm ease-in-out transform   ${
                openFaq === 1
                  ? "opacity-100 max-h-full mb-auto translate-y-1 pointer-events-auto "
                  : " opacity-0 max-h-0 mb-auto -translate-y-1 pointer-events-none "
              } `}
            >
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis,
              dicta! Ipsam incidunt delectus quibusdam obcaecati magni
              dignissimos eum excepturi suscipit voluptates optio. Iusto tempora
              quia et, aliquam necessitatibus autem doloremque.
            </p>

            {/* <div className='border w-xl mt-3'></div> */}
          </div>

          {/* two */}
          <div className="flex flex-col gap-2 justify-center border px-2 py-2">
            <div className=" flex items-center w-full">
              <span className="font-semibold max-lg:text-sm text-xl  w-[95%] ">
                How do i create an account
              </span>

              <button
                className="border-none  outline-none"
                onClick={() => dropDown(2)}
              >
                {openFaq === 2 ? (
                  <CiCircleMinus className="font-semibold text-xl" />
                ) : (
                  <CiCirclePlus className="font-bold text-xl" />
                )}
              </button>
            </div>

            <p
              className={`transition-all duration-300 ease-in-out transform max-lg:text-sm   ${
                openFaq === 2
                  ? "opacity-100 max-h-full mb-auto translate-y-1 pointer-events-auto "
                  : " opacity-0 max-h-0 mb-auto -translate-y-1 pointer-events-none "
              } `}
            >
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis,
              dicta! Ipsam incidunt delectus quibusdam obcaecati magni
              dignissimos eum excepturi suscipit voluptates optio. Iusto tempora
              quia et, aliquam necessitatibus autem doloremque.
            </p>

            {/* <div className='border w-xl mt-3'></div> */}
          </div>

          {/* three */}
          <div className="flex flex-col gap-2 justify-center border px-2 py-2">
            <div className=" flex items-center w-full">
              <span className="font-semibold max-lg:text-sm text-xl  w-[95%] ">
                i haven't received a notification
              </span>

              <button
                className="border-none  outline-none"
                onClick={() => dropDown(3)}
              >
                {openFaq === 3 ? (
                  <CiCircleMinus className="font-semibold text-xl" />
                ) : (
                  <CiCirclePlus className="font-bold text-xl" />
                )}
              </button>
            </div>

            <p
              className={`transition-all duration-300 max-lg:text-sm ease-in-out transform   ${
                openFaq === 3
                  ? "opacity-100 max-h-full mb-auto translate-y-1 pointer-events-auto "
                  : " opacity-0 max-h-0 mb-auto -translate-y-1  pointer-events-none"
              } `}
            >
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis,
              dicta! Ipsam incidunt delectus quibusdam obcaecati magni
              dignissimos eum excepturi suscipit voluptates optio. Iusto tempora
              quia et, aliquam necessitatibus autem doloremque.
            </p>

            {/* <div className='border w-xl mt-3'></div> */}
          </div>

          {/* four */}
          <div className="flex flex-col gap-2 justify-center border px-2 py-2">
            <div className=" flex items-center w-full">
              <span className="font-semibold max-lg:text-sm text-xl  w-[95%] ">
                Can i download content for me
              </span>

              <button
                className="border-none  outline-none"
                onClick={() => dropDown(4)}
              >
                {openFaq === 4 ? (
                  <CiCircleMinus className="font-semibold text-xl" />
                ) : (
                  <CiCirclePlus className="font-bold text-xl" />
                )}
              </button>
            </div>

            <p
              className={`transition-all duration-300 max-lg:text-sm ease-in-out transform   ${
                openFaq === 4
                  ? "opacity-100 max-h-full mb-auto translate-y-1 pointer-events-auto "
                  : " opacity-0 max-h-0 mb-auto -translate-y-1 pointer-events-none "
              } `}
            >
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis,
              dicta! Ipsam incidunt delectus quibusdam obcaecati magni
              dignissimos eum excepturi suscipit voluptates optio. Iusto tempora
              quia et, aliquam necessitatibus autem doloremque.
            </p>

            {/* <div className='border w-xl mt-3'></div> */}
          </div>
        </div>

        <div className="max-md:hidden relative  ">
          <Image
            width={800}
            height={800}
            src={"/phoneslide1.png"}
            alt="hhp"
            className="opacity-50"
          />
        </div>

        <div className=" flex flex-col gap-8">
          {/* five */}
          <div className="flex flex-col gap-2 justify-center border px-2 py-2">
            <div className=" flex items-center w-full">
              <span className="font-semibold max-lg:text-sm text-xl  w-[95%] ">
                How do i contact the customer care
              </span>

              <button
                className="border-none  outline-none"
                onClick={() => dropDown(5)}
              >
                {openFaq === 5 ? (
                  <CiCircleMinus className="font-semibold text-xl" />
                ) : (
                  <CiCirclePlus className="font-bold text-xl" />
                )}
              </button>
            </div>

            <p
              className={`transition-all duration-300 max-lg:text-sm ease-in-out transform   ${
                openFaq === 5
                  ? "opacity-100 max-h-full mb-auto translate-y-1 pointer-events-auto "
                  : " opacity-0 max-h-0 mb-auto -translate-y-1 pointer-events-none "
              } `}
            >
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis,
              dicta! Ipsam incidunt delectus quibusdam obcaecati magni
              dignissimos eum excepturi suscipit voluptates optio. Iusto tempora
              quia et, aliquam necessitatibus autem doloremque.
            </p>

            {/* <div className='border w-xl mt-3'></div> */}
          </div>

          {/* six */}
          <div className="flex flex-col gap-2 justify-center border px-2 py-2">
            <div className=" flex items-center w-full">
              <span className="font-semibold max-lg:text-sm text-xl  w-[95%]  ">
                i haven't received a notification
              </span>

              <button
                className="border-none  outline-none"
                onClick={() => dropDown(6)}
              >
                {openFaq === 6 ? (
                  <CiCircleMinus className="font-semibold text-xl" />
                ) : (
                  <CiCirclePlus className="font-bold text-xl" />
                )}
              </button>
            </div>

            <p
              className={`transition-all duration-300 max-lg:text-sm ease-in-out transform   ${
                openFaq === 6
                  ? "opacity-100 max-h-full mb-auto translate-y-1 pointer-events-auto "
                  : " opacity-0 max-h-0 mb-auto -translate-y-1  pointer-events-none"
              } `}
            >
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis,
              dicta! Ipsam incidunt delectus quibusdam obcaecati magni
              dignissimos eum excepturi suscipit voluptates optio. Iusto tempora
              quia et, aliquam necessitatibus autem doloremque.
            </p>

            {/* <div className='border w-xl mt-3'></div> */}
          </div>

          {/* seven */}
          <div className="flex flex-col gap-2 justify-center border px-2 py-2">
            <div className=" flex items-center w-full">
              <span className="font-semibold max-lg:text-sm text-xl  w-[95%] ">
                Can i download content for me
              </span>

              <button
                className="border-none  outline-none"
                onClick={() => dropDown(7)}
              >
                {openFaq === 7 ? (
                  <CiCircleMinus className="font-semibold text-xl" />
                ) : (
                  <CiCirclePlus className="font-bold text-xl" />
                )}
              </button>
            </div>

            <p
              className={`max-lg:text-sm transition-all duration-300 ease-in-out transform   ${
                openFaq === 7
                  ? "opacity-100 max-h-full mb-auto translate-y-1 pointer-events-auto "
                  : " opacity-0 max-h-0 mb-auto -translate-y-1 pointer-events-none "
              } `}
            >
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis,
              dicta! Ipsam incidunt delectus quibusdam obcaecati magni
              dignissimos eum excepturi suscipit voluptates optio. Iusto tempora
              quia et, aliquam necessitatibus autem doloremque.
            </p>

            {/* <div className='border w-xl mt-3'></div> */}
          </div>

          {/* eight */}

          <div className="flex flex-col gap-1">
            <p className="text-lg max-lg:text-sm text-center font-bold ">
              Tell us more about what you want and we will find the best
              solution for you
            </p>
            <Link
              href={"/main/contact"}
              className="flex w-full  items-center px-2 border py-2 pointer"
            >
              <button className="text-xl max-lg:text-sm w-[95%]  text-left">
                Describe Your Issue
              </button>
              <FaLongArrowAltRight className="text-xl max-lg:text-sm" />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

export default page
