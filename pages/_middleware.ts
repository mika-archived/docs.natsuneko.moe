import { NextRequest, NextResponse } from "next/server";

const PUBLIC_FILE = /\.(.*)$/;

const middleware: (request: NextRequest) => NextResponse | undefined = (
  request: NextRequest
) => {
  const shouldHandleLocale =
    !PUBLIC_FILE.test(request.nextUrl.pathname) &&
    !request.nextUrl.pathname.includes("/api/") &&
    request.nextUrl.locale === "default";

  return shouldHandleLocale
    ? NextResponse.redirect(
        new URL(`/ja-JP/${request.nextUrl.pathname}`, request.url)
      )
    : NextResponse.next();
};

export default middleware;
