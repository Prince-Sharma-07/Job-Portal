import JobDetailCard from "@/components/cards/JobDetailCard";
import EditDeleteJob from "@/components/ui/EditDeleteJob";
import ViewApplicants from "@/components/ui/ViewApplicants";
import getCurrUser from "@/helper";
import prismaClient from "@/services/prisma";

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
  }

  return (
    <div className="w-full flex flex-col min-h-screen">
      <h1 className="w-full bg-black backdrop-blur-md h-50 text-4xl text-white flex items-center justify-center font-bold pt-10">
        Job Details
      </h1>
      <ViewApplicants job={job} />
      <JobDetailCard applied={userHasApplied} job={job} />
      <div className="flex flex-col gap-4 px-10">
        <h3 className="text-2xl font-medium flex flex-col gap-10">
          Job Description
        </h3>
        <p>{job.job_description}</p>
      </div>
      <EditDeleteJob job={job} />
    </div>
  );
}
