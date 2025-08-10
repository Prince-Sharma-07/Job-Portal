import prismaClient from "@/services/prisma";
import { NextRequest, NextResponse } from "next/server";

type Param = Promise<{
  id : string
}>

export async function GET(req: NextRequest, { params } : {params : Param}) {
  const {id} = await params;
  try {
    const reviews = await prismaClient.review.findMany({
      where: {
        company_id: id,
      },
    });
    return NextResponse.json({
      success: true,
      data: reviews,
    });
  } catch (err : any) {
    return NextResponse.json({
      success: false,
      message: err.message,
    });
  }
}
