import { Info, Lang } from "@/types";
import { createClient, groq } from "next-sanity";
import { config } from "./client-config";

export async function getAboutInfo(lang: Lang): Promise<Info[]> {
  return createClient(config).fetch(
    groq`*[_type == "about" && language == $lang]{
  title,
  description,
  body,
  language,
  "_translations": *[_type == "translation.metadata" && references(^._id)].translations[].value->{
    title,
    description,
    body,
    language
  },
}`,
    {
      lang,
    }
  );
}
