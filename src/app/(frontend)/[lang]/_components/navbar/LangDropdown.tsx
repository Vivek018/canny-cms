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
  const pathname = usePathname();

  const language = lang ? lang : "en";
  const langArray = i18n.languages.filter((lang) => lang.id !== language);

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
          <Link key={lang.id} href={`${pathname}/${lang.id}`} replace={false}>
            <DropdownMenuItem>{lang.title}</DropdownMenuItem>
          </Link>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
