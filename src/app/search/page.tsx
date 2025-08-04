//@ts-nocheck
import JobCard from "@/components/JobCard";
// import { searchedJobs } from "@/constants";
import { Separator } from "@radix-ui/themes";
import { BriefcaseBusiness, DropletIcon } from "lucide-react";

export default async function page({ searchParams }) {
  const query = await searchParams.q || "";
  const jt = await searchParams.jt || "";
  const et = await searchParams.et || "";
  const sr = await searchParams.sr || 0
  let searchedJobs = [];

  //   const url =
  //     `https://jsearch.p.rapidapi.com/search?query=${query}&page=1&num_pages=1&country=us&date_posted=all`;
  //   const options = {
  //     method: "GET",
  //     headers: {
  //       'x-rapidapi-key': '999b16d81bmsh37639e79639aebfp1e0054jsn16760fec5e1c',
  // 	    'x-rapidapi-host': 'jsearch.p.rapidapi.com'
  //     },   
  //   };

    try {
      const response = await fetch(`http://localhost:3000/api/job?q=${query}&jt=${jt}&et=${et}&sr=${sr}`);
      const result = await response.json();
      searchedJobs = result?.data || []
    } catch (error) {
      console.error(error);
    }

  return (
    <div className="flex flex-col gap-4">
    {query ? <div className="text-xl font-semibold">Showing Results for: <span className="font-medium">"{query}"</span></div> : <div className="text-xl font-semibold flex items-center gap-3">All Jobs <BriefcaseBusiness/></div>} 
    <div className="flex flex-col gap-4 rounded-xl min-h-fit">
      {searchedJobs.length ? (
        searchedJobs.map((job) => <JobCard key={job.id} job={job} />)
      ) : (
        <div>No searched results found...</div>
      )}
    </div>
    </div>
  );
}
