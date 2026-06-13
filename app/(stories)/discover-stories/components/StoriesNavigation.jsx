'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { GrReturn } from 'react-icons/gr';
import { IoReturnDownBackOutline } from 'react-icons/io5';

const StoriesNavigation = () => {

    const [showClicked, setShowClicked ] = useState(null);

    const buttons = [
      { id: 1, label: "Manga", url: "/discover-stories/manga" },
      { id: 2, label: "Comic", url: "/#" },
      { id: 3, label: "Novel", url: "#" },
    ];

  return (
    <main>
      <nav className="flex bg-[#161616]/50 backdrop-blur-sm  justify-between items-center px-2 py-3   h-12 w-full ">
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
      </nav>
    </main>
  );
}

export default StoriesNavigation
