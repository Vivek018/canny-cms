import { Lang } from "@/types";
import { GlobeComponent } from "./GlobeComponent";

type Props = {
  lang: Lang;
};

export function HeroSection({ lang }: Props) {
  return (
    <section className='flex justify-between items-center'>
      <h1 className='w-1/2 text-5xl uppercase font-extrabold'>
        Welcome to Canny Management Services
      </h1>
      <GlobeComponent />
    </section>
  );
}
