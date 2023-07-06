import { Lang } from "@/types";
import { Heading } from "./Heading";

type Props = {
  lang: Lang;
};

const clientListTitle = {
  en: "Our Clients",
  hi: "हमारे ग्राहक",
  gu: "અમારા ગ્રાહકો",
};

export function ClientList({ lang }: Props) {
  return (
    <section className='flex flex-col items-center'>
      <Heading title={clientListTitle[lang]} />
    </section>
  );
}
