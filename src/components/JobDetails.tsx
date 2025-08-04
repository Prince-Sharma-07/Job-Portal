//@ts-nocheck
'use client'
import { useSavedContext } from '@/contexts/SavedJobsProvider';
import Link from 'next/link';
import React from 'react'

export default function JobDetails({job}) {
   
    
  const { addToSave } = useSavedContext();
  const { job_title, job_description, employer_name , job_city ,job_employment_type , job_apply_link = ""} = job;

  return (
    <div className="pt-18 p-6 flex flex-col gap-4 items-center">
      <div className="flex flex-col gap-2">
        <h1>
          <span className="font-medium">Title:</span> {job_title}
        </h1>
        <p >
          <span className="font-medium">JD: </span>
          {job_description}
        </p>
        <span>
          <span className="font-medium">Company: </span> {employer_name}
        </span>
        <span>
          <span className="font-medium">Location: </span>
          {job_city}
        </span>
        <span>
          <span className="font-medium">Job Type: </span>
          {job_employment_type}
        </span>
        <span>
          <span className="font-medium">Apply here: </span>
          <Link href={job_apply_link}>{job_apply_link}</Link>
        </span>
      </div>
    
      <button
        onClick={() => addToSave(job)}
         className='bg-blue-400 hover:bg-blue-500 rounded-md px-2 p-1 w-fit cursor-pointer'
      >
        Add to Fav
      </button>
    </div>
  );
}
