import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // Log the current request pathname 
  const headers = new Headers(request.headers);  
  console.log("Current path:", request.nextUrl.pathname);
  headers.set("x-current-path", request.nextUrl.pathname);  
  
  return NextResponse.next({headers});
}

export const config = {
    matcher: [
      // match all routes except static files and APIs
      "/((?!api|_next/static|_next/image|favicon.ico|img/|js/).*)",
    ],
  };