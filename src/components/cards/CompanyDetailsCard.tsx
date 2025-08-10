import { CompanyWithOwner } from "@/types";

export default function CompanyDetailCard({company} : {company : CompanyWithOwner}) {
  return (
    <div className=' flex flex-col gap-2 items-center'>
       <h1 className='text-4xl font-bold text-center'>{company?.companyName}</h1>
       <p className='text-lg'>{company?.companyDescription}</p>
       <span className='text-sm'>Owned by : {company?.owner?.name}</span>
    </div>
  )
}
