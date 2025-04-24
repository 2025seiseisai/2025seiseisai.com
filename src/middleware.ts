import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
    const { pathname, origin, search } = request.nextUrl;
    if (pathname.startsWith("/2025")) {
        return NextResponse.redirect(new URL(pathname.substring(5) + search, origin));
    }
    return NextResponse.next();
}
