import { setLocale } from "@/context/language-context";
import { Lang } from "@/types";
import { ReactNode } from "react";

export default function Wrapper({
  children,
  lang,
}: {
  children: ReactNode;
  lang: Lang;
}) {
  setLocale(lang);
  return <>{children}</>;
}
