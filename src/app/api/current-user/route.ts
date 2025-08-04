import getCurrUser from "@/helper";
import { NextResponse } from "next/server";

export async function GET() {
  const user = await getCurrUser();

  if (!user)
    return NextResponse.json({
      success: false,
      message: "User not found",
    });

  return NextResponse.json({
    success: true,
    data: user,
  });
}
