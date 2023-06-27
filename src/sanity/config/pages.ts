import { createClient, groq } from "next-sanity";
import { config } from "./client-config";
import { Lang, Page } from "@/types";

export async function getPages(lang: Lang): Promise<Page[]> {
  return createClient(config).fetch(
    groq`*[_type == "page"]{
      _id,
      _createdAt,
      "title": title.${lang},
      "slug": slug.${lang}.current
    }`,
    {
      lang,
    }
  );
}
