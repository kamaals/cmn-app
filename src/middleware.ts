import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  const userCookie = req.cookies.get("user");
  if (userCookie) {
    try {
      const user = JSON.parse(userCookie.value);
      console.log(user);
      return NextResponse.next();
    } catch (e) {
      console.log(e);
      return NextResponse.redirect(new URL("/login", req.url));
    }
  } else {
    return NextResponse.redirect(new URL("/login", req.url));
  }
}
export const config = {
  matcher: ["/"],
};
