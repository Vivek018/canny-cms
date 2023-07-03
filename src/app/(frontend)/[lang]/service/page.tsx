import { Header } from "@/common/Header";
import { InfoBody } from "@/common/InfoBody";
import { getServiceInfo } from "@/sanity/config/service";

import { Lang } from "@/types";
import { separateWords } from "@/utils/separateWords";

type Props = {
  params: { lang: Lang };
};

export default async function ServicePage({ params: { lang } }: Props) {
  const aboutInfo = await getServiceInfo(lang);
  const { title, body, description } = aboutInfo[0];
  const [initialWords, finalWord] = separateWords(title);

  return (
    <main className='flex flex-col'>
      <Header text={initialWords} title={finalWord} description={description} />
      <InfoBody body={body} />
    </main>
  );
}
