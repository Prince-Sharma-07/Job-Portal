'use client'
import Link from "next/link"
import { useSavedContext } from '../../contexts/SavedJobsProvider'

export default function SavedBtn() {
  const { saved } = useSavedContext()
  return (
    <Link href={'/saved'}>
      <button className="w-full px-3 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition">
        ❤️ Saved Jobs {`(${saved.length})`}
      </button>
    </Link>
  )
}