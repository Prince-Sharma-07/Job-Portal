import { createToken } from "@/services/jwt";
import prismaClient from "@/services/prisma";
import { NextRequest, NextResponse } from "next/server";
import { User } from "../../../../generated/prisma";

export async function POST(req: NextRequest) {
  const body = await req.json();

  try{
  const user = await prismaClient.user.findUnique({
    where: {
      email: body.email,
    },
  }) as User;
 
  if (user?.password === body?.password) {
    const userTokenData = {
      id: user.id,
    };
    const token = createToken(userTokenData);
    const res = NextResponse.redirect("http://localhost:3000/");
    res.cookies.set("token", token);
    return res;
  } else {
    return NextResponse.json({
      success: false,
      message: "Invalid Credentials",
    });
  }
}catch(err : any){
  console.log(err);
  return NextResponse.json({
    success: false,
    message: err.message
  })
}
}
