import Link from "next/link";
import { Lang } from "@/types";
import { MobileNav } from "./MobileNav";
import Image from "next/image";
import CannyLogo from "@/assets/images/canny.png";
import { cn } from "@/utils/cn";
import { getPages } from "@/sanity/config/pages";
import { DesktopNav } from "./DesktopNav";
import { LangDropdown } from "./LangDropdown";
import { getLocale } from "@/context/language-context";

interface MainNavProps {
  children?: React.ReactNode;
}

const commonStyles = "flex p-2 items-center space-x-2";

export async function Nav({}: MainNavProps) {
  const locale = getLocale();
  const navItems = await getPages(locale as unknown as Lang);
  return (
    <section className='flex w-full max-w-[1700px] md:pt-4 px-6 md:px-10 h-28 gap-2 items-center justify-between border-b-[1px] fixed top-0 bg-white border-neutral-secondary shadow-md z-50'>
      <MobileNav items={navItems} lang={locale} />
      <DesktopNav items={navItems} lang={locale} className='order-2' />
      <Link
        href={`/${locale}`}
        className={cn(commonStyles, `w-32 md:w-36 md:order-1 md:-ml-5`)}
      >
        <Image
          src={CannyLogo}
          alt='Canny Logo'
          property='true'
          className='object-contain'
        />
      </Link>
      <LangDropdown commonStyles={commonStyles} lang={locale} />
    </section>
  );
}
