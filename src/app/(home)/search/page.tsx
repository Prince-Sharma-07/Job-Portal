import JobCard from "@/components/cards/JobCard";
import { BriefcaseBusiness, Funnel } from "lucide-react";
import { Job } from "../../../../generated/prisma";
import FilterBtn from "@/components/ui/FilterBtn";
import { PaginationBar } from "@/components/ui/PaginationBar";

type searchPageQuery = Promise<{
  q: string;
  jt: string;
  et: string;
  sr: string;
  pg: string;
  lim: string;
}>;

export default async function page({
  searchParams,
}: {
  searchParams: searchPageQuery;
}) {
  const params = await searchParams;
  const query = params?.q || "";
  const jt = params?.jt || "";
  const et = params?.et || "";
  const sr = params?.sr || 0;
  const pg = Math.max(1, parseInt(params.pg ?? "1", 10));
  const lim = Math.max(1, parseInt(params.lim ?? "10", 10));

  let searchedJobs = [];
  let totalPages = 1;
  let currPage = pg;

  try {
    const url = new URL(
      "/api/job",
      process.env.NEXT_PUBLIC_HOST_NAME as string
    );
    url.searchParams.set("q", query);
    url.searchParams.set("jt", jt);
    url.searchParams.set("et", et);
    url.searchParams.set("sr", String(sr));
    url.searchParams.set("pg", String(pg));
    url.searchParams.set("lim", String(lim));

    const response = await fetch(url.toString(), {
      cache: "no-store",
    });

    const result = await response.json();
    searchedJobs = result?.data || [];
    totalPages = result?.totalPages || 1;
    currPage = result?.currentPage || pg;

  } catch (error : any) {
    console.error("Error fetching jobs: ", error);
  }

  return (
    <div className="flex flex-col gap-4 max-md:px-8">
      <FilterBtn query={query} />

      {searchedJobs.length ? (
        <div className="flex flex-col w-full justify-between gap-4">
          <div className="flex flex-col gap-4 rounded-xl">
            {searchedJobs.map((job: Job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
          <div className="w-full">
            <PaginationBar totalPages={totalPages} currPage={currPage}/>
          </div>
        </div>
      ) : (
        <div>No searched results found...</div>
      )}
    </div>
  );
}
