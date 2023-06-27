import { NextRequest, NextResponse } from "next/server"

export function middleware(request: NextRequest) {
  // if (request.nextUrl.pathname.startsWith("/dashboard")) {
  //   return NextResponse.rewrite(new URL("/dashboard/1", request.url))
  // }
  // if (request.nextUrl.pathname.startsWith("/login")) {
  //   return NextResponse.redirect(new URL("/", request.url))
  // }

  const cookie = request.cookies.get("nextjs")?.value
  const allCookies = request.cookies.getAll()

  // console.log(`cookie: ${cookie}`)
  // console.log(`allCookies: ${allCookies}`)

  const newRequestHeaders = new Headers(request.headers)
  newRequestHeaders.set("some-thing", "something from headers")
  newRequestHeaders.set("request-time", new Date().getTime().toString())

  const response = NextResponse.next({
    request: {
      headers: newRequestHeaders,
    },
  })

  return response
}

export const config = {
  matcher: "/((?!api|_next/static|_next/image|favicon.ico).*)",
}
