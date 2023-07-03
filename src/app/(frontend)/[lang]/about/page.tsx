import { Header } from "@/common/Header";
import { InfoBody } from "@/common/InfoBody";
import { getAboutInfo } from "@/sanity/config/about";

import { Lang } from "@/types";
import { separateWords } from "@/utils/separateWords";

type Props = {
  params: { lang: Lang };
};

export default async function AboutPage({ params: { lang } }: Props) {
  const aboutInfo = await getAboutInfo(lang);
  const { title, body, description } = aboutInfo[0];
  const [initialWords, finalWord] = separateWords(title);

  return (
    <main className='flex flex-col'>
      <Header
        text={initialWords}
        title={finalWord}
        description={description}
        reverse
      />
      <InfoBody body={body} />
    </main>
  );
}
