import { NextRequest, NextResponse } from "next/server";

export default function middleware(req : NextRequest) { 
  const user = req.cookies.get("token")?.value;
  const pathName = req.nextUrl.pathname;
  const protectedPaths = ["/saved", "/jobs" , "/add-company" , "/company"];

  if (protectedPaths.includes(pathName)) {
    if (!user) {
      return NextResponse.redirect("http://localhost:3000/login");
    } else if (pathName === "/login" || pathName === "/signup") {
      return NextResponse.redirect("http://localhost:3000/");
    }
  }
  return NextResponse.next();
}
