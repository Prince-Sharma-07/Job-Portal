import getCurrUser from "@/helper";
import prismaClient from "@/services/prisma";
import { NextRequest, NextResponse } from "next/server";

type Param = Promise<{
  id: string;
}>;

export async function GET(req: NextRequest, { params }: { params: Param }) {
  const user = await getCurrUser();
  const { id } = await params;
  if (!user) {
    return NextResponse.json({
      success: false,
      message: "User is not authenticated",
    });
  }

  const applyToSave = {
    user_id: user?.id,
    job_id: id,
  };

  try {
    const res = await prismaClient.application.create({
      data: applyToSave,
    });
    return NextResponse.json({
      success: true,
      message: "Applied Successfully!",
    });
  } catch (err : any) {
    return NextResponse.json({
      success: false,
      message: err.message,
    });
  }
}
