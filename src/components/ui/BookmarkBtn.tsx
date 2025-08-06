//@ts-nocheck
'use client'
import { useSavedContext } from '@/contexts/SavedJobsProvider'
import Image from 'next/image'
import React from 'react'

export default function BookmarkBtn({job}) {
  const {addToSave} = useSavedContext()
  return (
    <Image height={25} width={25} onClick={()=>addToSave(job)} src="/bookmark-icon.svg" alt="bookmark_icon" className='cursor-pointer'/>
  )
}
