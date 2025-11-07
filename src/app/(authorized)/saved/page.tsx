//@ts-nocheck
"use client";
import SavedCard from "@/components/cards/SavedCard";
import Heading from "@/components/sections/Heading";
import { useSavedContext } from "@/contexts/SavedJobsProvider";

export default function page() {
  const { saved } = useSavedContext();

  return (
    <div className="min-h-screen">
      <Heading name="Saved Jobs" />
      <div className="flex flex-col gap-4 w-full min-h-screen px-8 py-8">
        {saved.length ? (
          saved.map((job) => <SavedCard key={job.id} job={job} />)
        ) : (
          <div className="font-medium text-xl pt-4 border-t">
            No Saved Jobs...
          </div>
        )}
      </div>
    </div>
  );
}
