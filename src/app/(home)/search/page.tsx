import JobCard from "@/components/cards/JobCard";
import { BriefcaseBusiness } from "lucide-react";
import { Company, Job } from "../../../../generated/prisma";

type searchPageQuery = Promise<{
  q: string;
  jt: string;
  et: string;
  sr: string;
}>

export default async function page({
  searchParams
}: {
  searchParams: searchPageQuery
}) {
  const query = (await searchParams).q || "";
  const jt = (await searchParams).jt || "";
  const et = (await searchParams).et || "";
  const sr = (await searchParams).sr || 0;

  let searchedJobs = [];

  try {
    const response = await fetch(
      `http://localhost:3000/api/job?q=${query}&jt=${jt}&et=${et}&sr=${sr}`
    );
    const result = await response.json();
    console.log(result);
    searchedJobs = result?.data || [];
  } catch (error) {
    console.error(error);
  }

  return (
    <div className="flex flex-col gap-4">
      {query ? (
        <div className="text-xl font-semibold">
          Showing Results for: <span className="font-medium">"{query}"</span>
        </div>
      ) : (
        <div className="text-xl font-semibold flex items-center gap-3">
          All Jobs <BriefcaseBusiness />
        </div>
      )}
      <div className="flex flex-col gap-4 rounded-xl min-h-fit">
        {searchedJobs.length ? (
          searchedJobs.map((job : Job ) => <JobCard key={job.id} job={job} />)
        ) : (
          <div>No searched results found...</div>
        )}
      </div>
    </div>
  );
}
