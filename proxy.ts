import { NextResponse, type NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  return NextResponse.redirect(new URL("/es", request.url), 308);
}

export const config = {
  matcher: ["/"],
};
