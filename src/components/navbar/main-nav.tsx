"use client";

import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import { Page } from "@/types";
import { MobileNav } from "./mobile-nav";
import { useEffect, useState } from "react";
import { Icons } from "../icons";
import Image from "next/image";
import CannyLogo from "@/assets/images/canny.png";
import {
  DropdownMenuItem,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/Dropdown";
import { i18n } from "@/utils/language";
import { cn } from "@/utils/cn";
import { useLanguage } from "@/context/language";
import { getPages } from "@/sanity/config/pages";
import { Nav } from "./nav";

interface MainNavProps {
  children?: React.ReactNode;
}

const commonStyles = "flex p-2 items-center space-x-2";

export function MainNav({ children }: MainNavProps) {
  const segment = useSelectedLayoutSegment();
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);
  const { lang } = useLanguage();
  const [navItems, setNavItems] = useState<Page[]>([]);

  useEffect(() => {
    getPages(lang).then((pages) => setNavItems(pages));
    return () => {};
  }, [lang]);

  return (
    <div className='flex gap-6 px-4 h-24 md:px-8 md:mx-4 md:my-2 items-center justify-between'>
      <button
        className={cn(commonStyles, "md:hidden")}
        onClick={() => setShowMobileMenu(!showMobileMenu)}
      >
        {showMobileMenu ? <Icons.close /> : <Icons.menu />}
      </button>
      {navItems ? (
        showMobileMenu ? (
          <MobileNav items={navItems} />
        ) : (
          <Nav items={navItems} />
        )
      ) : null}
      <Link href='/' className={cn(commonStyles, `w-28 md:w-32`)}>
        <Image
          src={CannyLogo}
          alt='Canny Logo'
          property='true'
          className='object-contain m-0 p-0'
        />
      </Link>
      <Dropdown commonStyles={commonStyles} />
    </div>
  );
}

export const Dropdown = ({ commonStyles }: { commonStyles: string }) => {
  const { lang, changeLang } = useLanguage();
  const langArray = i18n.languages.filter((language) => language.id !== lang);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div
          className={cn(
            commonStyles,
            `p-2 rounded-sm md:mr-8 cursor-pointer hover:bg-neutral-shadow transition duration-200`
          )}
        >
          <Icons.lang />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-28 mr-4'>
        <DropdownMenuLabel>Languages</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {langArray.map((lang) => (
          <DropdownMenuItem key={lang.id} onClick={() => changeLang(lang.id)}>
            <span>{lang.title}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
