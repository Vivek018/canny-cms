import { i18n } from "@/utils/language";
import { NextRequest, NextResponse } from "next/server";
import { Lang } from "./types";

export let defaultLocale = i18n.base;

export function middleware(request: NextRequest) {
  let pathname = request.nextUrl.pathname;
  const langRegex = new RegExp(/\/(en|hi|gu)/g);
  const langMatches = pathname.match(langRegex)!;
  let locale: Lang = undefined;

  if (langMatches?.length > 1) {
    pathname = pathname.replace(langRegex, "");
    locale = langMatches?.pop() as Lang;
  } else {
    pathname = request.nextUrl.pathname;
  }

  if (locale) {
    return NextResponse.redirect(new URL(`${locale}/${pathname}`, request.url));
  }
}

export const config = {
  matcher: ["/((?!_next).*)"],
};
