import { getWhyChooseUsInfo } from "@/sanity/config/why-choose-us";
import { Lang, WhyChooseUsInfo } from "@/types";
import Image from "next/image";

type Props = {
  lang: Lang;
};

const sectionTitle = {
  en: "Why Choose Us ?",
  hi: "हमें क्यों चुनें ?",
  gu: "આપણને કેમ પસંદ કરો ?",
};

export async function WhyChooseUs({ lang }: Props) {
  const data = await getWhyChooseUsInfo(lang);
  return (
    <section className='mt-48 md:mt-32 flex flex-col items-center'>
      <h2 className="text-2xl md:text-4xl font-extrabold uppercase">{sectionTitle[lang]}</h2>
      <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-fr gap-x-4 gap-y-16 md:gap-y-24 place-items-center mt-20 md:mt-28'>
        {data.map((item) => (
          <WhyChooseUsItem key={item._id} item={item} />
        ))}
      </div>
    </section>
  );
}

const WhyChooseUsItem = ({ item }: { item: WhyChooseUsInfo }) => {
  return (
    <div className='flex w-full h-full flex-col justify-between items-center overflow-hidden relative gap-10 mx-10 lg:px-4'>
      <h3 className="text-[16px] xs:text-lg md:text-[16px] leading-6 md:text-lg font-semibold capitalize">{item.title}</h3>
      <Image className="w-2/3 sm:w-1/2 md:w-[75%] object-contain" src={item.image} alt={item.title} width={500} height={500} />
    </div>
  );
};
