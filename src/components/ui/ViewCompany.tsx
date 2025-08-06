//@ts-nocheck
import Link from 'next/link'
import React from 'react'

export default function ViewCompany({companyId}) {
  return (
    <Link href={'/company/' + companyId} className="px-2 p-1 rounded-md bg-blue-400 hover:bg-blue-500 cursor-pointer font-medium" >View Company</Link>
  )
}
