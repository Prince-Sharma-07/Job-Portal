"use client";
import { JobWithCompany } from "@/types";
import { Button, Dialog, Flex, Text, TextField } from "@radix-ui/themes";
import { Edit, Edit2Icon } from "lucide-react";
import { useState } from "react";

type addJob = {
  job_title: string;
  job_type: string;
  job_description: string;
  job_salary: number;
  employment_type: string;
  job_location: string;
};

export default function EditJobBtn({ job } : {job : JobWithCompany}) {
  const [job_title, setTitle] = useState<string>(job.job_title);
  const [job_type, setJobType] = useState<string>(job.job_type);
  const [job_description, setDescription] = useState<string>(job.job_description);
  const [job_salary, setSalary] = useState(job.job_salary);
  const [employment_type, setEmpType] = useState<string>(job.employment_type);
  const [job_location, setLocation] = useState<string>(job.job_location);

  async function handleAddJob() {
    const parsedSalary = job_salary || 0;
    const jobData: addJob = {
      job_title,
      job_type,
      job_description,
      job_salary: parsedSalary,
      employment_type,
      job_location,
    };

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_HOST_NAME as string}/api/job`,
        {
          method: "POST",
          body: JSON.stringify(jobData),
        }
      );
      const data = await res.json();
      alert(data.message);
    } catch (err: any) {
      alert(err.message);
    }

    setTitle("");
    setJobType("");
    setDescription("");
    setSalary(0);
    setEmpType("");
    setLocation("");
  }

  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <button className="w-20 text-white flex gap-2 items-center justify-center px-2 text-sm font-medium rounded bg-btn-primary hover:bg-btn-hover dark:hover:bg-gray-700 transition cursor-pointer ">
          <Edit className="h-4 w-4"/> Edit
        </button>
      </Dialog.Trigger>

      <Dialog.Content maxWidth="450px">
        <Dialog.Title>Add Job</Dialog.Title>
        <Dialog.Description size="2" mb="4">
          Add a Job
        </Dialog.Description>

        <Flex direction="column" gap="3">
          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              Job Title
            </Text>
            <TextField.Root
              value={job_title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter job title"
            />
          </label>
          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              Job Description
            </Text>
            <TextField.Root
              value={job_description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter job description"
            />
          </label>
          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              Job Type
            </Text>
            <select
              required
              value={job_type}
              onChange={(e) => setJobType(e.target.value)}
              className="select select-info bg-transparent w-full "
            >
              <option value="" disabled>
                Select job type
              </option>
              <option value="On site">On-site</option>
              <option value="Remote">Remote</option>
            </select>
          </label>
          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              Salary (in lakhs)
            </Text>
            <TextField.Root
              type="number"
              min="0"
              value={job_salary}
              onChange={(e) => setSalary(parseFloat(e.target.value))}
              placeholder="Enter salary"
            />
          </label>
          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              Employment Type
            </Text>
            {/* <TextField.Root
              value={employment_type}
              onChange={(e) => setEmpType(e.target.value)}
              placeholder="Enter employment type"
            /> */}
            <select
              required
              value={employment_type}
              onChange={(e) => setEmpType(e.target.value)}
              className="select select-info bg-transparent w-full "
            >
              <option value="" disabled>
                Select employment type
              </option>
              <option value="Full-Time">Full-Time</option>
              <option value="Part-Time">Part-Time</option>
              <option value="Internship">Internship</option>
            </select>
          </label>
          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              Location
            </Text>
            <TextField.Root
              value={job_location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="City, Country"
            />
          </label>
        </Flex>

        <Flex gap="3" mt="4" justify="end">
          <Dialog.Close>
            <Button variant="soft" color="gray">
              Cancel
            </Button>
          </Dialog.Close>
          <Dialog.Close>
            <Button onClick={handleAddJob}>Add</Button>
          </Dialog.Close>
        </Flex>
      </Dialog.Content>
    </Dialog.Root>
  );
}
