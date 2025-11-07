"use client";
import { useUserContext } from "@/contexts/UserContextProvider";
import { JobWithCompany } from "@/types";
import { Badge, Button, Card, Dialog, Flex, Spinner } from "@radix-ui/themes";
import { useEffect, useState } from "react";
import { Application, User } from "../../../generated/prisma";
import { Trash } from "lucide-react";
import { toast } from "sonner";

export default function ViewApplicants({ job }: { job: JobWithCompany }) {
  const { userData } = useUserContext();
  const [applicants, setApplicants] =
    useState<(Application & { user: User })[]>();
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
        `${process.env.NEXT_PUBLIC_HOST_NAME as string}/api/applicants/` + id,
        { method: "DELETE" }
      );
      const data = await res.json();
      toast(data.data.message);
      window.location.href = ''
    } catch (err) {
      toast("something went wrong");
    }
  }

  if (userData?.id != job.company.companyOwnerId) {
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
        <Dialog.Description size="2" mb="4" className="font-medium">
          List of top Applicants
        </Dialog.Description>

        <Flex direction="column" gap="3" overflow={"auto"} height={"10"}>
          {isLoading && <Spinner size={"3"} />}
          {applicants?.length ? (
            applicants?.map((app: Application & { user: User }) => (
              <Card key={app.id}>
                <Flex gap={"2"} align={"center"} justify={"between"}>
                  <Badge>{app?.user?.name}</Badge>
                  <Trash
                    onClick={() => handleDelete(app.id)}
                    className="h-4 w-4 cursor-pointer text-teal-600"
                  />
                </Flex>
              </Card>
            ))
          ) : (
            <div className="text-sm">No applicants for this job..</div>
          )}
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
