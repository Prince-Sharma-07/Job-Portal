"use client";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { CircleUserRound } from "lucide-react";
import AddCompanyBtn from "./AddCompanyBtn";
import AddJob from "./AddJob";
import Logout from "./Logout";
import SavedBtn from "./SavedBtn";

export default function ProfileDropdown() {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className="outline-none p-1 hover:opacity-80 transition">
          <CircleUserRound size={40} className="text-white cursor-pointer"  />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Content
        className="bg-white dark:bg-gray-900 text-black dark:text-white p-2 rounded-md shadow-xl w-48 mt-2 z-50 flex flex-col items-start gap-1"
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
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}
