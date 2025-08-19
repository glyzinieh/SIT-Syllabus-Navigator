import { cookies } from "next/headers";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  const url = request.nextUrl;

  if (url.pathname.startsWith("/select")) {
    return NextResponse.next();
  }

  const cookieStore = await cookies();

  const admissionYear = cookieStore.get("admissionYear");
  const departmentCode = cookieStore.get("departmentCode");

  if (!admissionYear || !departmentCode) {
    return NextResponse.redirect(new URL("/select", request.url));
  }
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - select (select page)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|select).*)",
  ],
};
