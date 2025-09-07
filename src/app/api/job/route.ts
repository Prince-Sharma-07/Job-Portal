import getCurrUser from "@/helper";
import prismaClient from "@/services/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const user = await getCurrUser();

  const dataToSave = {
    ...body,
    company_id: user?.company?.id,
  };

  try {
    const job = await prismaClient.job.create({
      data: dataToSave,
    });
    return NextResponse.json({
      success: true,
      message: "Job Added Successfully!",
      data: job,
    });
  } catch (err: any) {
    return NextResponse.json({
      success: false,
      message: err.message,
    });
  }
}

export async function GET(req: NextRequest) {
  const url = req.url;
  const urlObj = new URL(url);
  const query = urlObj.searchParams.get("q") || "";
  const jobType = urlObj.searchParams.get("jt") || "";
  const empType = urlObj.searchParams.get("et") || "";
  const salary = urlObj.searchParams.get("sr") || "";

  const where: any = {
    OR: [
      {
        job_title: {
          contains: query,
          mode: "insensitive",
        },
      },
      {
        company: {
          companyName: {
            contains: query,
            mode: "insensitive",
          },
        },
      },
    ],
  };

  if (jobType) {
    where.job_type = jobType;
  }
  
  if (empType) {
    where.employment_type = empType;
  }

  if (salary) {
    where.job_salary = {
      gte: parseFloat(salary),
    };
  }

  try {
    const jobs = await prismaClient.job.findMany({
      where: where,
      include: {
        company: {
          include: {
            owner: true,
          },
        },
      },
    });
    return NextResponse.json({
      success: true,
      data: jobs,
    });
  } catch (err: any) {
    return NextResponse.json({
      success: false,
      message: err.message,
    });
  }
}
