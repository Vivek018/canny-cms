import { ReactNode } from "react";
import { Nav } from "./navbar/nav";
import { Footer } from "./footer";
import { Lang } from "@/types";

type Props = {
  children?: ReactNode;
};

export default function ComponentWrapper({ children }: Props) {
  return (
    <>
      <Nav />
      {children}
      <Footer />
    </>
  );
}
