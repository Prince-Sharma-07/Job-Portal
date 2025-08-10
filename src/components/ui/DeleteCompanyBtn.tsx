"use client";
import { useUserContext } from "@/contexts/UserContextProvider";
import { Trash } from "lucide-react";
import { redirect } from "next/navigation";
import { Company } from "../../../generated/prisma";

export default function DeleteCompanyBtn({
  id,
  company,
}: {
  id: string;
  company: Company;
}) {
  const { userData } = useUserContext();
  async function handleDelete() {
    const res = await fetch("http://localhost:3000/api/company/" + id, {
      method: "DELETE",
    });
    const data = await res.json();
    alert(data.message);
    redirect("/company");
  }

  return (
    <>
      {userData?.id === company.companyOwnerId ? (
        <button
          className="flex items-center gap-2 px-2 p-1 bg-teal-600 text-white w-fit rounded-md cursor-pointer font-medium"
          onClick={handleDelete}
        >
          Delete <Trash className="w-5 text-gray-200" />
        </button>
      ) : null}
    </>
  );
}
