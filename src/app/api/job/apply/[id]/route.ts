//@ts-nocheck
import getCurrUser from "@/helper";
import prismaClient from "@/services/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, { params }) {
  const user = await getCurrUser();
  const job_id = params.id;
  if (!user) {
    return NextResponse.json({
      success: false,
      message: "User is not authenticated",
    });
  }

  const applyToSave = {
    user_id: user?.id,
    job_id: job_id,
  };

  try {
    const res = await prismaClient.application.create({
      data: applyToSave,
    });
    return NextResponse.json({
      success: true,
      message: "Applied Successfully!",
    });
  } catch (err) {
    return NextResponse.json({
      success: false,
      message: err.message,
    });
  }
}
