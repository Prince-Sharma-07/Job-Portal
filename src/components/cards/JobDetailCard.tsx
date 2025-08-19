"use client";
import { JobWithCompanyWithOwner } from "@/types";
import Link from "next/link";
import ApplyDeleteBtn from "../ui/ApplyDeleteBtn";
import BookmarkBtn from "../ui/BookmarkBtn";

export default function JobDetailCard({
  job,
  applied,
}: {
  job: JobWithCompanyWithOwner;
  applied: boolean;
}) {
  return (
    <div className="flex flex-col gap-4 p-4 sm:p-5 md:p-6 lg:p-7 xl:p-8 justify-between bg-white/10 dark:text-white rounded-xl w-full">
          <div className="flex flex-col gap-3">
            <div className="flex justify-between w-full">
              <span className="px-2 py-1 text-btn-primary bg-btn-primary/10 rounded-md text-xs">
                1 day ago
              </span>
              <BookmarkBtn job={job} />
            </div>
    
            <div className="max-md:flex-col flex gap-2 md:items-center">
              <div className="flex flex-col">
                <span className="font-medium text-3xl line-clamp-1">{job.job_title}</span>
                <Link
                  href={"/company/" + job?.company?.id}
                  className="text-sm hover:underline"
                >
                  {job?.company?.companyName}
                </Link>
              </div>
            </div>
          </div>
          <div className="max-md:flex-col flex justify-between md:items-center w-full gap-4">
            <div className="flex max-sm:flex-col gap-3 sm:items-center text-nowrap text-sm">
              <span className="flex gap-2 items-center">
                <img src="/briefcase.svg" alt="" className="size-5" />
                <span>{job.job_type}</span>
              </span>
              <span className="flex gap-2  items-center">
                <img src="/clock.svg" alt="" className="size-5" />
                <span>{job.employment_type}</span>
              </span>
              <span className="flex gap-2  items-center">
                <img src="/wallet.svg" alt="" className="size-5" />
                <span>₹ {job.job_salary}</span>
              </span>
              <span className="flex gap-2  items-center">
                <img src="/map-pin.svg" alt="" className="size-5" />
                <span>{job.job_location}</span>
              </span>
            </div>
    
            <ApplyDeleteBtn job={job} applied={applied} />
          </div>
        </div>
  );
}
