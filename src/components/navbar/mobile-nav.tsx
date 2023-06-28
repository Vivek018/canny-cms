"use client";

import { Lang, Page } from "@/types";
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
  lang: Lang;
  children?: ReactNode;
};

export function MobileNav({ items, lang }: Props) {
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
          <MobileNavDropdownMenuItem key={item._id} lang={lang} item={item} />
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

const MobileNavDropdownMenuItem = ({
  lang,
  item,
}: {
  lang: Lang;
  item: Page;
}) => {
  const url = `/${lang}/${item.slug}`;
  return (
    <DropdownMenuItem key={item._id}>
      <Link href={url}>{item.title}</Link>
    </DropdownMenuItem>
  );
};
