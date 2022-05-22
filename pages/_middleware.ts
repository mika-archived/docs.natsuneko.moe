import { NextRequest, NextResponse } from "next/server";

const PUBLIC_FILE = /\.(.*)$/;

const LOCALE_MAP = {
  "ja-jp": "ja-JP",
  "en-us": "en-US",
};

const middleware: (request: NextRequest) => NextResponse | undefined = (
  request: NextRequest
) => {
  const shouldHandleLocale =
    (!PUBLIC_FILE.test(request.nextUrl.pathname) &&
      !request.nextUrl.pathname.includes("/api/") &&
      request.nextUrl.locale === "default") ||
    !!LOCALE_MAP[request.nextUrl.locale];

  const locale = LOCALE_MAP[request.nextUrl.locale.toLowerCase()] ?? "en-US";

  return shouldHandleLocale
    ? NextResponse.redirect(
        new URL(`/${locale}/${request.nextUrl.pathname}`, request.url)
      )
    : NextResponse.next();
};

export default middleware;
