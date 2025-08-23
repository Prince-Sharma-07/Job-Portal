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
import { FormEvent, useState } from "react";

export default function SignUp() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState({});

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const userObj = {
      name,
      email,
      password,
    };

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_HOST_NAME as string}/api/signup`,
        {
          method: "POST",
          body: JSON.stringify(userObj),
        }
      );
      if (res.redirected) {
        window.location.href = "/";
      }
    } catch (err: any) {
      alert(err.message);
    }
  }

  return (
    <div className="min-h-screen w-full flex items-center justify-center dark:text-black">
      <Card className="w-full max-w-sm bg-[#ebf5f4]">
        <CardHeader className="text-center">
          <CardTitle className="text-xl ">
            Sign up to create an account
          </CardTitle>
          <CardDescription>
            Enter your details below to login to your new account.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  id="name"
                  type="name"
                  name="name"
                  placeholder="eg. prince"
                  className="bg-white"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  id="email"
                  type="email"
                  name="email"
                  placeholder="jobs@example.com"
                  className="bg-white"
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                </div>
                <Input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  id="password"
                  type="password"
                  name="password"
                  placeholder="atleast 8 characters long"
                  className="bg-white"
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
              <div className="text-sm font-medium">
                Already a user?{" "}
                <Link
                  className="text-blue-500 hover:text-blue-600"
                  href={"/login"}
                >
                  login
                </Link>
              </div>
              <Button
                type="submit"
                className="w-full text-white bg-teal-600 hover:bg-teal-700 cursor-pointer"
              >
                Register
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
