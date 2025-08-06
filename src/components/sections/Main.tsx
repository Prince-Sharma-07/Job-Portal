import prismaClient from "@/services/prisma";
import BrandsList from "../ui/BrandsList";
import HomeSearchBar from "../ui/HomeSearchBar";

export default function Main() {
  const jobs = prismaClient.job.count();
  const candidates = prismaClient.user.count();
  const companies = prismaClient.company.count();

  return (
    <main className="h-screen w-full bg-[url('/hero-image.jpg')] bg-cover bg-no-repeat">
      <div className="h-full w-full bg-black/80 backdrop-blur-md flex flex-col justify-between items-center">
        <div className="m-auto flex flex-col gap-10 items-center w-[98%] sm:w-[95%] md:w-[90%] lg:w-[80%] xl:w-[70%]">
          <div className="flex flex-col items-center gap-2">
            <h1 className=" text-white font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[70px] ">
              Find Your Dream Job Today!
            </h1>
            <p className="text-[#FFFFFF]/80 text-[18px]">
              Connecting Talent with Opportunity: Your Gateway to Career Success
            </p>
          </div>
          <HomeSearchBar />
          <div className="w-full flex justify-center gap-22 pt-10 items-center">
            <div className="flex gap-3 items-center">
              <img src="/jobs-icon.svg" alt="jobs_icon" />
              <div className="flex flex-col text-white">
                <span>{jobs}</span>
                <span>Jobs</span>
              </div>
            </div>
            <div className="flex gap-3 items-center">
              <img src="/candidates-icon.svg" alt="jobs_icon" />
              <div className="flex flex-col text-white">
                <span>{candidates}</span>
                <span>Candidates</span>
              </div>
            </div>
            <div className="flex gap-3 items-center">
              <img src="/companies-icon.svg" alt="jobs_icon" />
              <div className="flex flex-col text-white">
                <span>{companies}</span>
                <span>Companies</span>
              </div>
            </div>
          </div>
        </div>
        <BrandsList />
      </div>
    </main>
  );
}
