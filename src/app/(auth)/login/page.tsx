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

export default function SignIn() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError("")
    const userObj = {
      email,
      password,
    };
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_HOST_NAME as string}/api/login`,
        {
          method: "POST",
          body: JSON.stringify(userObj),
        }
      );
      if (res.redirected) {
        window.location.href = res.url;
      }
      else{
        const data = await res.json();
        console.log("the->",data)
        setError(data.message)
      }
    } catch (err: any) {
      // error ka type kuch bhi ho skta hai ,
      // agar wo throw keyword se direct throw hua h to usme message key nahi hogi,
      // else if vo instance of the Error object hai to message key available hogi.
      alert(err.message);
    }
  }

  return (
    <div className="min-h-screen w-full flex items-center justify-center dark:text-black">
      <Card className="w-full max-w-sm bg-[#ebf5f4]">
        <CardHeader className="text-center">
          <CardTitle className="text-xl ">Login to your account</CardTitle>
          <CardDescription>
            Enter your details below to login to your account
            <div>
              For guest login use: <br />
              <strong>Email:</strong> guest@jobs.com <strong>Password:</strong>{" "}
              12345678
            </div>
          </CardDescription>
          {error.length ? (
            <CardDescription className="-mb-4">
              <strong className="text-red-400 text-sm">{error}</strong>
            </CardDescription>
          ) : (
            <></>
          )}
        </CardHeader>
        <CardContent>
          
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-6">
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
                New user?{" "}
                <Link
                  className="text-blue-500 hover:text-blue-600"
                  href={"/signup"}
                >
                  Register
                </Link>
              </div>
              <Button
                type="submit"
                className="w-full text-white bg-teal-600 hover:bg-teal-700 cursor-pointer"
              >
                Login
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
