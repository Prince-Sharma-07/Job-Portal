import JobDetailCard from "@/components/cards/JobDetailCard";
import EditDeleteJob from "@/components/ui/EditDeleteJob";
import ViewApplicants from "@/components/ui/ViewApplicants";
import getCurrUser from "@/helper";
import prismaClient from "@/services/prisma";
import { redirect } from "next/navigation";

export default async function page({
  params,
}: {
  params: Promise<{
    job_id: string;
  }>;
}) {
  const p = await params;
  const id = p.job_id;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_HOST_NAME as string}/api/job/` + id
  );
  const data = await res.json();
  const job = data.data;
  const user = await getCurrUser();

  let userHasApplied = false;

  if (user) {
    const application = await prismaClient.application.findMany({
      where: {
        job_id: id,
        user_id: user.id,
      },
    });
    if (application.length > 0) userHasApplied = true;
  } else {
    redirect("/login");
  }

  return (
    <div className="w-full flex flex-col gap-2 min-h-screen h-fit">
      <div className="flex flex-col">
        <h1 className="w-full bg-black backdrop-blur-md h-50 text-4xl text-white flex items-center justify-center font-bold pt-10">
          Job Details
        </h1>
        <ViewApplicants job={job} />
      </div>
      <JobDetailCard applied={userHasApplied} job={job} />
      <div className="border-t mx-6 dark:border-black/90"></div>
      <div className="flex flex-col gap-8 px-4 md:px-6 lg:px-8 rounded-xl bg-white/10 p-6">
        <div className="flex flex-col gap-2">
          <h3 className="text-2xl font-medium flex flex-col gap-10">
            Job Description
          </h3>
          <p>{job.job_description}</p>
        </div>
        <EditDeleteJob job={job} />
      </div>
    </div>
  );
}
