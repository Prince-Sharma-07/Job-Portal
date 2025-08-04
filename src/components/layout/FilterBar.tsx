//@ts-nocheck
"use client";

import { RadioGroup } from "@radix-ui/themes";
import { Funnel } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { FormEvent, useState } from "react";

export default function FilterBar() {
  const searchParams = useSearchParams();

  const q = searchParams.get('q') || "";
  const jt = searchParams.get('jt');
  const et = searchParams.get('et');
  const sr = searchParams.get('sr');

  // const [location, setLocation] = useState("");
  const [jobType, setJobType] = useState(jt || "0");
  const [empType, setEmpType] = useState(et ||"0");
  const [salaryRange, setSalaryRange] = useState(0);

  const router = useRouter()

  function handleApply(){
    let url = '/search?q='+q;
    if(jobType !== '0') url += '&jt=' + jobType
    if(empType !== '0') url += '&et=' + empType
    if(salaryRange != 0) url += '&sr=' + salaryRange;
    router.push(url);
  }

  function handleClear(){
    router.push('/search?q=' + q)
  } 

  return (
    <div className="p-4 rounded-xl bg-white/10 dark:text-white shadow-[0px_0px_6px_2px_rgba(0,0,0,0.3)] min-h-[85vh] flex flex-col gap-4 items-center">
      <div className="flex gap-2 items-center">
        <Funnel className="h-5 w-5 text-blue-400" />
        <span className="text-lg">Filter</span>
      </div>
      <div className="flex flex-col gap-4 w-full px-2">
        {/* <label className="flex flex-col gap-2">
          <span className="">Location</span>
          <input
            type="text"
            placeholder="e.g. Mumbai"
            className="input input-info bg-white dark:bg-transparent"
          />
        </label> */}

        <label className="flex flex-col gap-2">
          <span className="">Employment Type</span>
          <RadioGroup.Root defaultValue="0" value={empType}>
            <RadioGroup.Item onClick={()=>setEmpType("0")} value="0">All</RadioGroup.Item>
            <RadioGroup.Item onClick={()=>setEmpType("Full-Time")} value="Full-Time">Full-Time</RadioGroup.Item>
            <RadioGroup.Item onClick={()=>setEmpType("Part-Time")} value="Part-Time">Part-Time</RadioGroup.Item>
            <RadioGroup.Item onClick={()=>setEmpType("Internship")} value="Internship">Internship</RadioGroup.Item>
          </RadioGroup.Root>
        </label>

        <label className="flex flex-col gap-2">
          <span className="">Job Type</span>
          <RadioGroup.Root defaultValue="0" value={jobType} >
            <RadioGroup.Item onClick={()=>setJobType("0")} value="0">All</RadioGroup.Item>
            <RadioGroup.Item onClick={()=>setJobType("Remote")} value="Remote">Remote</RadioGroup.Item>
            <RadioGroup.Item onClick={()=>setJobType("On site")} value="On site">On-site</RadioGroup.Item>
          </RadioGroup.Root>
        </label>

        <label className="flex flex-col gap-2">
          <span>Annual salary (in lakhs)</span>
          <div className="w-full max-w-xs">
            <input
              type="range"
              min={0}
              max={1000000}
              value={salaryRange}
              onChange={(e) => setSalaryRange(e.target.value)}
              className="range text-blue-400 "
              step={200000}
            />
            <div className="flex justify-between px-2.5 mt-2 text-xs">
              <span>0L</span>
              <span>2L</span>
              <span>4L</span>
              <span>6L</span>
              <span>8L</span>
              <span>10L</span>
            </div>
          </div>
        </label>

        {/* <label className="flex flex-col gap-2">
          <span className="">Years of experience</span>
          <input
            type="text"
            placeholder="Select years of experience"
            className="input input-info bg-white dark:bg-transparent"
          />
        </label> */}
        <div className="flex justify-between">
          <button
            onClick={handleApply}
            className="text-blue-500 hover:text-blue-600 cursor-pointer text-end"
          >
            Apply
          </button>
          <button
            onClick={handleClear}
            className="text-blue-500 hover:text-blue-600 cursor-pointer text-end"
          >
            Clear all
          </button>
        </div>
      </div>
    </div>
  );
}
