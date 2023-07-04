import { ReactNode } from "react";
import "../globals.css";
import { Inter } from "next/font/google";
import { siteConfig } from "@/constants";
import { Lang, i18nLanguageType } from "@/types";
import { setLocale } from "@/context/language-context";
import { ProviderWrapper } from "./_components/ProviderWrapper";
import { ComponentWrapper } from "./_components/ComponentWrapper";
import { i18n } from "@/utils/language";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"], preload: true });

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  icons: siteConfig.icons,
};

export default function RootLayout({
  children,
  params: { lang },
}: {
  children: ReactNode;
  params: { lang: Lang };
}) {
  const langExist = i18n.languages.filter((val) => val.id === lang);
  if (langExist.length) setLocale(lang);
  else setLocale(i18n.base);
  return (
    <ProviderWrapper>
      <html className='max-w-[1700px] min-w-[250px] mx-auto'>
        <body className={` ${inter.className}`}>
          <ComponentWrapper>{children}</ComponentWrapper>
        </body>
      </html>
    </ProviderWrapper>
  );
}
