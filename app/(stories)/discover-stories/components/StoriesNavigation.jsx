'use client'
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link'
import React, { useState } from 'react'
import { CgProfile } from 'react-icons/cg';
import { GrReturn } from 'react-icons/gr';
import { IoReturnDownBackOutline } from 'react-icons/io5';

const StoriesNavigation = () => {
   const {data: session, status} = useSession()


    const [showClicked, setShowClicked ] = useState(null);
      const [modal, setModal] = useState(false);
      const handleModal = (x) => setModal(!modal ? x : false)

    const buttons = [
      { id: 1, label: "Manga", url: "/discover-stories/manga" },
      { id: 2, label: "Comic", url: "/#" },
      { id: 3, label: "Novel", url: "#" },
    ];

  return (
    <main>
      <nav className="flex bg-[#161616]/50 backdrop-blur-sm  justify-between items-center px-3 py-3   h-12 w-full ">
        <Link href={"/"}>
          <GrReturn />
        </Link>

        <div className=" px-4 flex justify-center w-full md:gap-10 max-md:gap-5  items-center">
          {buttons.map((btn, index) => (
            <Link
              key={index}
              href={btn.url}
              onClick={() => setShowClicked(btn.id)}
              className={`px-2  py-1 rounded-sm duration-300 transition-colors  ${showClicked === btn.id ? "bg-red-700 " : ""}`}
            >
              <span className="w-fit">{btn.label}</span>
            </Link>
          ))}
        </div>

            <div className="relative ">
                        <button onClick={handleModal}>
                          <img
                            src={session?.user?.image}
                            alt={
                              session?.user?.name
                                ? String(session.user.name).slice(0, 2).toUpperCase()
                                : "User"
                            }
                            className="rounded-full h-6 w-6 lg:h-8 lg:w-8  "
                          />
                        </button>
          
                        {modal && (
                          <div className="absolute z-10  w-[8rem] max-md:text-sm max-md:w-[5rem] rounded-sm  bg-red-700 text-white/80  flex flex-col px-3 py-2 max-md:py-1 max-md:gap-1 gap-2 right-0  items-center pointer">
                            <div className="flex items-center">
                              <CgProfile />
                              <Link href={"/#"} className="">
                                {" "}
                                Profile{" "}
                              </Link>
                            </div>
                            <button onClick={() => signOut("google")}>Sign Out</button>
                          </div>
                        )}
                      </div>
      </nav>
    </main>
  );
}

export default StoriesNavigation
