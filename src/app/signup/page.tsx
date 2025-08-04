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
import { FormEvent, useState } from "react";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const userObj = {
      email: email,
      password: pass,
    };

    try {
      const res = await fetch("http://localhost:3000/api/signup", {
        method: "POST",
        body: JSON.stringify(userObj),
      });
      if (res.redirected) {
        window.location.href = "/";
      }
    } catch (err) {
      alert(err.message);
    }
  }

  return (
    <div className="min-h-[85vh] w-full flex items-center justify-center">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Sign up to create an account</CardTitle>
          <CardDescription>
            Enter your details below to login to your new account.
          </CardDescription>
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
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                </div>
                <Input
                  value={pass}
                  onChange={(e) => setPass(e.target.value)}
                  id="password"
                  type="password"
                  name="password"
                  placeholder="Atleast 8 characters long"
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
              <div>
                Already a user? <Link href={"/login"}>login</Link>
              </div>
              <Button type="submit" className="w-full">
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
