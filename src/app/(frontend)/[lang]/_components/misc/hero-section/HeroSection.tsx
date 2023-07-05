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
      />
  );
}
