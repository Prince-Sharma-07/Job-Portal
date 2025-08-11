import CompanyDetailsCard from "@/components/cards/CompanyDetailsCard";
import JobCard from "@/components/cards/JobCard";
import Reviews from "@/components/sections/Reviews";
import DeleteCompanyBtn from "@/components/ui/DeleteCompanyBtn";
import { CompanyWithJobsAndOwnerWithReview } from "@/types";
import { Box, Tabs } from "@radix-ui/themes";
import { notFound } from "next/navigation";

type Param = Promise<{
  id: string;
}>;
export default async function page({ params }: { params: Param }) {
  const { id } = await params;
  if (!id) {
    notFound();
  }
  const res = await fetch(
    `http://${process.env.NEXT_PUBLIC_HOST_NAME as string}/api/company/` + id
  );
  const data = await res.json();
  const company: CompanyWithJobsAndOwnerWithReview = data.data;
  if (!company) {
    notFound();
  }

  return (
    <div className="py-20 min-h-screen px-10 flex flex-col gap-4  items-center">
      {/* {JSON.stringify(company)} */}
      <CompanyDetailsCard company={company} />

      <DeleteCompanyBtn id={company?.id} company={company} />

      <Tabs.Root defaultValue="openings" className="w-full">
        <Tabs.List>
          <Tabs.Trigger value="openings">Jobs</Tabs.Trigger>
          <Tabs.Trigger value="reviews">Reviews</Tabs.Trigger>
        </Tabs.List>

        <Box pt="3">
          <Tabs.Content value="openings">
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl font-medium">Recent Openings </h2>
              {company.jobs.map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>
          </Tabs.Content>

          <Reviews company={company} reviews={company.owner.review} />
        </Box>
      </Tabs.Root>
    </div>
  );
}
