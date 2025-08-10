import Link from 'next/link';
import React from 'react'

export default function AddCompanyBtn() {
  return (
    <Link className="w-full px-3 py-2 text-center rounded text-black bg-gray-200 hover:bg-gray-30 transition cursor-pointer" href={'/add-company'}>Add Company</Link>
  )
}
    