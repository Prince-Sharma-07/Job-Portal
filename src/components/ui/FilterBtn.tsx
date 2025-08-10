import { BriefcaseBusiness, Funnel } from "lucide-react";
import React from "react";
import { SidebarTrigger } from "./sidebar";

export default function FilterBtn({ query } ) {
  return (
    <div>
      {query ? (
        <div className="text-2xl font-semibold justify-between flex items-center pr-4">
          <span className="max-md:hidden">
            Showing Results for: <span className="font-medium">"{query}"</span>
          </span>
          <span className="md:hidden text-xl">
            Results for: <span className="font-medium ">"{query}"</span>
          </span>
          <Funnel className="h-6 w-6 text-teal-600 hover:text-teal-700 cursor-pointer md:hidden" />
        </div>
      ) : (
        <div className="text-2xl font-semibold flex justify-between items-center gap-3 pr-4">
          <span className="flex gap-3 items-center">
            All Jobs <BriefcaseBusiness />
          </span>
          <SidebarTrigger className="md:hidden"/>

        </div>
      )}
    </div>
  );
}
