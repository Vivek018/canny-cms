"use client";

import { Lang, Page } from "@/types";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

type Props = {
  items: Page[];
  className: string;
  lang: Lang;
};

export function DesktopNav({ items, className, lang }: Props) {
  return (
    <div className={cn("hidden md:flex mx-auto text-[15px]", className)}>
      {items.map((item) => (
        <DesktopNavItem key={item._id} item={item} lang={lang} />
      ))}
    </div>
  );
}

const DesktopNavItem = ({ item, lang }: { item: Page; lang: Lang }) => {
  const pathname = usePathname();
  const url = item.slug ? `/${lang}/${item.slug}` : `/${lang}`;
  return (
    <Link
      href={url}
      className={cn(
        "flex-auto md:px-3 md:mx-2 lg:px-4 lg:mx-4 py-2 cursor-pointer transition duration-200 hover:text-primary",
        pathname === url &&
          " bg-primary hover:text-white text-white rounded-md shadow-md cursor-auto"
      )}
    >
      <nav>{item.title}</nav>
    </Link>
  );
};
