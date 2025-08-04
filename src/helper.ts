//@ts-nocheck
import { cookies } from "next/headers";
import { verifyToken } from "./services/jwt";
import prismaClient from "./services/prisma";

export default async function getCurrUser() {
  const cookie = await cookies();
  const token = cookie.get("token")?.value;
  if (!token) return null;

  const data = verifyToken(token);
  if (!data) return null;

  const user = prismaClient.user.findUnique({
    where: {
      id: data?.id,
    },
    include: {
      company: true,
    }, //relations ko vo khudse include nahi krega isiliye hame include krna pdega , similarly company ko findUnique krte hue owner of include true kr sakte hai
    omit: {
      password: true,
    },
  });

  if (!user) return null;

  return user;
}
