"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { redirect } from "next/navigation";
import { FormEvent } from "react";

export default function AddCompany() {
  async function handleCreateCompany(e: FormEvent): Promise<void> {
    e.preventDefault();
    const target = e.target as HTMLFormElement;

    const companyObj = {
      name: target.Name.value,
      description: target.description.value,
    };
    console.log(companyObj);
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_HOST_NAME as string}/api/company`,
      {
        method: "POST",
        body: JSON.stringify(companyObj),
      }
    );

    const data = await res.json();
    if (data.success) {
      redirect("/company");
    }
    alert(data.message);
  }

  return (
    <div className="min-h-screen w-full flex items-center justify-center">
      <Card className="w-full max-w-sm bg-[#ebf5f4]">
        <CardHeader className="text-center">
          <CardTitle className="text-xl ">Create your company</CardTitle>
          <CardDescription>Enter details of the company</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleCreateCompany}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="name">Company name</Label>
                <Input
                  id="name"
                  type="text"
                  name="Name"
                  placeholder="Company name"
                  className="bg-white"
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="description">Description</Label>
                </div>
                <Input
                  id="description"
                  type="text"
                  name="description"
                  placeholder="Company description"
                  className="bg-white"
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full text-white bg-teal-600 hover:bg-teal-700 cursor-pointer"
              >
                Create Company
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
