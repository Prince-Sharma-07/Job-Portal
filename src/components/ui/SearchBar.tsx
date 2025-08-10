"use client";
import { SearchIcon } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { FormEvent, useState } from "react";

export default function SearchBar() {
  const searchParams = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("q") || "");
  const router = useRouter();

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    router.push("/search?q=" + query);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-md flex gap-2 px-2 items-center text-black bg-white"
    >
      <SearchIcon className="text-gray-600" />
      <input
        name="q"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="search"
        placeholder="Search"
        className="outline-none border-none w-full  py-1.5"
      />
    </form>
  );
}
