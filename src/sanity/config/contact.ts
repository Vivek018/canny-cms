import { ContactInfo, Info, Lang } from "@/types";
import { createClient, groq } from "next-sanity";
import { config } from "./client-config";

export async function getContactInfo(lang: Lang): Promise<ContactInfo[]> {
  return createClient(config).fetch(
    groq`*[_type == "contact" && language == $lang]{
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
