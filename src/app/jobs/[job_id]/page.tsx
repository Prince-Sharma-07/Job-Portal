//@ts-nocheck
import Link from "next/link";
import React from "react";
import { job } from "@/constants";
import { useSavedContext } from "@/contexts/SavedJobsProvider";
import JobDetails from "@/components/JobDetails";

export default async function page({ params }) {
  // let jobId = params.job_id|| "";
  // jobId = decodeURIComponent(jobId);
  // let job = {};

  // const url = `https://jsearch.p.rapidapi.com/job-details?job_id=${jobId}&country=us`;
  // console.log(url);
  // const options = {
  //   method: "GET",
  //   headers: {
  //     "x-rapidapi-key": "999b16d81bmsh37639e79639aebfp1e0054jsn16760fec5e1c",
  //     "x-rapidapi-host": "jsearch.p.rapidapi.com",
  //   },
  // };
  // try {
  //   const response = await fetch(url, options);
  //   console.log(response);
  //   const result = await response.json();
  //   console.log(result);
  //   job = result.data[0];
  //   console.log(job);
  // } catch (error) {
  //   console.error(error);
  // }

  return <JobDetails job={job} />;
}
