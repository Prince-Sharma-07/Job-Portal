//@ts-nocheck
"use client";
import { useSavedContext } from "@/contexts/SavedJobsProvider";
import { JobWithCompanyWithOwner } from "@/types";
import { Avatar } from "@radix-ui/themes";
import { Trash } from "lucide-react";
import Link from "next/link";

export default function savedCard({ job }: { job: JobWithCompanyWithOwner }) {
  const { removeFromSave } = useSavedContext();
  return (
     <div className="flex flex-col gap-4 p-4 sm:p-5 md:p-6 lg:p-7 xl:p-8 justify-between bg-white/10 dark:text-white rounded-xl shadow-card w-full">
      <div className="flex flex-col gap-3">
        <div className="flex justify-between w-full">
          <span className="px-2 py-1 text-btn-primary bg-btn-primary/10 rounded-md text-xs">
            1 day ago
          </span>
           <button
        onClick={() => removeFromSave(job.id)}
        className="text-teal-400 hover:text-teal-600"
      >
        <Trash />
      </button>
        </div>

        <div className="max-md:flex-col flex gap-2 md:items-center">
          <Avatar
            className="cursor-pointer"
            radius="medium"
            size={"3"}
            fallback={job.company?.companyName[0].toUpperCase() || ""}
          />
          <div className="flex flex-col">
            <span className="font-medium text-xl">{job.job_title}</span>
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

        <Link
          href={`/jobs/${job.id}`}
          className="bg-btn-primary hover:bg-btn-hover text-white text-center px-4 py-2 rounded-md"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
