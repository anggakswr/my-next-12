import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const sGetCookie = (key: string) => req.cookies.get(key);
  const bIsPage = (url: string) => req.url.includes(url);
  const sGetUrlSearchParams = (key: string) => {
    const sString = req.nextUrl.searchParams.get(key);

    if (sString && sString !== "null" && sString !== "undefined") {
      return sString;
    }

    return "";
  };

  const sToken = sGetUrlSearchParams("token") || sGetCookie("sPIT");

  if (bIsPage("/login")) {
    // if (sToken) {
    //   return NextResponse.redirect(new URL("/", req.url));
    // }
  } else if (bIsPage("/register")) {
    // const bIsRegistered =
    //   sGetUrlSearchParams("isRegistered") ?? sGetCookie("bIsRegistered");
    const bIsRegistered = sGetCookie("bIsRegistered");

    if (bIsRegistered === "true") {
      return NextResponse.redirect(new URL("/", req.url));
    }
  } else {
    // if (!sToken) {
    //   return NextResponse.redirect(new URL("/login", req.url));
    // }
  }
}

// export const config = {
//   matcher: [
//     /*
//      * Match all request paths except for the ones starting with:
//      * - api (API routes)
//      * - static (static files)
//      * - favicon.ico (favicon file)
//      */
//     "/((?!api|static|img|icon|favicon.ico).*)",
//   ],
// };

export const config = {
  matcher: [
    "/",
    // "/class/:path*",
    // "/membership/:path*",
    // "/point/:path*",
    // "/quiz/:path*",
    // "/about",
    // "/",
    // "/login",
    // "/register",
  ],
};
