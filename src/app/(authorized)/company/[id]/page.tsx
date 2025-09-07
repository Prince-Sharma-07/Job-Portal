// import CompanyDetailsCard from "@/components/cards/CompanyDetailsCard";
// import JobCard from "@/components/cards/JobCard";
// import Reviews from "@/components/sections/Reviews";
// import DeleteCompanyBtn from "@/components/ui/DeleteCompanyBtn";
// import { CompanyWithJobsAndOwnerWithReview } from "@/types";
// import { Box, Tabs } from "@radix-ui/themes";
// import { notFound } from "next/navigation";

// type Param = Promise<{
//   id: string;
// }>;
// export default async function page({ params }: { params: Param }) {
//   const { id } = await params;
//   if (!id) {

//     notFound();
//   }
//   const res = await fetch(
//     `${process.env.NEXT_PUBLIC_HOST_NAME as string}/api/company/` + id
//   );
//   const data = await res.json();

//   const company: CompanyWithJobsAndOwnerWithReview = data.data;
//   if (!company) {
//     notFound();
//   }

//   return (
//     <div className="py-20 min-h-screen px-10 flex flex-col gap-4  items-center">
//       {/* {JSON.stringify(company)} */}
//       <CompanyDetailsCard company={company} />

//       <DeleteCompanyBtn id={company?.id} company={company} />

//       <Tabs.Root defaultValue="openings" className="w-full">
//         <Tabs.List>
//           <Tabs.Trigger value="openings"><span className="text-lg">Jobs</span></Tabs.Trigger>
//           <Tabs.Trigger value="reviews"><span className="text-lg">Reviews</span></Tabs.Trigger>
//         </Tabs.List>

//         <Box pt="3">
//           <Tabs.Content value="openings">
//             <div className="flex flex-col gap-4">
//               <h2 className="text-2xl font-medium">Recent Openings </h2>
//               {company.jobs.length ? company.jobs.map((job) => (
//                 <JobCard key={job.id} job={job} />
//               )) : <div>No Jobs openings...</div>}
//             </div>
//           </Tabs.Content>

//           <Reviews company={company} reviews={company.owner.reviews} />
//         </Box>
//       </Tabs.Root>
//     </div>
//   );
// }

import CompanyDetailsCard from "@/components/cards/CompanyDetailsCard";
import JobCard from "@/components/cards/JobCard";
import Reviews from "@/components/sections/Reviews";
import prismaClient from "@/services/prisma";
import { CompanyWithJobsAndOwnerWithReview } from "@/types";
import { Box, Tabs } from "@radix-ui/themes";
import { notFound } from "next/navigation";

type Param = Promise<{ id: string }>;

export default async function page({ params }: { params: Param }) {
  const { id } = await params;
  if (!id) notFound();

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_HOST_NAME as string}/api/company/${id}`
  );
  const data = await res.json();
  const company: CompanyWithJobsAndOwnerWithReview = data.data;

  if (!company) notFound();

  const reviews = await prismaClient.review.findMany({
    include: {
      user: true,
    },
  });

  const companyReviews = reviews.filter(
    (review) => review.company_id == company.id
  );

  return (
    <div className="py-16 pt-20 min-h-screen px-4 md:px-10 flex flex-col gap-8 items-center">
      <CompanyDetailsCard company={company} />

      {/* <DeleteCompanyBtn id={company.id} company={company} /> */}

      <Tabs.Root defaultValue="openings" className="w-full max-w-5xl">
        <Tabs.List className="flex gap-6 border-b pb-2">
          <Tabs.Trigger value="openings">
            <span className="text-lg font-medium pb-1">Jobs</span>
          </Tabs.Trigger>
          <Tabs.Trigger value="reviews">
            <span className="text-lg font-medium pb-1">Reviews</span>
          </Tabs.Trigger>
        </Tabs.List>

        <Box pt="6">
          <Tabs.Content value="openings">
            <div className="flex flex-col gap-6">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-300">
                Recent Openings
              </h2>
              {company.jobs.length ? (
                <div className="flex flex-col gap-4">
                  {company.jobs.map((job) => (
                    <JobCard key={job.id} job={job} />
                  ))}
                </div>
              ) : (
                <p className="text-gray-500 italic">
                  No job openings available...
                </p>
              )}
            </div>
          </Tabs.Content>

          <Tabs.Content value="reviews">
            <Reviews company={company} reviews={companyReviews} />
          </Tabs.Content>
        </Box>
      </Tabs.Root>
    </div>
  );
}
