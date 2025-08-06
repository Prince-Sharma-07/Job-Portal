//@ts-nocheck
"use client";
import { Separator } from "@radix-ui/themes";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function HomeSearchBar() {
  const [input, setInput] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    async function getSuggestions() {
      const res = await fetch("http://localhost:3000/api/get-suggestions", {
        method: "POST",
        body: JSON.stringify(input),
      });
      console.log(res)
      const data = await res?.json();
      setSuggestions(data?.data);
    }
    const id = setTimeout(getSuggestions, 1000);
    return () => clearTimeout(id);
  }, [input]);

  return (
    <div className="w-[80%] relative">
      <form
        action={"/search"}
        method="GET"
        className={`flex items-center h-full ${suggestions.length ? "rounded-t-xl" : "rounded-xl"}  bg-white`}
      >
        <div className="flex-1 flex justify-between p-3 px-4 items-center">
          <input
            autoComplete="off"
            type="text"
            name="q"
            placeholder="Job Title or Company"
            className="p-2 outline-none border-none rounded"
            onChange={(e) => setInput(e.target.value)}
          />
          <Separator orientation="vertical" />
          <select
            defaultValue="Select Location"
            className="select bg-transparent outline-none border-none"
          >
            <option disabled={true}>Select Location</option>
            <option>Inter</option>
            <option>Poppins</option>
            <option>Raleway</option>
          </select>
          <Separator orientation="vertical" />
          <select
            defaultValue="Select Category"
            className="select bg-transparent"
          >
            <option disabled={true}>Select Category</option>
            <option>Inter</option>
            <option>Poppins</option>
            <option>Raleway</option>
          </select>
        </div>
        <button
          type="submit"
          className={`flex gap-2 items-center justify-center bg-btn-primary hover:bg-btn-hover cursor-pointer h-full w-[20%] text-white p-2 ${suggestions.length ? "rounded-tr-xl" : "rounded-r-xl"}`}
        >
          <img src="/search-icon.svg" alt="" /> Search Job
        </button>
      </form>
      {suggestions.length ? (
        <div className="absolute top-16 left-0 w-full flex flex-col gap-1 bg-white p-4 rounded-b-xl">
          {suggestions?.map((suggestion) => (
            <Link
              href={"/jobs/" + suggestion?.id}
              key={suggestion?.id}
              className="p-1"
            >
              {suggestion?.job_title}
            </Link>
          ))}
        </div>
      ) : null}
    </div>
  );
}
