import { ReactNode } from "react";
import "../globals.css";
import { Inter } from "next/font/google";
import { siteConfig } from "@/constants/site";
import { Lang } from "@/types";
import { setLocale } from "@/context/language-context";
import { ProviderWrapper } from "./_components/ProviderWrapper";
import { ComponentWrapper } from "./_components/ComponentWrapper";

const inter = Inter({ subsets: ["latin"], preload: true });

export const metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  keywords: [
    "Skilled Labour services",
    "Semi skilled Labour services",
    "Unskilled Labour services",
    "Labour agency",
    "Labour agency in Ahmedabad",
    "Labour agency in Gujarat",
    "Labour agency in India",
    "Manpower services",
    "Manpower agency",
    "Manpower agency in Ahmedabad",
    "Manpower agency in Gujarat",
    "Manpower agency in India",
  ],
  icons: {
    icon: "canny.png",
  },
};

export default function RootLayout({
  children,
  params: { lang },
}: {
  children: ReactNode;
  params: { lang: Lang };
}) {
  setLocale(lang);
  return (
    <ProviderWrapper>
      <html className='max-w-[1400px] min-w-[250px] mx-auto'>
        <body className={inter.className}>
          <ComponentWrapper>{children}</ComponentWrapper>
        </body>
      </html>
    </ProviderWrapper>
  );
}
