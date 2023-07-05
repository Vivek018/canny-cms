import { HeroSection } from "./_components/misc/hero-section/HeroSection";
import { WhyChooseUs } from "./_components/misc/WhyChooseUs";
import { Lang } from "@/types";

export default function HomePage({
  params: { lang },
}: {
  params: { lang: Lang };
}) {
  return (
    <main>
      <HeroSection lang={lang} />
      <WhyChooseUs lang={lang} />
    </main>
  );
}
