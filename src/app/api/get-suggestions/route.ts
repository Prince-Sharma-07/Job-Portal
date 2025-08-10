import prismaClient from "@/services/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  if (!body)
    return NextResponse.json({
      data: [],
    });

  try {
    const suggestions = await prismaClient.job.findMany({
      where: {
        job_title: {
          contains: body,
          mode: "insensitive",
        },
      },
      select: {
        id: true,
        job_title: true,
      },
    });
    return NextResponse.json({
      success: true,
      data: suggestions,
    });
  } catch (err: any) {
    return NextResponse.json({
      success: false,
      message: err.message,
    });
  }
}
