import { ClientList } from "./_components/misc/ClientList";
import { HeroSection } from "./_components/misc/hero-section/HeroSection";
import { WhyChooseUs } from "./_components/misc/WhyChooseUs";
import { Lang } from "@/types";

export default function HomePage({
  params: { lang },
}: {
  params: { lang: Lang };
}) {
  return (
    <main className='flex flex-col gap-48'>
      <HeroSection lang={lang} />
      <WhyChooseUs lang={lang} />
      <ClientList lang={lang} />
    </main>
  );
}
