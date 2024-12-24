import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/auth";

export async function middleware(request: NextRequest) {
    if (request.nextUrl.pathname.startsWith("/admin/") && (await auth()) === null) {
        return NextResponse.redirect(new URL("/admin?redirected", request.url));
    }
    return NextResponse.next();
}

export const config = {
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)"],
};
