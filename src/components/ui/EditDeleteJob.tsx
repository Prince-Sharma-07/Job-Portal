"use client";
import { useUserContext } from "@/contexts/UserContextProvider";
import DeleteJobBtn from "./DeleteJobBtn";
import EditJobBtn from "./EditJobBtn";
import { JobWithCompany } from "@/types";

export default function EditDeleteJob({ job } : {job : JobWithCompany}) {
  const { userData } = useUserContext();

  return (
    <div className="place-self-end">
      {userData?.company?.id === job?.company?.id ? (
        <div className="flex gap-4 justify-center">
          <EditJobBtn job={job}/>
          <DeleteJobBtn job={job} />
        </div>
      ) : null}
    </div>
  );
}
