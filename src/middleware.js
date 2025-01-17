import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse } from "next/server";

export async function middleware(req) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient({ req, res });

  try {
    await supabase.auth.getSession();

    const token = req.cookies.get("sb-access-token")?.value;

    const isAuthenticated = !!token;

    if (
      !isAuthenticated &&
      !req.nextUrl.pathname.match(
        /^\/(?:$|login|register|_next|favicon\.ico)/
      ) &&
      !req.nextUrl.pathname.startsWith("/api")
    ) {
      return NextResponse.redirect(new URL("/login", req.url));
    }

    if (
      isAuthenticated &&
      req.nextUrl.pathname.match(/^\/(?:$|login|register)$/)
    ) {
      return NextResponse.redirect(new URL("/snippets", req.url));
    }

    return res;
  } catch (error) {
    return res;
  }
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:jpg|jpeg|gif|png|svg|ico)$).*)",
  ],
};
