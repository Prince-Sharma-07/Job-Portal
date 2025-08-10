import { MenuIcon } from "lucide-react";
import Link from "next/link";
import { User } from "../../../generated/prisma";
import { UserWithCompany } from "@/types";

export default function SideBar({ userData } : {userData : UserWithCompany}) {
  return (
    <div className="drawer fixed left-6 size-xl md:hidden z-50">
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
        <ul className="menu bg-base-200 text-base-content min-h-full w-80">
          {/* Sidebar content here */}
          <li>
            <Link
              href={"/"}
              className="hover:text-white hover:font-semibold curser-pointer"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href={"/search"}
              className="hover:text-white hover:font-semibold curser-pointer"
            >
              Jobs
            </Link>
          </li>
          <li>
            <Link
              href={"/company"}
              className="hover:text-white hover:font-semibold curser-pointer"
            >
              Companies
            </Link>
          </li>
          <li>
            {userData?.company ? (
              <Link
                href={"/company/" + userData.company.id}
                className="hover:text-white hover:font-semibold curser-pointer"
              >
                View Company
              </Link>
            ) : (
              <Link
                href={"/add-company"}
                className="hover:text-white hover:font-semibold curser-pointer"
              >
                Add Company
              </Link>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
}
