import { ReactNode } from "react";
import "../globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Canny Management: Premier Manpower Services in India",
  description:
    "Canny Management specializes in providing a wide range of Manpower Services, including Labor Manpower Services and Construction Workers Manpower Services. We operate throughout India, with a particular focus on Gujarat, Ahmedabad, Vadodara, Baroda, Gandhidham, Porbander, Odisha, Tamil Nadu, Karnataka, and West Bengal.",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
