import Link from "next/link";
import JobCard from "../cards/JobCard";
import { JobWithCompanyWithOwner } from "@/types";

export default async function RecentJobs() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_HOST_NAME as string}/api/recent-jobs`
  );
  const data = await res.json();
  const recentJobs = data.data || [];

  return (
    <div className="flex flex-col">
      <div className="flex justify-between px-6 sm:px-8 md:px-10 lg:px-12 xl:px-14 py-8 md:py-12 items-end">
        <div className="flex flex-col gap-4">
          <h2 className="text-[28px] sm:text-[34px] md:text-[40px] lg:text-[46px] xl:text-[50px] font-bold">
            Recent Jobs Available
          </h2>
          <p className="text-[16px] font-[500]">Apply to recent jobs</p>
        </div>
        <Link href={"/search"}>
          <u className="text-btn-primary hover:text-btn-hover font-medium text-nowrap text-lg ">
            View All
          </u>
        </Link>
      </div>
      <div className="flex flex-col w-full gap-5 px-6 sm:px-8 md:px-10 lg:px-12 xl:px-14 pb-12">
        {recentJobs.length ? (
          recentJobs.map((job: JobWithCompanyWithOwner) => (
            <JobCard key={job.id} job={job} />
          ))
        ) : (
          <div className="text-xl font-medium">No jobs available... :( </div>
        )}
      </div>
    </div>
  );
}
