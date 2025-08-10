//@ts-nocheck
"use client";
import { Separator } from "@radix-ui/themes";
import Link from "next/link";
import { useEffect, useState } from "react";
import * as React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function HomeSearchBar() {
  const [input, setInput] = useState("");
  const [isActive, setActive] = useState(false);
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    async function getSuggestions() {
      const res = await fetch("http://localhost:3000/api/get-suggestions", {
        method: "POST",
        body: JSON.stringify(input),
      });
      console.log(res);
      const data = await res?.json();
      setSuggestions(data?.data);
    }
    const id = setTimeout(getSuggestions, 1000);
    return () => clearTimeout(id);
  }, [input]);

  return (
    <div className="w-[92%] sm:w-[89%] md:w-[86%] lg:w-[83%] xl:w-[80%]">
      <form
        action={"/search"}
        method="GET"
        onFocus={()=>setActive(true)}
        onBlur={()=>setTimeout(()=>setActive(false) , 300)}
        className={`max-md:flex-col md:flex items-center md:h-full w-full max-md:px-[20px] max-md:py-[40px] max-md:space-y-6 ${
          suggestions.length && isActive
            ? "rounded-t-xl rounded-br-xl"
            : "rounded-xl"
        }  bg-white`}
      >
        <div className="max-md:flex-col max-md:space-y-6 md:flex py-3 md:pl-6 md:pr-4 items-center relative flex-1 justify-between">
          <div className="flex max-md:flex-col max-md:gap-2 pl-2 md:w-[32%]">
            <input
              autoComplete="off"
              type="text"
              name="q"
              placeholder="Job Title or Company"
              className="md:py-3 w-full outline-none border-none rounded text-[16px] text-[#000000]/90"
              onChange={(e) => setInput(e.target.value)}
            />

            <div className="md:hidden">
              <Separator orientation="horizontal" size={"4"} />
            </div>
          </div>

          <span className="max-md:hidden">
            <Separator orientation="vertical" size={"2"} />
          </span>

          <div className="max-md:flex-col max-md:gap-2 px-2 justify-center items-center md:w-[28%]">
            <Select className="border-none outline-none">
              <SelectTrigger className="w-full border-none shadow-none text-[16px] text-[#000000]/50 px-0">
                <SelectValue placeholder="Select Employment Type" />
              </SelectTrigger>
              <SelectContent className="bg-white text-black">
                <SelectGroup>
                  <SelectItem value="All">All</SelectItem>
                  <SelectItem value="Full-Time">Full-Time</SelectItem>
                  <SelectItem value="Part-Time">Part-Time</SelectItem>
                  <SelectItem value="Internship">Internship</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <div className="md:hidden block">
              <Separator orientation="horizontal" size={"4"} />
            </div>
          </div>

          <span className="max-md:hidden">
            <Separator orientation="vertical" size={"2"} />
          </span>

          <div className="max-md:flex-col max-md:gap-2 px-2 justify-center items-center md:w-[25%]">
            <Select>
              <SelectTrigger className="w-full border-none shadow-none text-[16px] text-[#000000]/50 px-0">
                <SelectValue placeholder="Select Job Type" />
              </SelectTrigger>
              <SelectContent className="bg-white text-black">
                <SelectGroup>
                  <SelectItem value="All">All</SelectItem>
                  <SelectItem value="On-site">On Site</SelectItem>
                  <SelectItem value="Remote">Remote</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <div className="md:hidden">
              <Separator orientation="horizontal" size={"4"} />
            </div>
          </div>
          {isActive && suggestions.length ? (
            <div
              onClick={(e) => e.stopPropagation()}
              className="absolute top-18 left-0 w-full flex flex-col gap-1 pb-2 bg-white rounded-b-xl z-40"
            >
              {suggestions?.map((suggestion) => (
                <Link
                  href={"/jobs/" + suggestion?.id}
                  key={suggestion?.id}
                  className=" border-t-[1px] border-gray-100 px-5 p-2"
                >
                  {suggestion?.job_title}
                </Link>
              ))}
            </div>
          ) : null}
        </div>
        <button
          type="submit"
          className={`flex text-md font-medium gap-2 items-center justify-center bg-btn-primary hover:bg-btn-hover cursor-pointer h-full max-md:w-full md:w-[20%] text-white p-2 max-md:rounded-xl md:rounded-r-xl`}
        >
          <img src="/search-icon.svg" alt="search_icon" /> 
          <span className="md:hidden lg:block">Search Job</span>
        </button>
      </form>
    </div>
  );
}
