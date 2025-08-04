"use client";
import { redirect } from "next/navigation";
import React from "react";

export default function DeleteCompanyBtn({id} : {id : string}) {

  async function handleDelete() {
    const res = await fetch("http://localhost:3000/api/company/" + id, {
      method: "DELETE",
    });
    const data = await res.json();
    alert(data.message);
    redirect('/company')
  }

  return <button className="px-2 p-1 rounded-md bg-blue-400 hover:bg-blue-500 cursor-pointer font-medium" onClick={handleDelete}>Delete Company</button>;
}
