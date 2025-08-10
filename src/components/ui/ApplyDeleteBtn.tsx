"use client";
import React, { useState } from "react";
import ApplyJobBtn from "./ApplyJobBtn";
import { JobWithCompanyWithOwner } from "@/types";

export default function ApplyDeleteBtn({
  applied,
  job,
}: {
  applied: boolean;
  job: JobWithCompanyWithOwner;
}) {
  const [hasApplied, setHasApplied] = useState(applied);
  function handleDelete() {
    console.log("delete called");
  }
  return (
    <div>
      {!hasApplied ? (
        <ApplyJobBtn
          hasApplied={hasApplied}
          setHasApplied={setHasApplied}
          job={job}
        />
      ) : (
        <button
          onClick={handleDelete}
          className="bg-gray-300 cursor-not-allowed text-white font-medium px-4 py-2 rounded-md"
        >
          Delete Application
        </button>
      )}
    </div>
  );
}
