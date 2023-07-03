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
  const url = item.slug ? `/${lang}/${item.slug}` : `/${lang}`;
  return (
    <Link
      href={url}
      className={cn(
        "flex-auto border-[1px] border-neutral-shadow shadow-sm border-r-0 last:border-r-2 px-4 py-2 first:rounded-l-full last:rounded-r-full cursor-pointer hover:bg-neutral-primary transition duration-200",
        pathname === url &&
          "bg-neutral-shadow hover:bg-neutral-shadow text-primary shadow-inner cursor-auto"
      )}
    >
      <nav>{item.title}</nav>
    </Link>
  );
};
