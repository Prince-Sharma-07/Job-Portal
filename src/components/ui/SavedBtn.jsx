'use client'
import { Bookmark } from "lucide-react"
import Link from "next/link"

export default function SavedBtn() {
 
  return (
    <Link href={'/saved'} className="w-full flex gap-2 px-3 py-2 rounded hover:text-black hover:bg-gray-200 dark:hover:bg-gray-700 transition">
    <Bookmark className="w-5"/> Saved Jobs 
    </Link>
  )
}