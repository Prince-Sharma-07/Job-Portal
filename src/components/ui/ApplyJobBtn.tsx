'use client'
import { SquareMousePointer } from "lucide-react";
import { Job } from "../../../generated/prisma";
import { useState } from "react";
import { useRouter } from "next/navigation";


export default function ApplyJobBtn({
  job,
  hasApplied,
  setHasApplied,
}: {
  job: Job;
  hasApplied: boolean;
  setHasApplied: (val: boolean) => void;
}) {
  const [loading , setLoading] = useState(false)
    
  async function handleSubmit() {
    setLoading(true)
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_HOST_NAME as string}/api/job/apply/` + job?.id
    );
    setHasApplied(!hasApplied);
    setLoading(false)
    window.location.href = ''
  }
  return (
    <button
      onClick={handleSubmit}
      disabled={loading}
      className="bg-btn-primary flex gap-2 items-center cursor-pointer   hover:bg-btn-hover font-medium text-white px-4 py-2 rounded-md"
    >
     <SquareMousePointer className="h-5 w-5"/> Apply
    </button>
  );
}
