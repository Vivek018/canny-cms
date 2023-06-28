import { ReactNode } from "react";
import "../../globals.css";
import { Inter } from "next/font/google";
import { siteConfig } from "@/sanity/config/site";
import Wrapper from "@/components/wrapper";
import ComponentWrapper from "@/components/componentWrapper";
import { Lang } from "@/types";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  keywords: [
    "Labour services",
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
    icon: "/canny.png",
  },
};

export default function RootLayout({
  children,
  params: { lang },
}: {
  children: ReactNode;
  params: { lang: Lang };
}) {
  return (
    <Wrapper lang={lang}>
      <html className='max-w-[1500px] h-screen mx-auto'>
        <body className={inter.className}>
          <ComponentWrapper>{children}</ComponentWrapper>
        </body>
      </html>
    </Wrapper>
  );
}
