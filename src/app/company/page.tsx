import prismaClient from "@/services/prisma";
import Link from "next/link";

export default async function Companies() {
  const companies = await prismaClient.company.findMany({
    include: {
      owner: true,
    },
  });

  return (
    <div className="pt-16 min-h-screen flex flex-col items-center">
        {companies.length ? companies.map((company) => (
          <div key={company.id}>
            <Link href={'/company/'+company.id}>{JSON.stringify(company)}</Link>
          </div>
        )) : <div className="p-4 text-xl font-medium">No Companies are available at this moment....</div>}
    </div>
  );
}
