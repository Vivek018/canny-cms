import { Header } from "@/common/Header";
import { getContactInfo } from "@/sanity/config/contact";

import { Lang } from "@/types";
import { separateWords } from "@/utils/separateWords";
import { ContactForm } from "./_components/ContactForm";

type Props = {
  params: { lang: Lang };
};

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
