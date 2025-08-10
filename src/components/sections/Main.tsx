import prismaClient from "@/services/prisma";
import BrandsList from "../ui/BrandsList";
import HomeSearchBar from "../ui/HomeSearchBar";

export default function Main() {
  const jobs = prismaClient.job.count();
  const candidates = prismaClient.user.count();
  const companies = prismaClient.company.count();

  return (
    <main className="h-screen w-full bg-[url('/hero-image.jpg')] bg-cover bg-no-repeat">
      <div className="h-full w-full bg-black/80 backdrop-blur-md flex flex-col pt-8 justify-between items-center">
        <div className="my-auto flex flex-col gap-8 items-center w-[98%] sm:w-[95%] md:w-[90%] lg:w-[80%] xl:w-[70%]">
          <div className="flex flex-col items-center gap-2">
            <h1 className="text-white text-center font-bold text-[32px] sm:text-[40px] md:text-[50px] lg:text-[60px] xl:text-[70px]">
              Find Your Dream Job Today!
            </h1>
            <p className="text-[#FFFFFF]/80 text-[18px] text-center">
              Connecting Talent with Opportunity: Your Gateway to Career Success
            </p>
          </div>
          <HomeSearchBar />
          <div className="w-[85%] sm:w-[80%] md:w-[75%] lg:w-[70%] xl:w-[65%] flex justify-between pt-5 md:pt-10 items-center max-md:hidden">
            <div className="flex gap-1 md:gap-2 lg:gap-3 items-center">
              <img
                height={60}
                width={60}
                src="/jobs-icon.svg"
                alt="jobs_icon"
                className="h-[40px] w-[40px] sm:h-[50px] sm:w-[50px] md:h-[60px] md:w-[60px]"
              />
              <div className="flex flex-col text-white">
                <span className="text-[16px] md:text-[20px] font-bold">
                  {jobs}
                </span>
                <span className="text-gray-300 text-[12px] md:text-[16px]">
                  Jobs
                </span>
              </div>
            </div>
            <div className="flex gap-1 md:gap-2 lg:gap-3 items-center">
              <img
                height={60}
                width={60}
                src="/candidates-icon.svg"
                alt="jobs_icon"
                className="h-[40px] w-[40px] sm:h-[50px] sm:w-[50px] md:h-[60px] md:w-[60px]"
              />
              <div className="flex flex-col text-white">
                <span className="text-[16px] md:text-[20px] font-bold">
                  {candidates}
                </span>
                <span className="text-gray-300 text-[12px] md:text-[16px]">
                  Candidates
                </span>
              </div>
            </div>
            <div className="flex gap-1 md:gap-2 lg:gap-3 items-center">
              <img
                height={60}
                width={60}
                src="/companies-icon.svg"
                alt="jobs_icon"
                className="h-[40px] w-[40px] sm:h-[50px] sm:w-[50px] md:h-[60px] md:w-[60px]"
              />
              <div className="flex flex-col text-white">
                <span className="text-[16px] md:texxt-[20px] font-bold">
                  {companies}
                </span>
                <span className="text-gray-300 text-[12px] md:text-[16px]">
                  Companies
                </span>
              </div>
            </div>
          </div>
        </div>
        <BrandsList />
      </div>
    </main>
  );
}
