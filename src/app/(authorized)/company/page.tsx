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
    <div className=" min-h-screen px-8 sm:px-9 md:px-10 lg:px-11 xl:px-12 flex flex-col gap-12 items-center w-full">
      <header className="bg-black pt-15 w-[100vw] md:w-[99vw]">
       
        {/* Hero Section */}
        <div className="text-center py-12 md:py-16">
          <h1 className="text-white text-3xl md:text-5xl font-bold">
            Top Companies
          </h1>
        </div>
      </header>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 place-items-center gap-4 sm:gap-5 md:gap-6 lg:gap-7 xl:gap-8">
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
