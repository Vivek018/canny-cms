import { getServiceInfo } from "@/sanity/config/service";
import { Header } from "../header";
import { Lang } from "@/types";
import { ServiceBody } from "./service-body";

type Props = {
  lang: Lang
};

export async function ServiceSection({lang}: Props) {
  const serviceInfo = await getServiceInfo(lang);
  const { title, description, body } = serviceInfo[0];
  const words = title.split(" ");
  

  return (
    <main className='flex flex-col'>
      <Header text={words[0]} title={words[1]} description={description} />
      <ServiceBody body={body} />
    </main>
  );
}
