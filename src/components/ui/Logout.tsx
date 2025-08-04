"use client";
import { logout } from "@/actions/actions";

export default function Logout() {
  return (
    <button onClick={logout} className='w-full px-3 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition cursor-pointer'>Logout</button>
  );
}
