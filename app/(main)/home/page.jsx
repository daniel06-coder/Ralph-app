'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { FaCirclePlay } from "react-icons/fa6";
import { FcLike } from "react-icons/fc";
import { CiBookmarkPlus } from "react-icons/ci";
import { CiBookmarkCheck } from "react-icons/ci";
import { IoCaretBackSharp } from "react-icons/io5";

const page = () => {

  const availablePro = [
    {
      likeIcon: <FcLike />,
      likeLabel: "2.8k",
      bookIcon: <CiBookmarkPlus />,
      bookIconTwo: <CiBookmarkCheck />,
      img: "/img/image (39).jpeg",
      label: "diddy do it",
      date: "12/7/2025",
    },

    {
      likeIcon: <FcLike />,
      likeLabel: "2.8k",
      bookIcon: <CiBookmarkPlus />,
      bookIconTwo: <CiBookmarkCheck />,
      img: "/img/image (18).jpeg",
      label: "diddy do it",
      date: "12/7/2025",
    },

    {
      likeIcon: <FcLike />,
      likeLabel: "2.8k",
      bookIcon: <CiBookmarkPlus />,
      bookIconTwo: <CiBookmarkCheck />,
      img: "/img/image (3).jpeg",
      label: "diddy do it",
      date: "12/7/2025",
    },
    {
      likeIcon: <FcLike />,
      likeLabel: "2.8k",
      bookIcon: <CiBookmarkPlus />,
      bookIconTwo: <CiBookmarkCheck />,
      img: "/img/image (34).jpeg",
      label: "diddy do it",
      date: "12/7/2025",
    },
    {
      likeIcon: <FcLike />,
      likeLabel: "2.8k",
      bookIcon: <CiBookmarkPlus />,
      bookIconTwo: <CiBookmarkCheck />,
      img: "/img/image (36).jpeg",
      label: "diddy do it",
      date: "12/7/2025",
    },

    {
      likeIcon: <FcLike />,
      likeLabel: "2.8k",
      bookIcon: <CiBookmarkPlus />,
      bookIconTwo: <CiBookmarkCheck />,
      img: "/img/image (29).jpeg",
      label: "diddy do it",
      date: "12/7/2025",
    },
    {
      likeIcon: <FcLike />,
      likeLabel: "2.8k",
      bookIcon: <CiBookmarkPlus />,
      bookIconTwo: <CiBookmarkCheck />,
      img: "/img/image (40).jpeg",
      label: "diddy do it",
      date: "12/7/2025",
    },

    {
      likeIcon: <FcLike />,
      likeLabel: "2.8k",
      bookIcon: <CiBookmarkPlus />,
      bookIconTwo: <CiBookmarkCheck />,
      img: "/wolverine.jpg",
      label: "diddy do it",
      date: "12/7/2025",
    },

    {
      likeIcon: <FcLike />,
      likeLabel: "2.8k",
      bookIcon: <CiBookmarkPlus />,
      bookIconTwo: <CiBookmarkCheck />,
      img: "/hulk.jpg",
      label: "diddy do it",
      date: "12/7/2025",
    },
    {
      likeIcon: <FcLike />,
      likeLabel: "2.8k",
      bookIcon: <CiBookmarkPlus />,
      bookIconTwo: <CiBookmarkCheck />,
      img: "/wolverine.jpg",
      label: "diddy do it",
      date: "12/7/2025",
    },
    {
      likeIcon: <FcLike />,
      likeLabel: "2.8k",
      bookIcon: <CiBookmarkPlus />,
      bookIconTwo: <CiBookmarkCheck />,
      img: "/hulk.jpg",
      label: "diddy do it",
      date: "12/7/2025",
    },
    {
      likeIcon: <FcLike />,
      likeLabel: "2.8k",
      bookIcon: <CiBookmarkPlus />,
      bookIconTwo: <CiBookmarkCheck />,
      img: "/hulk.jpg",
      label: "diddy do it",
      date: "12/7/2025",
    },
    // {
    //     likeIcon:<FcLike/>,
    //     likeLabel:"2.8k",
    //     bookIcon:<CiBookmarkPlus />,
    //     bookIconTwo:<CiBookmarkCheck /> ,
    //     img:"/comic.png" ,
    //     label:"diddy do it",
    //     date:"12/7/2025",
    //         },
    //   {
    //     likeIcon:<FcLike/>,
    //     likeLabel:"2.8k",
    //     bookIcon:<CiBookmarkPlus />,
    //     bookIconTwo:<CiBookmarkCheck /> ,
    //     img:"/hulk.jpg" ,
    //     label:"diddy do it",
    //     date:"12/7/2025",
    //         },
    //   {
    //     likeIcon:<FcLike/>,
    //     likeLabel:"2.8k",
    //     bookIcon:<CiBookmarkPlus />,
    //     bookIconTwo:<CiBookmarkCheck /> ,
    //     img:"/hulk.jpg" ,
    //     label:"diddy do it",
    //     date:"12/7/2025",
    //         },
    // {
    //     likeIcon:<FcLike/>,
    //     likeLabel:"2.8k",
    //     bookIcon:<CiBookmarkPlus />,
    //     bookIconTwo:<CiBookmarkCheck /> ,
    //     img:"/comic.png" ,
    //     label:"diddy do it",
    //     date:"12/7/2025",
    //         },
  ];

 const images = [
   { img: "/slide1.jpg", phoneImg: "/img/image (33).jpeg" },
   { img: "/slide2.jpg", phoneImg: "/img/image (42).jpeg" },
   { img: "/slide6.jpg", phoneImg: "/img/image (30).jpeg" },
   { img: "/slide7.jpg", phoneImg: "/img/image (28).jpeg" },
   { img: "/slide8.jpg", phoneImg: "/img/image (37).jpeg" },
   { img: "/slide9.jpg", phoneImg: "/img/image (39).jpeg" },
   { img: "/slide10.jpg", phoneImg: "/img/image (40).jpeg" },
 ];

   const firstFooterList = [
        {label: "Creative Art", icon: "/next.svg" , subItems:
            [
                {label: 'Artworks', icon:"🎨", url: "/" },
                {label: 'Comics', icon:"💥", url: "/" },
                {label: 'Graphic Novels', icon:"📚", url: "/" },
                {label: 'Stories', icon:"⚔️", url: "/" },
                {label: 'Articles', icon:"📃", url: "/" },
                {label: 'Creativity', icon:"🎭", url: "/" },
                {label: 'Conventions', icon:"🧟‍♀️", url: "/" },
                {label: 'Competitions', icon:"👩‍🎨", url: "/" },
            ]
        },
        // 🐉
      
        {label: "Media", icon: "/next.svg" , subItems:
            [
                {label: 'Animations', icon:"🤖", url: "/" },
                {label: 'Videos', icon:"📺", url: "/" },
                {label: 'Podcasts', icon:"🎙️", url: "/" },
                {label: 'Blogs', icon:"🗞️", url: "/" },
                {label: 'Tutorials', icon:"👨‍🏫", url: "/" },
                {label: 'Live Sessions', icon:"📹", url: "/" },
            ]
        },

          {label: "Merchandise", icon: "/next.svg" , subItems:
            [
                {label: 'Fashion assesories', icon:"💎", url: "/" },
                {label: 'Items Of Interest', icon:"😉", url: "/" },
                {label: 'Collections', icon:"🎭", url: "/" },
                {label: 'Todays offer', icon:"🎫", url: "/" },
                {label: 'Print Collections', icon:"👕", url: "/" },
                {label: 'Publishing Platforms', icon:"🌏", url: "/" },
            ]
        },
    ]

 const[currentIndex, setCurrentIndex] = useState(0);

 useEffect(() => {
  const interval = setInterval(() => {
    nextSlide();
  }, 3000);
    return () => clearInterval(interval);
 }, [currentIndex])
 
 const nextSlide = () => {
  setCurrentIndex((prev) => (prev + 1) % images.length)
 }

   const [dropDown, setDropDown] = useState(null)
  
  const dropdownFunc = (i) => {
    return(
      setDropDown(dropDown === i ? null : i )
    )
  }

   const [play, setPlay] = useState(false)
   const [showPlay, setShowPlay] = useState(false)


   const [bookMark, setBookMark] = useState([])
   
   const toogleBookmark = (index) => {

    setBookMark((prev) => 
      prev.includes(index) ? prev.filter((x) => x !== index) : [...prev, index]
    )

   }

  // Load bookmarks from localStorage when component mounts
  useEffect(() => {
    const savedBookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
    setBookMark(savedBookmarks);
  }, []);

  //  Save bookmarks to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("bookmarks", JSON.stringify(bookMark));
  }, [bookMark]);
  

  const socialMedia = [
    {icon:"/icons/icons8-facebook.png", index:"@username", url:"/"},
    {icon:"/icons/icons8-instagram-96.png", index:"@username", url:"/"},
    {icon:"/icons/icons8-linkedin.png", index:"@username", url:"/"},
    {icon:"/icons/icons8-pinterest.png", index:"@username", url:"/"},
    {icon:"/icons/icons8-rumble.png", index:"@username", url:"/"},
    {icon:"/icons/icons8-snapchat.png", index:"@username", url:"/"},
    {icon:"/icons/icons8-telegram.gif", index:"@username", url:"/"},
    {icon:"/icons/icons8-tiktok.gif", index:"@username", url:"/"},
    {icon:"/icons/icons8-tumblr.png", index:"@username", url:"/"},
    {icon:"/icons/icons8-twitch.png", index:"@username", url:"/"},
    {icon:"/icons/icons8-whatsapp.gif", index:"@username", url:"/"},
    {icon:"/icons/icons8-x.png", index:"@username", url:"/"},
    {icon:"/icons/icons8-youtube.png", index:"@username", url:"/"},
  ]
  

 return (
   <main className=" min-h-dvh relative">
     {/*video to be hovered below */}
     <div
       className={`fixed z-20 top-0 bg-black/50 backdrop-blur-sm  max-lg:p-5   w-full flex items-center justify-center h-screen   duration-300 ease-in-out transition-all  ${showPlay ? "opacity-100 pointer-events-auto " : "opacity-0 pointer-events-none  "}`}
     >
       <button
         onClick={() => setShowPlay(!showPlay)}
         className={`md:bg-red-500 absolute top-3 text-sm md:text-xl text-white   md:h-7 md:w-7 md:rounded-full text-center outline-none border-none right-4 pointer `}
       >
         &#10005;
       </button>
       <video
         src="tatevid.mp4"
         className="lg:h-[400px]  md:h-[300px] ring-2 ring-red-800 rounded-xl "
         controls
       ></video>
     </div>

     {/* hero section */}
     <section className=" relative ">
       <div className="overflow-hidden h-[600px] max-lg:h-[700px] max-md:h-[500px] w-full relative">
         <div
           className="flex   transition-transform duration-700 ease-in-out"
           style={{ transform: `translateX(-${currentIndex * 100}%)` }}
         >
           {/* large screen images */}
           {images.map((pic, index) => (
             <Image
               height={800}
               width={800}
               key={index}
               src={pic.img}
               alt={`slide-${index}`}
               className="min-w-full max-lg:hidden flex  h-full object-cover"
             />
           ))}
           {/* small screen images */}
           {images.map((pic, index) => (
             <Image
               height={800}
               width={800}
               key={index}
               src={pic.phoneImg}
               alt={`slide-${index}`}
               className="min-w-full lg:hidden flex  h-full object-cover"
             />
           ))}
         </div>
       </div>

       {/* <Image src={images[currentIndex]} className='background-img transition-all duration-300  ease-in-out ' alt='sliderOne' id='one' height={800} width={800}  /> */}

       <div className="absolute top-0 bg-black/80 flex lg:pt-20   flex-col  inset-0 p-3">
         <div className=" flex justify-center max-lg:h-full max-lg:p-2 max-md:text-center max-md:gap-8 lg:gap-8 md:gap-10 flex-wrap items-center flex-col ">
           <h1 className="text-[3rem] text-white max-lg:text-[2rem] font-extrabold  uppercase">
             Unl<span className="text-red-600">o</span>ck Y
             <span className="text-red-600">o</span>ur creat
             <span className="text-red-600">i</span>ve s
             <span className="text-red-600">i</span>de
           </h1>
           <div className=" w-full   flex flex-col justify-center items-center gap-2 ">
             <p className="text-sm text-red-600 text-xl font-semibold">
               The Official Website of
             </p>
             <Image
               height={800}
               width={800}
               className="max-md:h-[120px] md:h-[15rem] w-full object-contain  "
               alt="Our Art is Yours Logo"
               src={"/Our Art Is Yours logo.png"}
             />
             <p className="max-lg:text-sm text-xl text-white  font-semibold">
               Browse our official Art, graphic novels, comics, Tv shows,
               mechandise and more...{" "}
             </p>
           </div>
           <Link href={"/main"}>
             <button className="bg-red-500 md:px-20 uppercase hover:bg-white hover:text-red-500 hover:scale-105 transition-all duration-500 transform rounded-sm max-md:px-8 py-3 mt-5 max-md:w-full">
               unlock now
             </button>
           </Link>
         </div>
       </div>
     </section>

     {/* section two */}
     <section className="flex justify-center space-y-5 p-5 md:p-10 flex-col">
       <div
         className={`flex flex-col  p-1 gap-3  ${dropDown === 1 ? "md:h-full" : "md:h-23"}`}
       >
         <h1 className="text-2xl uppercase font-semibold">
           {" "}
           <span className="text-red-500">who</span> we are
         </h1>
         <p className="text-sm text-white">
           Our Art is yours is a creative brand encompassing culture, top notch
           storytelling, education and entertainment.
         </p>
       </div>

       <div
         className={`flex flex-col p-1 gap-3  ${dropDown === 2 ? "md:h-full" : "md:h-23"} `}
       >
         <h1 className="text-2xl uppercase font-semibold text-right">
           {" "}
           what we <span className="text-red-500">offer</span>{" "}
         </h1>
         <p className="text-sm text-center">
           Our Services cater to diverse audiences including fans, authors,
           creators, publishers, brands, studios and businesses
           <a href='/home/about'
             className={`text-white/60`}
           >
             {" "}
             Continue Reading...
           </a>
           
         </p>
       </div>

       <div className="md:mt-4 flex justify-center items-center flex-col">
         {/* this will have two cols with the video on one side and the message on the other */}

         <div className="flex items-center justify-center mt-2 md:my-4 ">
           <img
             src="/Our Art Is Yours logo.png"
             alt=""
             className="h-[50px] w-full object-cover"
           />
         </div>

         <div className="md:grid flex flex-col-reverse md:grid-cols-2 p-3 md:p-5 gap-5">
           <div className="flex flex-col space-y-1">
             <h3 className="text-sm font-semibold uppercase text-red-600">
               Here's why
             </h3>
             <p className="text-sm leading-6">
               His name's are Nnabuife Uzoma Raphael. He is an Artist, Athlete
               and Aspiring Entrepreneur. Ralph was led to pursue art as a
               creative outlet because ever since he was a child he had always
               had a desire to create or replicate an image, object, certain
               body motion, facial expression or scene in some way, shape or
               form, using a paper, a wall or any available format within his
               reach.<a href="#">read more....</a>{" "}
             </p>
           </div>

           <div
             onClick={() => setShowPlay(!showPlay)}
             onMouseEnter={() => setPlay(!play)}
             onMouseLeave={() => setPlay(!play)}
             className={`flex justify-center items-center  relative transform duration-500 ease-in-out transition-all ${!play ? "" : "scale-105"}`}
           >
             <video
               className="md:rounded-2xl rounded-xl"
               src="tatevid.mp4"
               autoPlay
               loop
               muted
             ></video>

             <div className="absolute lg:top-25 space-y-2 lg:space-y-6 flex items-center flex-col  ">
               <FaCirclePlay className="text-red-700 text-[4rem]" />
               <button className="text-sm uppercase">
                 Click to watch full video
               </button>
             </div>
           </div>

           <div></div>
         </div>
       </div>
     </section>

     {/* section three */}

     <section className="relative overflow-hidden">
       <video
         src="/milesmoralesPhone.mp4"
         className="w-full h-full"
         loop
         autoPlay
         muted
       ></video>
       <div className="absolute top-0 inset-0 bg-black/70"></div>
       <div className="absolute  flex flex-col inset-0 items-center  top-0 gap-10">
         <h1 className="text-2xl uppercase font-semibold mt-5 text-red-600 text-center">
           Available Now
         </h1>

         <div className="md:grid flex  max-lg:overflow-y-scroll  max-md:overflow-x-scroll   md:grid-cols-3  lg:grid-cols-5 md:gap-7 max-lg:h-full  gap-4 w-full md:place-items-center items-center max-md:px-6 p-2 ">
           {/* below is the card */}
           {availablePro.map((item, index) => {
             return (
               <div key={index} className="">
                 <div className=" lg:hover:scale-102 transform transition-all duration-300   max-md:px-4 shadow-sm shadow-white/10 backdrop-blur-xl  flex items-center flex-col justify-between w-[13rem] h-[18rem] lg:w-[15rem]   lg:h-[22rem]">
                   <div className="flex border-b border-b-white/50 w-full  justify-between items-center py-2  px-3 max-md:px-1">
                     <div
                       className="text-xl"
                       onClick={() => toogleBookmark(index)}
                     >
                       {bookMark.includes(index) ? (
                         <p>{item.bookIconTwo}</p>
                       ) : (
                         <p> {item.bookIcon} </p>
                       )}
                     </div>

                     <div className="flex justify-center items-center gap-1 ">
                       <span className="text-sm">{item.likeIcon}</span>
                       <span className="text-[10px] text-white/70">
                         {" "}
                         {item.likeLabel}
                       </span>
                     </div>
                   </div>

                   <Image
                     src={item.img}
                     alt={item.label}
                     width={800}
                     height={800}
                     className=" h-[13rem] lg:h-[16rem]  w-full  object-cover lg:px-2 "
                   />

                   <p className="uppercase text-sm ">{item.label}</p>

                   <span className="text-[7px] text-white/80 pr-2 text-right w-full pb-1">{`Released ${item.date}`}</span>
                 </div>
               </div>
             );
           })}
           {/* end of card */}
         </div>
       </div>
     </section>

     {/* section four */}

     <section className="px-3 py-2 mb-4 flex flex-col ">
       <div className="flex max-md:flex-col w-full md:justify-between gap-2">
         <div className="p-4 max-md:p-2 flex flex-col gap-3 text-center">
           <h1 className="text-2xl uppercase font-semibold mt-5 text-center">
             our mission
           </h1>
           <p className="text-sm">
             To balance creativity with commercial demands and adapt to ever
             changing customer preferences by leveraging art and technology to
             stay ahead in a competitive market.
           </p>
         </div>
         <div className="p-4 max-md:p-2 flex flex-col gap-3 text-center">
           <h1 className="text-2xl uppercase font-semibold mt-5 text-center">
             our vision
           </h1>
           <p className="text-sm">
             To become a world class brand that would revolutionize the creative
             industry with emphasis on different art forms or mediums. To push
             the boundaries of Animation technology and CGI by encompassing
             culture, top notch storytelling, education and entertainment.
           </p>
         </div>
       </div>

       {/* <div className="p-4  max-md:p-2 flex flex-col gap-6 ">
         <div className="mb-5  lg:px-8 flex flex-col gap-2 ">
           <h1 className="text-2xl uppercase font-semibold mt-5 text-center">
             What we offer
           </h1>

           <p className="text-center text-sm">
             Lorem, ipsum dolor sit amet consectetur adipisicing elit.
             Recusandae harum, quae rerum sequi sunt impedit eum aspernatur
             commodi deserunt ab repellendus nemo quasi voluptatibus non,
             laudantium, cum quod sed? Numquam?
           </p>
         </div>

         {/* {firstFooterList.map((item, index) => {
           return (
             <div key={index} className="grid grid-cols-2   ">
               <h2 className="text-md md:text-xl font-semibold mb-3">
                 {item.label}
               </h2>

               <div className="max-md:flex max-md:flex-col md:grid md:grid-cols-3 justify-center px-1  w-full  gap-1">
                 {item.subItems.map((sub, subIndex) => {
                   return (
                     <Link
                       href={"/main"}
                       key={subIndex}
                       className="text-sm w-full md:text-center text-right  "
                     >
                       {sub.label}
                       {sub.icon}
                     </Link>
                   );
                 })}
               </div>
             </div>
           );
         })} */}
       {/* </div>  */}

       <Link href={"/main"} className="w-full flex md:mt-5 max-md:px-20 ">
         <button className="bg-red-500 md:px-20 uppercase hover:bg-white hover:text-red-500 lg:hover:scale-105 lg:transition-all lg:duration-500 lg:transform rounded-sm py-3  max-md:text-sm mt-5 max-md:w-full mx-auto uppercase">
           get started
         </button>
       </Link>
     </section>
   </main>
 );
}


export default page

// i also want the bookmarks to be saved in localStorage so they stay even after page refresh