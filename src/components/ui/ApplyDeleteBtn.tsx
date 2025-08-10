"use client";
import { JobWithCompanyWithOwner } from "@/types";
import { useState } from "react";
import ApplyJobBtn from "./ApplyJobBtn";

export default function ApplyDeleteBtn({
  applied,
  job,
}: {
  applied: boolean;
  job: JobWithCompanyWithOwner;
}) {
  const [hasApplied, setHasApplied] = useState(applied);
  function handleDelete(){

  }
  return (
    <div>
      {!hasApplied ? (
        <ApplyJobBtn setHasApplied={setHasApplied} job={job} />
      ) : (
        <button className="bg-gray-300 cursor-not-allowed text-white font-medium px-4 py-2 rounded-md">
          Delete Application
        </button>
      )}
    </div>
  );
}
