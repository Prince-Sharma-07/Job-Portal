import Main from "@/components/sections/Main";
import RecentJobs from "@/components/sections/RecentJobs";
import ResumeCTA from "@/components/sections/ResumeCTA";
import React from "react";

export default function page() {
  return (
    <div className="flex flex-col">
      <Main />
      <ResumeCTA />
      <RecentJobs />
    </div>
  );
}
