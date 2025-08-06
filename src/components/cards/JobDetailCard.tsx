"use client";
import { JobWithCompanyWithOwner } from "@/types";
import Link from "next/link";
import ApplyJobBtn from "../ui/ApplyJobBtn";
import BookmarkBtn from "../ui/BookmarkBtn";

export default function JobDetailCard({ job } : JobWithCompanyWithOwner) {
  return (
    <div className="flex flex-col gap-4 p-10 justify-between bg-white/10 dark:text-white rounded-xl w-full ">
      <div className="flex flex-col gap-4">
        <div className="flex justify-between">
          <span className="px-2 p-1 text-btn-primary bg-btn-primary/10 rounded-md text-sm">
            10 min ago
          </span>
          <BookmarkBtn job={job} />
        </div>
        <h1 className="flex justify-between">
          <div className="flex flex-col ">
            <span className="font-medium text-3xl">{job?.job_title}</span>
            <Link
              href={"/company/" + job?.company?.id}
              className="text-sm hover:underline"
            >
              {job?.company?.companyName}
            </Link>
            <span>owner: {job?.company?.owner?.email}</span> 
          </div>
        </h1>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex gap-4 text-nowrap items-center">
          <span className="flex gap-2 items-center">
            <img src="/briefcase.svg" alt="" />
            <span>{job?.job_type}</span>
          </span>
          <span className="flex gap-2  items-center">
            <img src="/clock.svg" alt="" />
            <span>{job?.employment_type}</span>
          </span>
          <span className="flex gap-2  items-center">
            <img src="/wallet.svg" alt="" />
            <span>₹ {job?.job_salary}</span>
          </span>
          <span className="flex gap-2  items-center">
            <img src="/map-pin.svg" alt="" />
            <span>{job?.job_location}</span>
          </span>
        </div>
        <ApplyJobBtn job={job}/>
      </div>
    </div>
  );
}
