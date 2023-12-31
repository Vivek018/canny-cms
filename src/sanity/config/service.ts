import { Lang, Info } from "@/types";
import { createClient, groq } from "next-sanity";
import { config } from "./client-config";

export async function getServiceInfo(lang: Lang): Promise<Info[]> {
  return createClient(config).fetch(
    groq`*[_type == "service" && language == $lang]{
  title,
  description,
  body,
  "image": image.asset->url,
  language,
  "_translations": *[_type == "translation.metadata" && references(^._id)].translations[].value->{
    title,
    description,
    body,
    "image": image.asset->url,
    language
  },
}`,
    {
      lang,
    }
  );
}
