import { CompanyWithOwner } from "@/types";
import { Avatar } from "@radix-ui/themes";

export default function CompanyDetailsCard({ company }: { company: CompanyWithOwner }) {
  return (
    <section className="flex flex-col items-center text-center gap-4">
     
      <Avatar
        size="8"
        radius="full"
        fallback={company.companyName[0].toUpperCase()}
      />

      <h1 className="text-4xl font-extrabold text-gray-900 dark:text-gray-300 tracking-tight">
        {company.companyName}
      </h1>

     
      {company.companyDescription && (
        <p className="max-w-2xl text-lg text-gray-600 leading-relaxed">
          {company.companyDescription}
        </p>
      )}


      <span className="text-sm text-gray-500">
        Owned by{" "}
        <span className="font-medium text-teal-600">{company.owner?.name}</span>
      </span>
    </section>
  );
}
