import Link from 'next/link';
import React from 'react'

export default function AddCompanyBtn() {
  return (
    <Link className="w-full px-3 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition cursor-pointer" href={'/add-company'}>Add Company</Link>
  )
}
    