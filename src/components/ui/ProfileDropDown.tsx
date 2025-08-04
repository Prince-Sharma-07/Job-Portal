"use client";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { CircleUserRound } from "lucide-react";
import AddJob from "./AddJob";
import Link from "next/link";
import React from "react";
import Logout from "./Logout";
import AddCompanyBtn from "./AddCompanyBtn";
import SavedBtn from "./SavedBtn";

export default function ProfileDropdown() {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className="outline-none p-1 hover:opacity-80 transition">
          <CircleUserRound size={30} className="text-white" />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Content
        className="bg-white dark:bg-gray-900 text-black dark:text-white p-2 rounded-md shadow-xl w-48 mt-2 z-50 flex flex-col items-start"
        sideOffset={8}
        align="end"
      >
        <DropdownMenu.Item asChild>
          <AddJob />
        </DropdownMenu.Item>

        <DropdownMenu.Item asChild>
          <SavedBtn />
        </DropdownMenu.Item>

        <DropdownMenu.Item asChild>
          <AddCompanyBtn />
        </DropdownMenu.Item>

        <DropdownMenu.Item asChild>
          <Logout />
        </DropdownMenu.Item>

        <DropdownMenu.Separator className="my-1 h-px bg-gray-200 dark:bg-gray-700" />

        <DropdownMenu.Item asChild>
          <Link href="/deleteAccount">
            <button className="w-full text-left px-3 py-2 rounded hover:bg-red-500 hover:text-white transition">
              Delete Account
            </button>
          </Link>
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}
