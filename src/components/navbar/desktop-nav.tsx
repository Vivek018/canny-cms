"use client";

import { Lang, Page } from "@/types";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  items: Page[];
  className: string;
  lang: Lang;
};

export function DesktopNav({ items, className, lang }: Props) {
  return (
    <div className={cn("hidden md:flex mx-auto text-sm", className)}>
      {items.map((item) => (
        <DesktopNavItem key={item._id} item={item} lang={lang} />
      ))}
    </div>
  );
}

const DesktopNavItem = ({ item, lang }: { item: Page; lang: Lang }) => {
  const pathname = usePathname();
  const url = `/${lang}/${item.slug}`;
  return (
    <Link
      href={url}
      className={cn(
        "flex-auto border-[1px] border-neutral-shadow shadow-md border-r-0 last:border-r-2 px-4 py-2 first:rounded-l-full last:rounded-r-full cursor-pointer hover:text-primary transition duration-200",
        pathname === url && "bg-neutral-primary text-primary shadow-inner"
      )}
    >
      <nav>{item.title}</nav>
    </Link>
  );
};
