"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/Dropdown";
import { cn } from "@/utils/cn";
import { i18n } from "@/utils/language";
import { Icons } from "../icons";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  commonStyles: string;
  lang: string | string[] | undefined;
};

export function LangDropdown({ commonStyles, lang }: Props) {
  const pathname = usePathname();
  const language = lang ? lang : "en";
  const langArray = i18n.languages.filter((lang) => lang.id !== language);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div
          className={cn(
            commonStyles,
            `order-3 p-2 rounded-sm md:mr-6 cursor-pointer hover:bg-neutral-shadow transition duration-200`
          )}
        >
          <Icons.lang />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-28 mr-4'>
        <DropdownMenuLabel>Languages</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {langArray.map((lang) => (
          <Link key={lang.id} href={`${pathname}/${lang.id}`} replace={false}>
            <DropdownMenuItem>{lang.title}</DropdownMenuItem>
          </Link>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
