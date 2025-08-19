import prismaClient from "@/services/prisma";
import { NextRequest, NextResponse } from "next/server";

type Param = Promise<{
  id: string;
}>;

export async function GET(req: NextRequest, { params }: { params: Param }) {
  const p = await params;
  const job_id = p.id;

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

export async function DELETE(req: NextRequest, { params }: { params: Param }) {
  const {id} = await params;

  try {
    const res = await prismaClient.application.delete({
      where : {
        id : id
      }
    });
    return sendCustomResp(true, {
      message: "Application deleted successfully",
    });
  } catch (err : any) {
    return sendCustomResp(false, { message: err.message});
  }
}

function sendCustomResp(success: boolean, data: any) {
  return NextResponse.json({
    success,
    data,
  });
}
