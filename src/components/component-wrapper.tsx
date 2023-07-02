import { ReactNode } from "react";
import { Nav } from "./navbar/nav";
import { Footer } from "./footer";

type Props = {
  children?: ReactNode;
};

export function ComponentWrapper({ children }: Props) {
  return (
    <section className='flex flex-col mx-6 md:mx-10 overflow-hidden'>
      <Nav />
      <section className='my-6'>{children}</section>
      <Footer />
    </section>
  );
}
