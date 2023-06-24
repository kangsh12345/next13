import { NextRequest, NextResponse } from "next/server"

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith("/dashboard")) {
    return NextResponse.rewrite(new URL("/dashboard/1", request.url))
  }
  if (request.nextUrl.pathname.startsWith("/login")) {
    return NextResponse.redirect(new URL("/", request.url))
  }
}

export const config = {
  matcher: "/((?!api|_next/static|_next/image|favicon.ico).*)",
}
