import Link from 'next/link'
import React from 'react'
import { LuLayoutDashboard } from "react-icons/lu";
import { IoCloudUploadOutline } from "react-icons/io5";
import { LuRadioTower } from "react-icons/lu";
import { IoSettingsOutline } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdManageAccounts } from "react-icons/md";
import Image from 'next/image';


function AdminNavbar() {
  return (
    <main className="min-h-screen fixed top-0 left-0">
      <nav className="flex flex-col py-2 border-r  border-white/40  w-fit h-dvh  ">
        <h1 className="text-lg font-semibold py-3 px-4 ">App name/logo</h1>

        <div className="flex flex-col px-4 py-4 justify-center gap-8 h-full w-full ">
          <Link
            href={"/"}
            className="flex  items-center gap-3 text-lg font-[400]"
          >
            <MdManageAccounts />
            Account
          </Link>
          <Link
            href={"/admin"}
            className="flex  items-center gap-3 text-lg font-[400]"
          >
            <LuLayoutDashboard />
            Dashboard
          </Link>
          <Link
            href={"/admin/uploads"}
            className="flex  items-center gap-3 text-lg font-[400]"
          >
            <IoCloudUploadOutline />
            Upload Center
          </Link>
          <Link
            href={"/admin"}
            className="flex  items-center gap-3 text-lg font-[400]"
          >
            <LuRadioTower />
            Streams
          </Link>
        </div>
        <div className="border border-white/40 w-full"></div>
        <div className="flex flex-col px-4 pt-4 justify-center gap-8 h-full w-full ">
          <Link
            href={"/admin"}
            className="flex  items-center gap-3 text-lg font-[400]"
          >
            <IoSettingsOutline />
            Site setting
          </Link>
          <Link
            href={"/admin"}
            className="flex  items-center gap-3 text-lg font-[400]"
          >
            <IoMdNotificationsOutline />
            Notification
          </Link>
        </div>
        <Image
          src={"/admin/phoneslide1.png"}
          alt="image"
          className="h-[50%] object-contain w-full flex justify-center py-10 px-10"
          width={800}
          height={800}
        />
      </nav>
    </main>
  );
}

export default AdminNavbar
