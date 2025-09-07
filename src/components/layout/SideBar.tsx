import {
  UserWithCompanyWithReviewsWithApplications
} from "@/types";
import { MenuIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Modebtn from "../ui/mode-btn";

export default function SideBar({
  userData,
}: {
  userData: UserWithCompanyWithReviewsWithApplications | undefined;
}) {
  
  const handleClose = () => {
    const drawer = document.getElementById("my-drawer") as HTMLInputElement;
    if (drawer) drawer.checked = false;
  };

  return (
    <div className="drawer fixed left-6 size-xl md:hidden z-50 w-fit">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />

      <label htmlFor="my-drawer" className="drawer-button">
        <MenuIcon className="h-8 w-8" />
      </label>

      <div className="drawer-side">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-gray-950 text-base-content min-h-full w-80 p-6 space-y-4">
          {/* Sidebar Heading */}
          <div className="w-full flex items-center justify-between">
            <h2 className="text-white text-xl font-bold flex gap-3 items-center">
              <Image
                src={"/Logo.svg"}
                height={28}
                width={28}
                alt="logo"
                className="mb-1"
              />
              JOB PORTAL
            </h2>
            <span>
              <Modebtn />
            </span>
          </div>

          {/* Sidebar Links */}
          <li>
            <Link
              href={"/"}
              onClick={handleClose}
              className="text-lg px-2 py-2 rounded-md hover:bg-gray-800 hover:text-white transition"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href={"/search"}
              onClick={handleClose}
              className="text-lg px-2 py-2 rounded-md hover:bg-gray-800 hover:text-white transition"
            >
              Jobs
            </Link>
          </li>
          <li>
            <Link
              href={"/company"}
              onClick={handleClose}
              className="text-lg px-2 py-2 rounded-md hover:bg-gray-800 hover:text-white transition"
            >
              Companies
            </Link>
          </li>
          <li>
            <Link className="text-lg px-2 py-2 rounded-md hover:bg-gray-800 hover:text-white transition" href={"/contact-us"}>
              Contact us
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
