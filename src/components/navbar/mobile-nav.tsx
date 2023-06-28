"use client";

import { Page } from "@/types";
import { ReactNode } from "react";
import {
  DropdownMenuItem,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/Dropdown";
import { Icons } from "../icons";
import { usePathname } from "next/navigation";
import Link from "next/link";

type Props = {
  items: Page[];
  children?: ReactNode;
};

export function MobileNav({ items }: Props) {
  const pathname = usePathname();
  const itemArray = items.filter((item) => item.slug !== pathname.substring(1));

  return (
    <DropdownMenu key={pathname}>
      <DropdownMenuTrigger asChild>
        <button className='flex md:hidden'>
          <Icons.menu />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='mr-4'>
        <DropdownMenuSeparator />
        {itemArray.map((item) => (
          <DropdownMenuItem key={item._id}>
            <Link href={item.slug}>{item.title}</Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
