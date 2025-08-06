import { CompanyWithJobs } from "@/types";

export default function CompanyCard({ company } : CompanyWithJobs) {
  return (
      <div className=" flex flex-col gap-4 items-center justify-between bg-white shadow-2xl max-w-[375px] w-[306px] h-[360px] rounded-2xl p-4 py-10">
        <h1 className="text-2xl font-semibold text-center">
          {company?.companyName}
        </h1>
        <p className="text-lg">{company?.companyDescription}</p>
        <span className="px-2 p-1 text-btn-primary bg-btn-primary/10 rounded-md text-sm">
          {company?.jobs?.length} open jobs
        </span>
      </div>
  );
}
