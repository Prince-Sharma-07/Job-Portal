//@ts-nocheck
import prismaClient from "@/services/prisma";
import { NextResponse } from "next/server";

export async function GET() {

  try {
    const recentJobs = await prismaClient.addJob.findMany({
      take: 5,
    });
    return NextResponse.json({
      success: true,
      data: recentJobs,
    });
  } catch (err) {
    return NextResponse.json({
      success: false,
      message: err.message,
    });
  }
}
