import { createToken } from "@/services/jwt";
import prismaClient from "@/services/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  console.log(req);
  const body = await req.json();

  const userToCreate = {
    name: body.name,
    email: body.email,
    password: body.password,
  };

  try {
    const user = await prismaClient.user.create({
      data: userToCreate,
    });
    const userTokenData = {
      id: user.id,
    };

    const token = createToken(userTokenData);
    const res = NextResponse.redirect(
      `${process.env.NEXT_PUBLIC_HOST_NAME as string}`
    );
    res.cookies.set("token", token); //server actions me response khud handle ho raha tha but yaha par hum khud response handle kr rhe hai isiliye cookies manually set krni pad thi hai
    return res;
    // return NextResponse.json(
    //   {
    //     success: true,
    //     message: "user created successfully",
    //     data: user,
    //   },
    //   { status: 200 }
    // );  200 sab ok hai , 300 site temporarily ya permanently khi or redirect ya move kr di gye h , 404 not found ,401unauthorized, 403 not allowed, 500 some problem in server
  } catch (err: any) {
    return NextResponse.json(
      {
        success: false,
        message: err.message,
      },
      { status: 500 }
    );
  }
}
