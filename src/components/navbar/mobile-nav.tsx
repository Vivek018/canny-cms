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
import { cn } from "@/utils/cn";

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
      <DropdownMenuContent className='ml-2'>
        <DropdownMenuSeparator />
        {itemArray.map((item) => (
          <MobileNavDropdownMenuItem
            key={item._id}
            lang={lang}
            item={item}
            pathname={pathname}
          />
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

const MobileNavDropdownMenuItem = ({
  lang,
  item,
  pathname,
}: {
  lang: Lang;
  item: Page;
  pathname: string;
}) => {
  const url = `/${lang}/${item.slug}`;
  return (
    <Link key={lang} href={url}>
      <DropdownMenuItem
        key={item._id}
        className={cn(
          "my-2",
          pathname === url ? "hover:bg-white cursor-auto" : null
        )}
      >
        {item.title}
      </DropdownMenuItem>
    </Link>
  );
};
