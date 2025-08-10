//@ts-nocheck
"use client";
import { useSavedContext } from "@/contexts/SavedJobsProvider";
import Link from "next/link";
import React from "react";
import { Job } from "../../../generated/prisma";

export default function savedCard({ job }: { job: Job }) {
  const { removeFromSave } = useSavedContext();
  return (
    <div className="flex flex-col gap-4 border-2 p-4 justify-between h-fit rounded-2xl">
      <div className="flex flex-col gap-2">
        <h1 className="font-medium">{job.job_title}</h1>
        <p className="line-clamp-2">{job.job_description}</p>
        <span className="font-medium">
          Location <span>{job.job_location}</span>
        </span>
      </div>
      <button
        onClick={() => removeFromSave(job.id)}
        className="text-teal-400 hover:text-teal-600"
      >
        Remove from fav
      </button>
    </div>
  );
}
