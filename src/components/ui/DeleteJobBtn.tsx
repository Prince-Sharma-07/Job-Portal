import { AlertDialog, Button, Flex } from "@radix-ui/themes";
import { Job } from "../../../generated/prisma";
import { toast } from "sonner";
import { Trash } from "lucide-react";

export default function DeleteJobBtn({ job }: { job: Job }) {
  async function handleDelete() {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_HOST_NAME as string}/api/job/` + job.id,
        {
          method: "DELETE",
        }
      );
      const data = await res.json();
      alert(data?.message)
    } catch (err: any) {
      console.log(err.message);
      toast("Something went wrong!");
    }
  }
  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger>
        <button className="text-white w-25 justify-center flex gap-2 items-center bg-teal-600 hover:bg-teal-700 cursor-pointer px-4 text-sm font-medium py-2 text-nowrap rounded-sm">
          <Trash className="h-4 w-4"/>Delete
        </button>
      </AlertDialog.Trigger>
      <AlertDialog.Content maxWidth="450px">
        <AlertDialog.Title>Delete Job</AlertDialog.Title>
        <AlertDialog.Description size="2">
          Are you sure? This Job will no longer be accessible and any existing
          sessions will be expired.
        </AlertDialog.Description>

        <Flex gap="3" mt="4" justify="end">
          <AlertDialog.Cancel>
            <Button variant="soft" color="gray">
              Cancel
            </Button>
          </AlertDialog.Cancel>
          <AlertDialog.Action>
            <Button onClick={handleDelete} variant="solid" color="red">
              Delete
            </Button>
          </AlertDialog.Action>
        </Flex>
      </AlertDialog.Content>
    </AlertDialog.Root>
  );
}
