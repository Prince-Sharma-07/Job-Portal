import React from 'react'

export default function SearchBar() {
  return (
    <form action={'/search'} method='GET' className="flex items-center w-full border-2 rounded-md">
      <input type="text" name='q' placeholder="Search..." className="p-2 outline-none w-full border-none rounded" />
      <button type='submit' className="bg-blue-500 h-full text-white p-2 rounded-r">Search</button>
    </form>
  )
}
