import CompanyCard from "@/components/cards/CompanyCard";
import prismaClient from "@/services/prisma";
import Link from "next/link";

export default async function Companies() {
  const companies = await prismaClient.company.findMany({
    include: {
      owner: true,
      jobs: true,
    },
  });

  return (
    <div className="pt-25 min-h-screen px-10">
      <div className="grid grid-cols-4 place-items-center gap-4">
        {companies.length ? (
          companies.map((company) => (
            <Link key={company.id} href={"/company/" + company.id}>
              <CompanyCard company={company} />
            </Link>
          ))
        ) : (
          <div className="p-4 text-xl font-medium">
            No Companies are available at this moment....
          </div>
        )}
      </div>
    </div>
  );
}
