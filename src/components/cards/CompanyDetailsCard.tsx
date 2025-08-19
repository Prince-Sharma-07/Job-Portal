// import { CompanyWithOwner } from "@/types";
// import { Avatar } from "@radix-ui/themes";

// export default function CompanyDetailCard({company} : {company : CompanyWithOwner}) {
//   return (
//     <div className=' flex flex-col gap-2 items-center'>
//        <Avatar size={"6"} radius="full" fallback={company.companyName[0].toUpperCase()}/>
//        <h1 className='text-4xl font-bold text-center'>{company?.companyName}</h1>
//        <p className='text-lg'>{company?.companyDescription}</p>
//        <span className='text-sm'>Owned by : {company?.owner?.name}</span>
//     </div>
//   )
// }

import { CompanyWithOwner } from "@/types";
import { Avatar } from "@radix-ui/themes";

export default function CompanyDetailsCard({ company }: { company: CompanyWithOwner }) {
  return (
    <section className="flex flex-col items-center text-center gap-4">
      {/* Avatar / Logo */}
      <Avatar
        size="8"
        radius="full"
        fallback={company.companyName[0].toUpperCase()}
      />

      {/* Company Name */}
      <h1 className="text-4xl font-extrabold text-gray-900 dark:text-gray-300 tracking-tight">
        {company.companyName}
      </h1>

      {/* Company Description */}
      {company.companyDescription && (
        <p className="max-w-2xl text-lg text-gray-600 leading-relaxed">
          {company.companyDescription}
        </p>
      )}

      {/* Owner Info */}
      <span className="text-sm text-gray-500">
        Owned by{" "}
        <span className="font-medium text-teal-600">{company.owner?.name}</span>
      </span>
    </section>
  );
}
