import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/auth";

export async function middleware(request: NextRequest) {
    if (!request.nextUrl.pathname.startsWith("/admin") && process.env.NODE_ENV === "production" && (await auth()) === null) {
        return NextResponse.rewrite(new URL("/coming-soon", request.url));
    }
    return NextResponse.next();
}

export const config = {
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)"],
};
