import { Page } from "@/types";
import { ReactNode } from "react";

type Props = {
  items: Page[];
  children?: ReactNode;
};

export function Nav({ items, children }: Props) {

  return (
    <>
      <div>nav</div>
    </>
  );
}
