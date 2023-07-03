"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/common/ui/Dropdown";
import { cn } from "@/utils/cn";
import { i18n } from "@/utils/language";
import { Icons } from "@/common/Icons";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/common/ui/Button";

type Props = {
  commonStyles: string;
  lang: string | string[] | undefined;
};

export function LangDropdown({ commonStyles, lang }: Props) {
  let pathname = usePathname();

  const language = lang ? lang : "en";
  const langArray = i18n.languages.filter((lang) => lang.id !== language);

  const langRegex = new RegExp(/\/(en|hi|gu)/g);
  const path = pathname.replace(langRegex, "");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant='icon'
          size='icon'
          className={cn(commonStyles, `order-3`)}
        >
          <Icons.lang />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-28 mr-4'>
        <DropdownMenuLabel>Languages</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {langArray.map((lang) => (
          <Link key={lang.id} href={`/${lang.id}${path}`}>
            <DropdownMenuItem>{lang.title}</DropdownMenuItem>
          </Link>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
