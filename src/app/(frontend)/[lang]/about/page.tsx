import { Header } from "@/common/Header";
import HeaderRightImage from "@/common/HeaderRightImage";
import { InfoBody } from "@/common/InfoBody";
import { siteConfig } from "@/constants";
import { getAboutInfo } from "@/sanity/config/about";

import { Lang } from "@/types";
import { separateWords } from "@/utils/separateWords";
import { Metadata } from "next";

type Props = {
  params: { lang: Lang };
};

export async function generateMetadata({
  params: { lang },
}: Props): Promise<Metadata> {
  const aboutInfo = await getAboutInfo(lang);
  const { title, description, image } = aboutInfo[0];
  return {
    title: title,
    description: description,
    keywords: siteConfig.keywords,
    icons: siteConfig.icons,
  };
}

export default async function AboutPage({ params: { lang } }: Props) {
  const aboutInfo = await getAboutInfo(lang);
  const { title, body, description, image } = aboutInfo[0];
  const [initialWords, finalWord] = separateWords(title);

  return (
    <main className='flex flex-col'>
      <Header
        text={initialWords}
        title={finalWord}
        description={description}
        rightComponent={
          <HeaderRightImage src={image} alt={title} />
        }
        reverse
      />
      <InfoBody body={body} />
    </main>
  );
}
