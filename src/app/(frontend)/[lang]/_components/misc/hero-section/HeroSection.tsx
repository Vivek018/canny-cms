import { Lang } from "@/types";
import { GlobeComponent } from "./GlobeComponent";
import { getHeroSectionInfo } from "@/sanity/config/hero-section";
import { separateWords } from "@/utils/separateWords";
import { Header } from "@/common/Header";

type Props = {
  lang: Lang;
};

export async function HeroSection({ lang }: Props) {
  const res = await getHeroSectionInfo(lang);
  const { title, description } = res[0];
  const [initialTitle, finalTitle] = separateWords(title, 1);
  return (
    <Header
      text={initialTitle}
      title={finalTitle}
      description={description}
      reverse={lang !== "en"}
      rightComponent={<GlobeComponent />}
      rightComponentClassName='left-0 right-0 mx-auto md:justify-end md:items-end md:left-auto -bottom-[100px] md:bottom-20 lg:bottom-2 md:-right-4 lg:-right-10 opacity-40'
    />
  );
}
