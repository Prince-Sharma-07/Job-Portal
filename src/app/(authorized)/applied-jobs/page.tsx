import JobCard from '@/components/cards/JobCard';
import getCurrUser from '@/helper'
import prismaClient from '@/services/prisma';
import React from 'react'

export default async function page() {
    const user = await getCurrUser();
    const applications = await prismaClient.application.findMany({
        where : {
            user_id : user.id 
        },
        include : {
            job: true
        }
    })

    console.log(applications)
   
  return (
    <div className='flex flex-col items-center gap-5 min-h-screen pt-20 w-full px-10'>
      <h1 className='text-3xl font-bold '>Your Applications</h1>
      <div className='w-full'>
        {applications.map((application)=><JobCard key={application.id} job={application.job} />)}
      </div>
    </div>
  )
}
