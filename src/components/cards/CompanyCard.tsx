import { CompanyWithJobs } from "@/types";
import { Avatar } from "@radix-ui/themes";

export default function CompanyCard({ company } : CompanyWithJobs) {
  return (
      <div className="flex flex-col gap-4 items-center justify-around shadow-card bg-white dark:bg-white/10 dark:text-white w-[300px] max-w-[375px]  rounded-2xl px-8 py-6">
        <Avatar
            className="cursor-pointer"
            radius="medium"
            size={'6'}
            fallback={company?.companyName[0].toUpperCase() || ""}
          />
        <h1 className="text-2xl font-semibold text-center line-clamp-1">
          {company?.companyName}
        </h1>
        <p className="text-lg line-clamp-1">{company?.companyDescription}</p>
        <span className="px-2 p-1 text-btn-primary bg-btn-primary/10 rounded-md text-sm">
          {company?.jobs?.length} open jobs
        </span>
      </div>
  );
}
