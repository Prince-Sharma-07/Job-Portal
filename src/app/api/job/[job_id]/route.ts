import getCurrUser from "@/helper";
import prismaClient from "@/services/prisma";
import { NextRequest, NextResponse } from "next/server";

type Param = Promise<{
  job_id: string;
}>;

export async function GET(req: NextRequest, { params }: { params: Param }) {
  const { job_id } = await params;

  const user = await getCurrUser();

  try {
    const job = await prismaClient.job.findUnique({
      where: {
        id: job_id,
      },
      include: {
        company: true,
      },
    });

    //check if user has applied or not

    return NextResponse.json({
      success: true,
      data: job,
    });
  } catch (err: any) {
    return NextResponse.json({
      success: false,
      message: err.message,
    });
  }
}

export async function DELETE(req: NextRequest, { params }: { params: Param }) {
  try {
    const { job_id } = await params;
    const res = await prismaClient.job.delete({
      where: {
        id: job_id,
      },
    });
    return NextResponse.json({
      success: true,
      message: "User deleted successfully",
    });
  } catch (err: any) {
    return NextResponse.json({
      success: false,
      message: err.message,
    });
  }
}

export async function POST(req: NextRequest, { params }: { params: Param }) {
  const { job_id } = await params;
  const body = await req.json();

  try {
    const res = await prismaClient.job.update({
      where: {
        id: job_id,
      },
      data: body,
    });
    return NextResponse.json({
      success: true,
      message: "Job updated successfully",
    });
  } catch (err: any) {
    return NextResponse.json({
      message: err.message,
    });
  }
}
