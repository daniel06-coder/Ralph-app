import { X } from 'lucide-react';
import Link from 'next/link'
import React from 'react'
import { FaFacebook, FaLinkedin, FaTiktok, FaXTwitter, FaYoutube } from 'react-icons/fa6';

const Footer = () => {

    const firstFooterList = [
        {label: "Creative Art", icon: "/next.svg" , subItems:
            [
                {label: 'Artworks', icon:"🎨", url: "/home/artworks" },
                {label: 'Manga', icon:"", url: "/discover-stories/manga" },
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

          {label: "Legal", icon: "/next.svg" , subItems:
            [
                {label: 'Privacy policy', icon:"🔒", url: "/" },
                {label: 'Refund policy', icon:"💸", url: "/" },
                {label: 'Terms and conditions', icon:"⚖️", url: "/" },
            ]
        },
          {label: "Site map", icon: "/next.svg" , subItems:
            [
                {label: 'Contact Us', icon:"", url: "/" },
                {label: 'My Account Set Up', icon:"", url: "/" },
                {label: 'Faq', icon:"", url: "/" },
                {label: 'About', icon:"", url: "/" },
                {label: 'Our team', icon:"", url: "/" },
                {label: 'Know the devs', icon:"", url: "/" },
            ]
        },
    ]

  return (
    <main className="bg-[#161616] p-3 flex min-h-70 w-full relative bottom-0">
      <div className="grid lg:gap-6 lg:space-x-5 grid-cols-1 w-full md:grid-cols-3 lg:grid-cols-5 md:m-auto py-6 max-md:gap-5">
        {firstFooterList.map((item, index) => {
          return (
            <div key={index} className="max-md:text-center">
              <h2 className="text-xl font-semibold md:mb-3 mb-2 max-lg:mt-3">
                {item.label}
              </h2>

              <div className="flex flex-col justify-center px-1  w-full   gap-1">
                {item.subItems.map((sub, subIndex) => {
                  return (
                    <Link
                      href={"/"}
                      key={subIndex}
                      className="duration-300 transition-all text-sm w-full md:flex text-center  lg:hover:scale-105 "
                    >
                      {sub.label}
                      {sub.icon}
                    </Link>
                  );
                })}
              </div>
            </div>
          );
        })}

        <div className="lg:absolute lg:bottom-0 lg:right-30  gap-2 flex flex-col items-center justify-center border-[1px] rounded-sm border-red-500/60 p-2 mb-3">
          <p className="text-sm">
            &copy; Company Name | Designed & Built with React.{" "}
          </p>
          <p className="text-sm">All Rights Reserved </p>
        </div>
        <section className="">
          <div className="border  border-red-800/2 "></div>
          <div className="flex flex-col gap-2">
            <h1 className="text-md uppercase font-semibold text-center">
              Connect with us on
            </h1>

            <div className="flex justify-center w-full items-center gap-4 p-2">
              <Link href={"https://x.com/RenaissanceRAF"}>
                <FaXTwitter className="size-6" />
              </Link>
              <Link href={"https//www.tiktok.com/@renaissanceraf"}>
                <FaTiktok className="size-6" />
              </Link>
              <Link
                href={"https://www.facebook.com/profile.php?id=61588762185334"}
              >
                <FaFacebook className="size-6" />
              </Link>
              <Link
                href={"https://youtube.com/@ourartisyours?si=m8H5R6xkwgXCSkrs"}
              >
                <FaYoutube className="size-6" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Footer
