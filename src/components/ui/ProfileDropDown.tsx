"use client";
import { useUserContext } from "@/contexts/UserContextProvider";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { Avatar, Separator } from "@radix-ui/themes";
import { SaveIcon, SquareMousePointer, UserIcon } from "lucide-react";
import Link from "next/link";
import AddCompanyBtn from "./AddCompanyBtn";
import Logout from "./Logout";
import SavedBtn from "./SavedBtn";
import ViewCompany from "./ViewCompany";

export default function ProfileDropdown() {
  const { userData } = useUserContext();

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className="cursor-pointer outline-none p-1 hover:opacity-80 transition ">
          <Avatar
            radius="full"
            fallback={userData?.email[0].toUpperCase() || ""}
            variant="solid"
          />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Content
        className="bg-teal-600 font-medium text-white dark:text-white p-2 rounded-md shadow-xl w-48 mt-2 z-50 flex flex-col gap-1"
        sideOffset={8}
        align="end"
      >
        <DropdownMenu.Item asChild>
          {userData?.company ? <ViewCompany companyId={userData?.company.id} /> : <AddCompanyBtn />}
        </DropdownMenu.Item>

        <DropdownMenu.Item asChild>
          <Link
            className="w-full flex items-center gap-2 px-3 py-2 focus-within:outline-none hover:text-black rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition cursor-pointer"
            href={"/profile"}
          >
          <UserIcon className="h-6 w-6"/>  Profile 
          </Link>
        </DropdownMenu.Item>

        <DropdownMenu.Item asChild>
          <Link
            className="w-full flex items-center gap-2 px-3  py-2 focus-within:outline-none hover:text-black rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition cursor-pointer"
            href={"/applied-jobs"}
          >
          <SquareMousePointer className="h-5 w-5"/>  Applied Jobs 
          </Link>
        </DropdownMenu.Item>

        <DropdownMenu.Item asChild>
          <SavedBtn />
        </DropdownMenu.Item>

        <Separator size={"4"} />

        <DropdownMenu.Item asChild>
          <Logout />
        </DropdownMenu.Item>
        
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}
