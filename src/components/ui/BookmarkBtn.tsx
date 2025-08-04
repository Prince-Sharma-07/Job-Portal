//@ts-nocheck
'use client'
import { useSavedContext } from '@/contexts/SavedJobsProvider'
import React from 'react'

export default function BookmarkBtn({job}) {
  const {addToSave} = useSavedContext()
  return (
    <img onClick={()=>addToSave(job)} src="/bookmark-icon.svg" alt="bookmark_icon" />
  )
}
