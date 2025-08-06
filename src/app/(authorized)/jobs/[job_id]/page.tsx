import JobDetailCard from "@/components/cards/JobDetailCard";
import EditDeleteJob from "@/components/ui/EditDeleteJob";
import ViewApplicants from "@/components/ui/ViewApplicants";

export default async function page({ params } : {params : {job_id : string}}) {
  const id = params.job_id;

  const res = await fetch("http://localhost:3000/api/job/" + id);
  const data = await res.json();
  const job = data.data
 

  return (
    <div className="w-full flex flex-col min-h-screen">
      <h1 className="w-full bg-black backdrop-blur-md h-50 text-4xl text-white flex items-center justify-center font-bold pt-10">Job Details</h1>
      <ViewApplicants job={job} />
      <JobDetailCard job={job}/>
      <div className="flex flex-col gap-4 px-10">
      <h3 className="text-2xl font-medium flex flex-col gap-10">Job Description</h3>
         <p>{job.job_description}</p>
          <EditDeleteJob job={job} />
      </div>
     
    </div>
  );
}
