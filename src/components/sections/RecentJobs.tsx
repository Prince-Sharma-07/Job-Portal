import Link from "next/link";
import JobCard from "../cards/JobCard";
import { Job } from "../../../generated/prisma";
import { JobWithCompany, JobWithCompanyWithOwner } from "@/types";

export default async function RecentJobs() {
  const res = await fetch("http://localhost:3000/api/recent-jobs");
  const data = await res.json();
  const recentJobs = data.data || [];

  return (
    <div className="flex flex-col">
      <div className="flex justify-between px-14 py-12 items-end">
        <div className="flex flex-col gap-4">
          <h2 className=" text-4xl font-bold">Recent Jobs Available</h2>
          <p>Search for recent jobs</p>
        </div>
        <Link href={"/search"}>
          <u className="text-btn-primary hover:text-btn-hover font-medium">
            {" "}
            View All
          </u>
        </Link>
      </div>
      <div className="flex flex-col w-full gap-5 px-14 pb-12">
        {recentJobs.map((job ) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
}
