import JobCard from "@/components/cards/JobCard";
import getCurrUser from "@/helper";
import prismaClient from "@/services/prisma";
import { notFound } from "next/navigation";

export default async function page() {
  const user = await getCurrUser();
  if (!user) {
    notFound();
  }
  const applications = await prismaClient.application.findMany({
    where: {
      user_id: user?.id,
    },
    include: {
      job: {
        include : {
          company : true
        }
      }
    },
  });

  return (
    <div className="flex flex-col items-center gap-6 min-h-screen pt-16 py-8 w-full px-10">
      <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold h-50 flex items-center justify-center w-[99vw] bg-black">Your Applications</h1>
      <div className="w-full text-center flex flex-col gap-4">
        {applications.length ? applications.map((application) => (
          <JobCard key={application.id} job={application.job} />
        )) : <div>No applications are there...</div>}
      </div>
    </div>
  );
}
