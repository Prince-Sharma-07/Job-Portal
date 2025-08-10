"use client";
import { useUserContext } from "@/contexts/UserContextProvider";
import Image from "next/image";
import Link from "next/link";
import ProfileDropdown from "../ui/ProfileDropDown";
import SideBar from "./SideBar";

export default function Header() {
  const { userData } = useUserContext();

  return (
    <div className="fixed top-0 flex gap-4 h-16 justify-between w-full items-center z-50 px-5  lg:px-16 xl:px-20 text-white bg-black/90 backdrop-blur-md">
      <SideBar userData={userData} />

      <Link
        href={"/"}
        className="rounded-md text-md md:text-xl font-semibold md:font-bold flex items-center gap-2 max-md:pl-12 pb-1"
      >
        <Image src={"/Logo.svg"} height={28} width={28} alt="logo" />
        <h1 className="max-md:hidden text-[20px] font-semibold">JOB PORTAL</h1>
      </Link>

      <nav className="flex gap-8 items-center text-[#a0a1a1] text-[16px] justify-center h-full max-md:hidden">
        <Link href={"/"} className="hover:text-white curser-pointer">
          Home 
        </Link>
        <Link href={"/search"} className="hover:text-white curser-pointer">
          Jobs
        </Link>
        <Link href={"/company"} className="hover:text-white curser-pointer">
          Companies
        </Link>
        <Link href={"/contact-us"} className="hover:text-white">
          Contact us
        </Link>
      </nav>

      <div className="flex gap-4 items-center">
        {userData ? (
          <div className="flex gap-3 items-center ">
            <span className="font-medium">Hi, {userData.name}</span>
            <ProfileDropdown />
          </div>
        ) : (
          <div className="flex gap-4 items-center">
            <Link
              href={"/login"}
              className="rounded-md text-[16px] font-medium hover:text-btn-hover"
            >
              Login
            </Link>
            <Link
              href={"/signup"}
              className="bg-btn-primary text-[16px] font-medium hover:bg-btn-hover rounded-md px-4 p-2"
            >
              Register
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
