//@ts-nocheck
// "use client";
// import { handleSignUp } from "@/actions/actions";
// import { redirect } from "next/navigation";
// import React, { useState } from "react";

// export default function page() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [pass, setPass] = useState("");
//   const [error, setError] = useState({});

//   async function handleSubmit(e) {
//     e.preventDefault();
//     const errObj = {};
//     setError({});
//     if (name.length < 3) {
//       errObj.name = "Name should be greater than 3 words";
//     }
//     if (email.length < 6) {
//       errObj.email = "Email should be greater than 6 words";
//     }
//     if (pass.length < 8) {
//       errObj.pass = "Email should be greater than 8 words";
//     }

//     if (errObj.name || errObj.email || errObj.pass) {
//       setError(errObj);
//     } else {
//       let user = {
//         name,
//         email,
//         pass,
//       };
//       const res = await handleSignUp(user);
//       if (!res.status) {
//         errObj.msg = res.msg;
//         setError(errObj);
//       } else {
//         alert(res.msg);
//         redirect("/");
//       }
//     }
//   }

//   return (
//     <div className="pt-15 h-screen flex items-center justify-center bg-blue-200">
//       <form
//         onSubmit={handleSubmit}
//         action=""
//         className="bg-white flex flex-col justify-between gap-4 p-4 rounded-lg"
//       >
//         {error.name ||
//           error.email ||
//           error.pass ||
//           (error.msg && (
//             <p className="text-red-400">{JSON.stringify(error)}</p>
//           ))}
//         <h1 className="text-xl font-bold">Sign up</h1>
//         <div className="flex gap-2 flex-col">
//           <label htmlFor="name">Name:</label>
//           <input
//             onChange={(e) => setName(e.target.value)}
//             id="name"
//             type="text"
//             name="name"
//             className="border-2 rounded-md"
//             required
//           />
//           <label htmlFor="email">Email:</label>
//           <input
//             onChange={(e) => setEmail(e.target.value)}
//             id="email"
//             type="email"
//             className="border-2 rounded-md"
//             name="email"
//             required
//           />
//           <label htmlFor="password">Password:</label>
//           <input
//             onChange={(e) => setPass(e.target.value)}
//             id="password"
//             type="password"
//             className="border-2 rounded-md"
//             name="password"
//             required
//           />
//         </div>
//         <button type="submit" className="bg-green-400 rounded-md">
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// }

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

export default function SignIn() {
  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const userObj = {
      email: e.target.email.value,
      password: e.target.password.value,
      // role: e.target.role.value,
    };
    try {
      const res = await fetch("http://localhost:3000/api/login", {
        method: "POST",
        body: JSON.stringify(userObj),
      });
      console.log(res);
      if (res.redirected) {
        window.location.href = res.url;
      }
    } catch (err) {
      alert(err.message);
    }
    // const data = await res.json();
    // console.log(data)
    // if(data.success){
    //   redirect('/')
    // }
    // alert(data.message);
  }

  return (
    <div className="min-h-[85vh] w-full flex items-center justify-center">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Login to your account</CardTitle>
          <CardDescription>
            Enter your details below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
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
                  {/* <a
                  href="#"
                  className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                >
                  Forgot your password?
                </a> */}
                </div>
                <Input
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
                New user? <Link href={"/signup"}>Register</Link>
              </div>
              <Button type="submit" className="w-full">
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
