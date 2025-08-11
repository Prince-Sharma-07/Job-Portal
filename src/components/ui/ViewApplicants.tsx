"use client";
import { useUserContext } from "@/contexts/UserContextProvider";
import { JobWithCompany } from "@/types";
import { Badge, Button, Card, Dialog, Flex, Spinner } from "@radix-ui/themes";
import { useEffect, useState } from "react";
import { Application } from "../../../generated/prisma";

export default function ViewApplicants({ job }: { job: JobWithCompany }) {
  const { userData } = useUserContext();
  const [applicants, setApplicants] = useState<Application[]>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    async function getApplicants() {
      setIsLoading(true);
      const res = await fetch("/api/applicants/" + job.id);
      const data = await res.json();
      if (data.success) {
        setApplicants(data?.data);
      }
      setIsLoading(false);
    }
    getApplicants();
  }, []);

  async function handleDelete(id: string) {
    try {
      const res = await fetch(
        `http://${
          process.env.NEXT_PUBLIC_HOST_NAME as string
        }/api/applicants/` + id
      );
      const data = await res.json();
      alert(data.message);
    } catch (err) {
      alert("something went wrong");
    }
  }

  if (userData?.company?.id === job.company.id) {
    return null;
  }

  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <button className="bg-btn-primary hover:bg-btn-hover text-white px-4 py-2 ">
          View Applicants
        </button>
      </Dialog.Trigger>

      <Dialog.Content maxWidth="450px">
        <Dialog.Title>Job Applicants</Dialog.Title>
        <Dialog.Description size="2" mb="4">
          List of top Applicants
        </Dialog.Description>

        <Flex direction="column" gap="3">
          {isLoading && <Spinner size={"3"} />}
          {applicants?.map((app: Application) => (
            <Card key={app.id}>
              <Badge>{app.user_id}</Badge>
              <button
                onClick={() => handleDelete(app.id)}
                className="px-2 p-1 rounded-md"
              >
                Delete
              </button>
            </Card>
          ))}
        </Flex>

        <Flex gap="3" mt="4" justify="end">
          <Dialog.Close>
            <Button variant="soft" color="gray">
              Cancel
            </Button>
          </Dialog.Close>
          <Dialog.Close>
            <Button>Save</Button>
          </Dialog.Close>
        </Flex>
      </Dialog.Content>
    </Dialog.Root>
  );
}
