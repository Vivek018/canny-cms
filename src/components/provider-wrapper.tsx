import { setLocale } from "@/context/language-context";
import { Lang } from "@/types";
import { ReactNode } from "react";

export function ProviderWrapper({
  children,
  lang,
}: {
  children: ReactNode;
  lang: Lang;
}) {
  setLocale(lang);
  return <>{children}</>;
}
