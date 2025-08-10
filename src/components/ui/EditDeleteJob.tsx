"use client";
import { useUserContext } from "@/contexts/UserContextProvider";
import DeleteJobBtn from "./DeleteJobBtn";
import EditJobBtn from "./EditJobBtn";
import { JobWithCompany } from "@/types";

export default function EditDeleteJob({ job } : {job : JobWithCompany}) {
  const { userData } = useUserContext();

  return (
    <div>
      {userData?.company?.id === job?.company?.id ? (
        <div className="flex gap-4 justify-center">
          <EditJobBtn />
          <DeleteJobBtn job={job} />
        </div>
      ) : null}
    </div>
  );
}
