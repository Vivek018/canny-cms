import { ReactNode } from "react";
import { Nav } from "./navbar/nav";
import { Footer } from "./footer";

type Props = {
  children?: ReactNode;
};

export function ComponentWrapper({ children }: Props) {
  return (
    <main className='flex flex-col'>
      <Nav />
      {children}
      <Footer />
    </main>
  );
}
