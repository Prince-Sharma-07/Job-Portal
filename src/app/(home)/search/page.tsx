import JobCard from "@/components/cards/JobCard";
import { BriefcaseBusiness, Funnel } from "lucide-react";
import { Job } from "../../../../generated/prisma";
import FilterBtn from "@/components/ui/FilterBtn";

type searchPageQuery = Promise<{
  q: string;
  jt: string;
  et: string;
  sr: string;
}>;

export default async function page({
  searchParams,
}: {
  searchParams: searchPageQuery;
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
    <div className="flex flex-col gap-4 max-md:px-8">
      <FilterBtn query={query}/>
      <div className="flex flex-col gap-4 rounded-xl min-h-fit">
        {searchedJobs.length ? (
          searchedJobs.map((job: Job) => <JobCard key={job.id} job={job} />)
        ) : (
          <div>No searched results found...</div>
        )}
      </div>
    </div>
  );
}
