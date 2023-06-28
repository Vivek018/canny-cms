import { FooterInfo, Lang } from "@/types";
import { createClient, groq } from "next-sanity";
import { config } from "./client-config";

export async function getFooterInfo(lang: Lang): Promise<FooterInfo[]> {
  return createClient(config).fetch(
    groq`*[_type=footer]{
      _id,
      _createdAt,
      "address": title.${lang},
      "social": social.${lang}.current,
      contact,
    }`,
    {
      lang,
    }
  );
}
