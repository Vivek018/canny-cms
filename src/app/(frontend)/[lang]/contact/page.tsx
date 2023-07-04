import { Header } from "@/common/Header";
import { getContactInfo } from "@/sanity/config/contact";

import { Lang } from "@/types";
import { separateWords } from "@/utils/separateWords";
import { ContactForm } from "./_components/ContactForm";
import { Metadata } from "next";
import { siteConfig } from "@/constants";

type Props = {
  params: { lang: Lang };
};

export async function generateMetadata(
  { params: { lang } }: Props
): Promise<Metadata> {
  const contactInfo = await getContactInfo(lang);
  const { title, description  } = contactInfo[0];
  return {
    title: title,
    description: description,
    keywords: siteConfig.keywords,
    icons: siteConfig.icons,
  };
}

export default async function ContactPage({ params: { lang } }: Props) {
  const contactInfo = await getContactInfo(lang);
  const { title, description, body  } = contactInfo[0];
  const [initialWords, finalWord] = separateWords(title);

  return (
    <main className='flex flex-col'>
      <Header
        text={initialWords}
        title={finalWord}
        description={description}
        reverse
      />
      <ContactForm body={body} />
    </main>
  );
}
