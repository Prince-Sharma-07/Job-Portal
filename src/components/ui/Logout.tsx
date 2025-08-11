"use client";
import { LogOutIcon } from "lucide-react";

async function logout() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_HOST_NAME as string}/api/logout`,
    {
      method: "DELETE",
    }
  );
  if (res.redirected) {
    window.location.href = "/";
    return;
  }
  const data = await res.json();
  alert(data.message);
}

export default function Logout() {
  return (
    <button
      onClick={logout}
      className="w-full cursor-pointer px-3 py-2 rounded hover:text-black hover:bg-gray-200 transition flex gap-2"
    >
      <LogOutIcon /> Logout
    </button>
  );
}
