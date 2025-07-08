import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest): NextResponse {
    const { pathname, origin, search } = request.nextUrl;
    if (!pathname.startsWith("/2025")) {
        return NextResponse.rewrite(new URL("/2025" + pathname + search, origin));
    }
    return NextResponse.next();
}
