import { Header } from "@/common/Header";
import { InfoBody } from "@/common/InfoBody";
import { siteConfig } from "@/constants";
import { getServiceInfo } from "@/sanity/config/service";

import { Lang } from "@/types";
import { separateWords } from "@/utils/separateWords";
import { Metadata } from "next";

type Props = {
  params: { lang: Lang };
};

export async function generateMetadata(
  { params: { lang } }: Props
): Promise<Metadata> {
  const serviceInfo = await getServiceInfo(lang);
  const { title, description } = serviceInfo[0];
  return {
    title: title,
    description: description,
    keywords: siteConfig.keywords,
    icons: siteConfig.icons,
  };
}

export default async function ServicePage({ params: { lang } }: Props) {
  const serviceInfo = await getServiceInfo(lang);
  const { title, body, description } = serviceInfo[0];
  const [initialWords, finalWord] = separateWords(title);

  return (
    <main className='flex flex-col'>
      <Header text={initialWords} title={finalWord} description={description} />
      <InfoBody body={body} />
    </main>
  );
}
