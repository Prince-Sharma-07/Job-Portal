import JobCard from "@/components/cards/JobCard";
import Heading from "@/components/sections/Heading";
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
        include: {
          company: true,
        },
      },
    },
  });

  return (
    <div className="flex flex-col items-center gap-6 min-h-screen w-full ">
      <Heading name="Your Applications"/>
      <div className="w-full text-center flex flex-col gap-4 px-10 py-8">
        {applications.length ? (
          applications.map((application) => (
            <JobCard key={application.id} job={application.job} />
          ))
        ) : (
          <div className="font-medium text-xl border-t pt-4">No applications are here...</div>
        )}
      </div>
    </div>
  );
}
