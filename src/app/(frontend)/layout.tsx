import { ReactNode } from "react";
import "../globals.css";
import { Inter } from "next/font/google";
import { siteConfig } from "@/sanity/config/site";
import { MainNav } from "@/components/navbar/main-nav";
import Wrapper from "@/components/wrapper";

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
}: {
  children: ReactNode;
}) {


  return (
    <Wrapper>
      <html>
        <body className={inter.className}>
          <MainNav />
          {children}
        </body>
      </html>
    </Wrapper>
  );
}
