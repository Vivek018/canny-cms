import { getLocale } from "@/context/language-context";
import { getFooterInfo } from "@/sanity/config/footer";
import { Icons } from "./icons";
import { cn } from "@/utils/cn";

type Props = {};

const commonStyles = "flex gap-4 justify-center md:border-none";
const commonBorder = "border-t-2 border-neutral-shadow py-6";

export async function Footer({}: Props) {
  const locale = getLocale();
  const footerInfo = await getFooterInfo(locale);
  const { address, socialLink, socialName, contact } = footerInfo[0];
  return (
    <footer className='rounded-lg my-6 px-4 md:px-6 lg:px-8 py-4 text-sm md:text-[16px] border-t-2 border-neutral-shadow flex flex-col gap-6 bg-footer-gradient text-neutral-primary text-center md:text-left'>
      <section className='flex flex-col md:flex-row justify-between'>
        <address className={cn("py-6 md:w-1/4 sm:leading-6 md:leading-9")}>
          {address}
        </address>
        <div
          className={cn(
            commonBorder,
            commonStyles,
            "md:flex-col md:justify-start"
          )}
        >
          {socialLink.map((link, index) => {
            return (
              <a
                key={link}
                href={`${link}`}
                target='_blank'
                className='flex gap-4 hover:opacity-70 transition duration-200 items-center'
              >
                <p>{index === 0 ? <Icons.facebook /> : <Icons.linkedin />}</p>
                <p className='hidden md:inline'>{socialName[index]}</p>
              </a>
            );
          })}
        </div>
        <div className={cn(commonBorder, "flex py-0 md:border-none")}>
          <div
            className={cn(
              commonStyles,
              "flex-col md:justify-start items-start mx-auto md:mx-0 pt-6"
            )}
          >
            {contact.map((contactInfo, index) => {
              return (
                <h3 key={contactInfo} className='flex gap-4'>
                  {index === contact.length - 1 ? (
                    <Icons.mail />
                  ) : (
                    <Icons.contact />
                  )}
                  <p>{contactInfo}</p>
                </h3>
              );
            })}
          </div>
        </div>
      </section>
      <code className={cn(commonBorder, "text-neutral-secondary")}>
        Copyright © 2023 Canny Management Services Pvt. Ltd.
      </code>
    </footer>
  );
}
