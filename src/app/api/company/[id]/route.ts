import getCurrUser from "@/helper";
import prismaClient from "@/services/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = params.id;
  try {
    const company = await prismaClient.company.findUnique({
      where: {
        id: id,
      },
      include: {
        owner: {
          // true hona tha yaha pr hi but password bhi omit krna hai isiliye esa kiya...
          omit: {
            password: true,
          },
        },
      },
    });

    return NextResponse.json({
      success: true,
      data: company,
    });
  } catch (err) {
    return NextResponse.json({
      success: false,
    });
  }
}

export async function DELETE(
  req: NextResponse,
  { params }: { params: {id: string }}
) {
  const id = params.id;
  const user = await getCurrUser();
  
  if (user?.company?.id == id) {
    await prismaClient.company.delete({
      where: {
        id,
      },
    });
    return NextResponse.json({
      success: true,
      message: "User deleted successfully",
    });
  } else {
    return NextResponse.json({
      success: false,
      message: "Something went wrong",
    });
  }
}
