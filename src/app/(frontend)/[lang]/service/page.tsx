import { ServiceSection } from "@/components/service/service-section";
import { Lang } from "@/types";

type Props = {
  params: { lang: Lang}
};

export default function Service({params: { lang}}: Props) {
  return (
      <ServiceSection lang={lang} />
  );
}
