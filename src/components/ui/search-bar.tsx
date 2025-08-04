'use client'
import { useSearchParams } from "next/navigation";
import { useState } from "react";

export default function SearchBar() {
  const searchParams = useSearchParams()
  const [query , setQuery] = useState(searchParams.get('q') || "")

  return (
    <form action="/search" method="GET" className="flex-1">
    <label className="input bg-white dark:bg-transparent w-full">
      <svg
        className="h-[1em] opacity-50"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <g
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeWidth="2.5"
          fill="none"
          stroke="currentColor"
        >
          <circle cx="11" cy="11" r="8"></circle>
          <path d="m21 21-4.3-4.3"></path>
        </g>
      </svg>
      <input name='q'  type="search" placeholder="Search" />
      
    </label>
    </form>
  );
}
