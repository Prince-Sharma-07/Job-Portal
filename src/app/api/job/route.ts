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
  const page = parseInt(urlObj.searchParams.get("pg") || "1", 10);
  const limit = parseInt(urlObj.searchParams.get("lim") || "10", 10);
  const skip = (page - 1) * limit;

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

  if (jobType) where.job_type = jobType;
  if (empType) where.employment_type = empType;
  if (salary) {
    where.job_salary = {
      gte: parseFloat(salary),
    };
  }

  try {
    const [jobs, totalCount] = await Promise.all([
      prismaClient.job.findMany({
        where,
        include: {
          company: {
            include: {
              owner: true,
            },
          },
        },
        skip,
        take: limit,
        orderBy: { id: "desc" },
      }),
      prismaClient.job.count({ where }),
    ]);
    return NextResponse.json({
      success: true,
      data: jobs,
      totalCount,
      totalPages: Math.ceil(totalCount / limit),
      currentPage: page,
    });
  } catch (err: any) {
    return NextResponse.json({
      success: false,
      message: err.message,
    });
  }
}
