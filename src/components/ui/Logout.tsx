"use client";
import { LogOutIcon } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function Logout() {
  const [loading, setLoading] = useState(false);
  async function logout() {
    setLoading(true);
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_HOST_NAME as string}/api/logout`,
      {
        method: "DELETE",
      }
    );
    if (res.redirected) {
      window.location.href = "/";
      toast("Logging out...");
      setLoading(false);
      return;
    }
    const data = await res.json();
    toast(data.message);
    setLoading(false);
  }

  return (
    <button
      onClick={logout}
      className="w-full cursor-pointer px-3 py-2 rounded hover:text-black hover:bg-gray-200 transition flex gap-2"
    >
      {!loading ? (
        <>
          <LogOutIcon /> Logout
        </>
      ) : (
        <>
          <span className="loading loading-spinner loading-sm"></span>
          Logout
        </>
      )}
    </button>
  );
}
