import prismaClient from "@/services/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const job_id = params?.id;

  try {
    const res = await prismaClient.application.findMany({
      where: {
        job_id: job_id,
      },
      include: {
        user: true,
      },
    });
    return NextResponse.json({
      success: true,
      data: res,
    });
  } catch (err: any) {
    return NextResponse.json({
      success: false,
      message: err.message,
    });
  }
}

export async function DELETE(req: NextRequest, { params }) {
  const id = params.id;
  try {
    const res = await prismaClient.application.delete({
      where: {
        id: id,
      },
    });
    return sendCustomResp(true, {
      message: "Application deleted successfully",
    });
  } catch (err) {
    return sendCustomResp(false, { message: "Something Went wrong" });
  }
}

function sendCustomResp(success: boolean, data: any) {
  return NextResponse.json({
    success,
    data,
  });
}
