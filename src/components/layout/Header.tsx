"use client";
import { useUserContext } from "@/contexts/UserContextProvider";
import Image from "next/image";
import Link from "next/link";
import ProfileDropdown from "../ui/ProfileDropDown";

export default function Header() {
  const { userData } = useUserContext();

  return (
    <div className="fixed top-0 flex gap-4 h-16 justify-between w-full items-center z-50 px-20 text-white bg-black/90 backdrop-blur-md">
      <Link
        href={"/"}
        className="rounded-md px-2 p-1 font-bold flex items-center gap-2"
      >
        <Image src={"/Logo.svg"} height={20} width={20} alt="logo" />
        <h1 className="">JOB PORTAL</h1>
      </Link>

      <nav className="flex gap-8 items-center text-[#a0a1a1] justify-center h-full">
        <Link href={"/"} className="hover:text-white curser-pointer">
          Home
        </Link>
        <Link href={"/search"} className="hover:text-white curser-pointer">
          Jobs
        </Link>
        <Link href={"/company"} className="hover:text-white curser-pointer">
          Companies
        </Link>
        {userData?.company ? (
          <Link
            href={"/company/" + userData.company.id}
            className="hover:text-white curser-pointer"
          >
            View Company
          </Link>
        ) : (
          <Link
            href={"/add-company"}
            className="hover:text-white curser-pointer"
          >
            Add Company
          </Link>
        )}
      </nav>

      <div className="flex gap-4 items-center">
        {userData ? (
          <div className="flex gap-3 items-center ">
            <span className="font-medium">Hi, {userData.email}</span>
            <ProfileDropdown />
          </div>
        ) : (
          <div className="flex gap-3 items-center">
            <Link
              href={"/login"}
              className="rounded-md px-2 p-1 hover:text-btn-hover"
            >
              Login
            </Link>
            <Link
              href={"/signup"}
              className="bg-btn-primary hover:bg-btn-hover rounded-md px-4 p-2"
            >
              Register
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
