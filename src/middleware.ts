import { i18n } from "@/utils/language";
import { NextRequest, NextResponse } from "next/server";

export let defaultLocale = i18n.base;

export function middleware(request: NextRequest) {
  let pathname = request.nextUrl.pathname;
  const langRegex = new RegExp(/\/(en|hi|gu)/g);
  const langMatches = pathname.match(langRegex)!;
  let locale: string | undefined = undefined;

  if (langMatches?.length > 1) {
    pathname = pathname.replace(langRegex, "");
    locale = langMatches?.pop();
  } else {
    pathname = request.nextUrl.pathname;
  }

  if (locale) {
    return NextResponse.redirect(new URL(`${locale}/${pathname}`, request.url));
  }
}

export const config = {
  matcher: [
    "/((?!_next).*)",
  ],
};
