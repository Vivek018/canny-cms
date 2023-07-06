import { ClientList, Lang } from "@/types";
import { Heading } from "./Heading";
import { getClientList } from "@/sanity/config/client-list";
import Image from "next/image";
import { cn } from "@/utils/cn";

type Props = {
  lang: Lang;
};

const clientListTitle = {
  en: "Our Clients",
  hi: "हमारे ग्राहक",
  gu: "અમારા ગ્રાહકો",
};

export async function ClientList({ lang }: Props) {
  const data = await getClientList();

  return (
    <section className='flex flex-col items-center mb-20'>
      <Heading title={clientListTitle[lang]} />
      <div className='w-full grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 auto-rows-fr gap-x-4 gap-y-16 md:gap-y-24 place-items-center mt-16 md:mt-24 '>
        {data.map((item) => {
          return <ClientListItem key={item._id} item={item} />;
        })}
      </div>
    </section>
  );
}

const ClientListItem = ({ item }: { item: ClientList }) => {
  return (
    <Image
      className={cn(
        "object-contain",
        (item.name === "cotecna" || item.name === "hawa_valves") && "bg-gray/70 p-4"
      )}
      src={item.image}
      alt={item.name}
      width={150}
      height={150}
    />
  );
};
