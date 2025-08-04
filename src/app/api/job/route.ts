//@ts-nocheck
import prismaClient from "@/services/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  try {
    const job = await prismaClient.addJob.create({
      data: body,
    });
    return NextResponse.json({
      success: true,
      message: "Job Added Successfully!",
      data: job,
    });
  } catch (err) {
    return NextResponse.json({
      success: false,
      message: err.message,
    });
  }
}

export async function GET(req: NextRequest) {
  const url = req.url; //<---  http://localhost:3000/search?q=Prince&&jobType=Full-Time
  const urlObj = new URL(url);
  const query = urlObj.searchParams.get("q") || "";
  const jobType = urlObj.searchParams.get("jt") || "On site";
  const empType = urlObj.searchParams.get("et") || "Full-Time";
  const salary = urlObj.searchParams.get("sr") ? parseFloat(urlObj.searchParams.get("sr")) : 0;

  try {
    const jobs = await prismaClient.addJob.findMany({
      where: {
        job_title: {
          contains: query,
          mode: "insensitive",
        },
        job_type: jobType,
        employment_type: empType,
        job_salary: {
          gte: salary,
        },
      },
    });
    return NextResponse.json({
      success: true,
      data: jobs,
    });
  } catch (err) {
    return NextResponse.json({
      success: false,
      message: err.message,
    });
  }
}
