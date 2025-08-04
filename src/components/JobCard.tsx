//@ts-nocheck
"use client";
import { Avatar, Flex } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";
import BookmarkBtn from "./ui/BookmarkBtn";

export default function JobCard({ job }) {
  return (
    <div className="flex flex-col gap-4 p-10 justify-between bg-white/10 dark:text-white rounded-xl shadow-[0px_0px_6px_1px_rgba(0,0,0,0.3)]  hover:shadow-[0px_0px_8px_3px_rgba(0,0,0,0.3)] hover:scale-[100.1%] transition hover:duration-200 hover:ease-in-out ">
      <div className="flex flex-col gap-4">
        <div className="flex justify-between">
          <span className="px-2 p-1 text-btn-primary bg-btn-primary/10 rounded-md text-sm">
            10 min ago
          </span>
          <BookmarkBtn job={job}/>
        </div>
        <h1 className="flex justify-between">
          <div className="flex flex-col gap-2">
            <span className="font-medium">{job.job_title}</span>
            <span className="line-clamp-1 w-[20%]">{job.job_description}</span>
          </div>
        </h1>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex gap-4 text-nowrap items-center">
          <span className="flex gap-2 items-center">
            <img src="/briefcase.svg" alt="" />
            <span>IT & Technology</span>
          </span>
          <span className="flex gap-2  items-center">
            <img src="/clock.svg" alt="" />
            <span>{job.job_type}</span>
          </span>
          <span className="flex gap-2  items-center">
            <img src="/wallet.svg" alt="" />
            <span>${job.job_salary}</span>
          </span>
          <span className="flex gap-2  items-center">
            <img src="/map-pin.svg" alt="" />
            <span>{job.job_location}</span>
          </span>
        </div>
        <Link
          href={`/jobs/${job.id}`}
          className="bg-btn-primary hover:bg-btn-hover text-white px-4 py-2 rounded-md"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
