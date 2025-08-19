//@ts-nocheck
"use client";
import SavedCard from "@/components/cards/SavedCard";
import { useSavedContext } from "@/contexts/SavedJobsProvider";

export default function page() {
  
  const {saved} = useSavedContext()

  return (
    <div className="pt-20 flex flex-col gap-4 p-8">
     <h2 className="text-2xl font-bold">Saved Jobs</h2>
    <div className="flex flex-col gap-4 w-full  min-h-screen">
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
