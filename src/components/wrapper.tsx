"use client";

import { LanguageProvider } from "@/context/language";
import { ReactNode } from "react";

export default function Wrapper({ children }: { children: ReactNode }) {
  return <LanguageProvider>{children}</LanguageProvider>;
}
