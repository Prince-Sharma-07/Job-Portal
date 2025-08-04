//@ts-nocheck
"use client";
import React from "react";
import { useSavedContext } from "@/contexts/SavedJobsProvider";
import SavedCard from "@/components/SavedCard";

export default function page() {
  
  const {saved} = useSavedContext()

  return (
    <div className="pt-20 flex flex-col gap-4 p-8">
     <h2 className="text-2xl font-bold">Saved Jobs</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-4 w-full  min-h-screen">
      {saved.length ? saved.map(
        (job) => (
          <SavedCard
            key={job.id}
            job={job}
          />
        )
      ) : <div>Nothing inside Saved...</div>}
    </div>
    </div>
  );
}
