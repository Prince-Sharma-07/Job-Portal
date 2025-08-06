"use client";
import { LogOutIcon } from "lucide-react";

async function logout() {
    const res = await fetch('http://localhost:3000/api/logout' , {
      method: "DELETE",
    })
    if(res.redirected){
      window.location.href = '/'
      return;
    }
    const data = await res.json();
    alert(data.message)
}

export default function Logout() {
  return (
    <button onClick={logout} className="w-full cursor-pointer px-3 py-2  rounded bg-red-400 hover:bg-red-500 text-white transition flex justify-center gap-2">Logout <LogOutIcon/></button>
  );
}
