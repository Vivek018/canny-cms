import { ReactNode } from "react";
import { Nav } from "./navbar/Nav";
import { Footer } from "./Footer";

type Props = {
  children?: ReactNode;
};

export function ComponentWrapper({ children }: Props) {
  return (
    <>
      <Nav />
      <div className='flex justify-between flex-col mx-6 md:mx-10 overflow-hidden my-28'>
        <div className='my-6 relative'>{children}</div>
        <Footer />
      </div>
    </>
  );
}
