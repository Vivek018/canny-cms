import { useLockBody } from "@/hooks/useLockBody";
import { Page, } from "@/types";
import { ReactNode } from "react";

type Props = {
  items: Page[];
  children?: ReactNode;
};

export function MobileNav({ items, children }: Props) {
  useLockBody();

  return (
    <>
      <div>mobile-nav</div>
    </>
  );
}
