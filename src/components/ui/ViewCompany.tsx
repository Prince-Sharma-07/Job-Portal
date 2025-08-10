//@ts-nocheck
import Link from "next/link";

export default function ViewCompany({ companyId }) {
  return (
    <Link
      href={"/company/" + companyId}
      className="w-full px-3 py-2 text-center rounded text-black bg-gray-200 hover:bg-gray-300 transition cursor-pointer"
    >
      View Company
    </Link>
  );
}
