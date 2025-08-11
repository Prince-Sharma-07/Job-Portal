"use client";
import { Button, Dialog, Flex, Text, TextField } from "@radix-ui/themes";
import { ClipboardPlus } from "lucide-react";
import { useState } from "react";

type addJob = {
  job_title: string;
  job_type: string;
  job_description: string;
  job_salary: number;
  employment_type: string;
  job_location: string;
};

export default function AddJob() {
  const [job_title, setTitle] = useState<string>("");
  const [job_type, setJobType] = useState<string>("");
  const [job_description, setDescription] = useState<string>("");
  const [job_salary, setSalary] = useState("");
  const [employment_type, setEmpType] = useState<string>("");
  const [job_location, setLocation] = useState<string>("");

  async function handleAddJob() {
    const parsedSalary = parseFloat(job_salary) || 0;
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
        `http://${process.env.NEXT_PUBLIC_HOST_NAME as string}/api/job`,
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
    setSalary("");
    setEmpType("");
    setLocation("");
  }

  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <button className="w-full items-center justify-start flex gap-2 px-2.5 py-2 rounded hover:text-black hover:bg-gray-200 transition">
          <ClipboardPlus className="h-6 w-6" /> Add Job
        </button>
      </Dialog.Trigger>

      <Dialog.Content maxWidth="450px">
        <Dialog.Title>Add Job</Dialog.Title>
        <Dialog.Description size="2" mb="4">
          Enter details of Job
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
              className="select select-accent bg-transparent w-full "
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
              onChange={(e) => setSalary(e.target.value)}
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
              className="select select-accent bg-transparent w-full "
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
