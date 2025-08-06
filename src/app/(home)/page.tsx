import Main from "@/components/sections/Main";
import RecentJobs from "@/components/sections/RecentJobs";
import React from "react";

export default function page() {
  return (
    <div className="flex flex-col">
      <Main />
      <RecentJobs />
    </div>
  );
}
