"use client";
import React, { useState } from "react";
import ApplyJobBtn from "./ApplyJobBtn";
import { JobWithCompanyWithOwner } from "@/types";
import { Trash } from "lucide-react";
import { toast } from "sonner";
import { useUserContext } from "@/contexts/UserContextProvider";
import { useRouter } from "next/navigation";

export default function ApplyDeleteBtn({
  applied,
  job,
}: {
  applied: boolean;
  job: JobWithCompanyWithOwner;
}) {
  const [hasApplied, setHasApplied] = useState(applied);
  const [loading , setLoading] = useState(false);
  const {userData} = useUserContext()
  const Application = userData?.applications.find((app)=>app.job_id == job.id)
  const ApplicationId = Application?.id
  const router = useRouter()

  async function handleDelete() {
    setLoading(true);
    try{
      const res = await fetch(`${process.env.NEXT_PUBLIC_HOST_NAME as string}/api/applicants/` + ApplicationId , {
        method : "DELETE"
      })
      const data = await res.json();
      console.log(data)
      setHasApplied(false)
      alert(data?.data?.message)
    }catch(err : any){
      console.log(err.message);
    }
    setLoading(false)
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
          className="bg-red-400 cursor-pointer flex items-center gap-2 text-white font-medium px-4 py-2 rounded-md"
          disabled={loading}
        >
         <Trash /> Delete Application
        </button>
      )}
    </div>
  );
}
