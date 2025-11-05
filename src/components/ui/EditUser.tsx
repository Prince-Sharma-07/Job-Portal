"use client";
import { useUserContext } from "@/contexts/UserContextProvider";
import { Button, Dialog, Flex, Text, TextField } from "@radix-ui/themes";
import { Edit } from "lucide-react";
import { useState } from "react";

type EditUser = {
  name: string;
  email: string;
};

export default function EditUser() {
  const { userData } = useUserContext();
  const [name, setName] = useState(userData?.name);
  const [email, setEmail] = useState(userData?.email);
  const [error, setError] = useState({});

  function handleCancel() {
    setName(userData?.name);
    setEmail(userData?.email);
  }

  async function handleEditUser() {
    const userObj = {
      name,
      email,
    };

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_HOST_NAME as string}/api/editprofile`,
        {
          method: "POST",
          body: JSON.stringify(userObj),
        }
      );
      if (res.redirected) {
        window.location.href = "/";
      }
    } catch (err: any) {
      console.log("Error while editing user: ", err.message);
    }
  }

  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <button className="flex items-center gap-2 bg-teal-500 hover:bg-teal-600 text-white px-2 py-1 md:px-6 md:py-2 rounded text-sm font-medium transition-colors">
          <Edit />
          <span className="max-md:hidden">Edit Profile</span>
        </button>
      </Dialog.Trigger>

      <Dialog.Content maxWidth="450px">
        <Dialog.Title>Edit Profile</Dialog.Title>
        <Dialog.Description size="2" mb="4">
          Edit details of user
        </Dialog.Description>

        <Flex direction="column" gap="3">
          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              Name
            </Text>
            <TextField.Root
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter name"
            />
          </label>
          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              Email
            </Text>
            <TextField.Root
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email"
            />
          </label>
        </Flex>

        <Flex gap="3" mt="4" justify="end">
          <Dialog.Close>
            <Button onClick={handleCancel} variant="soft" color="gray">
              Cancel
            </Button>
          </Dialog.Close>
          <Dialog.Close>
            <Button onClick={handleEditUser}>Add</Button>
          </Dialog.Close>
        </Flex>
      </Dialog.Content>
    </Dialog.Root>
  );
}
