'use client'
import { useState } from 'react'
import { AnimatePresence, motion } from "framer-motion";
import UploadArtworks from './_components/UploadArtworks';
import { IoBookSharp } from 'react-icons/io5'
import { MdOndemandVideo } from 'react-icons/md';
import { RiColorFilterAiLine, RiMoneyDollarCircleLine } from "react-icons/ri";
import UploadMerch from './_components/UploadMerch';
import UploadVideos from './_components/UploadVideos';
import UploadBooks from './_components/UploadBooks/page';

const uploadLists = [
  { label: "Art", icon: <RiColorFilterAiLine />},
  { label: "Video", icon: <MdOndemandVideo />},
  { label: "Books", icon: <IoBookSharp />},
  //   { label: "Books", icon: <IoBookSharp />, url: "/" },
  { label: "Merchandise", icon: <RiMoneyDollarCircleLine /> },
];


const  page = () => {
  const [activeTab, setActiveTab] = useState("Art");

  // showCurrentTab === renderTab
  const showCurrentTab = () => {
    if (activeTab === "Art") return <UploadArtworks/>
    if (activeTab === "Video") return <UploadVideos/>
    if (activeTab === "Merchandise") return <UploadMerch/>
    if (activeTab === "Books") return <UploadBooks/>
  }

  return (
    <main>
      <nav className="flex justify-center gap-20 pb-10">
        {uploadLists.map((tab) => {
          return (
            <button
              key={tab.label}
              onClick={()=> setActiveTab(tab.label)}
              className={`flex items-center justify-center transition-all duration-300 gap-2 pointer ${activeTab === tab.label ? 'active border-b-2 border-red-600 text-xl text-white' : ' text-white/40 '} `}>
              {tab.icon}
              {tab.label}
            </button>
          );
        })}
      </nav>


      <div className=''>
          <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -20, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
        {showCurrentTab()}
          </motion.div>
        </AnimatePresence>
        </div>
    </main>
  );
}

export default page
