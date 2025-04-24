import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  // Check if the pathname already has a locale
  const pathnameHasLocale = /^\/[a-z]{2}(\/|$)/.test(pathname)

  if (pathnameHasLocale) return NextResponse.next()

  // Redirect to the default locale (English)
  return NextResponse.redirect(new URL(`/en${pathname}`, request.url))
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    // Skip all internal paths (_next)
    "/((?!_next|api|favicon.ico).*)",
  ],
}
