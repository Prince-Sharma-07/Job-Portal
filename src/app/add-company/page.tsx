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
import { redirect } from "next/navigation";
import { FormEvent } from "react";

export default function AddCompany() {
  async function handleCreateCompany(e: FormEvent) {
    e.preventDefault();
    const companyObj = {
      name: e.target.name.value,
      description: e.target.description.value,
      // role: e.target.role.value,
    };
 console.log(companyObj)
    const res = await fetch("http://localhost:3000/api/company", {
      method: "POST",
      body: JSON.stringify(companyObj),
    });
    
    const data = await res.json();
    if(data.success){
      redirect('/company')
    }
    alert(data.message);
  }

  return (
    <div className="min-h-[85vh] w-full flex items-center justify-center">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Create your company</CardTitle>
          <CardDescription>Enter details of the company</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleCreateCompany}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  type="name"
                  name="name"
                  placeholder="Company name"
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="description">Description</Label>
                  {/* <a
                  href="#"
                  className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                >
                  Forgot your password?
                </a> */}
                </div>
                <Input
                  id="desctiption"
                  type="text"
                  name="description"
                  placeholder="Company description"
                  required
                />
              </div>
              {/* <div className="grid gap-2">
                <Label htmlFor="role">Role</Label>
                <select
                  name="role"
                  id="role"
                  className="border rounded-md p-1.5 text-sm"
                  required
                >
                  <option value="">Select role</option>
                  <option value="EMPLOYEE">Employee</option>
                  <option value="EMPLOYER">Employer</option>
                </select>
              </div> */}
              <Button type="submit" className="w-full">
                Create Company
              </Button>
            </div>
          </form>
        </CardContent>
        {/* <CardFooter className="flex-col gap-2">
          <Button type="submit" className="w-full">
            Login
          </Button>
          <Button variant="outline" className="w-full">
          Login with Google
        </Button>
        </CardFooter> */}
      </Card>
    </div>
  );
}
