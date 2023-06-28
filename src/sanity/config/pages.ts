import { createClient, groq } from "next-sanity";
import { config } from "./client-config";
import { Lang, Page } from "@/types";

export async function getPages(lang: Lang): Promise<Page[]> {
  let language = "";
  if (!lang) {
    language = "en";
  } else {
    language = lang;
  }
  return createClient(config).fetch(
    groq`*[_type == "page"]{
      _id,
      _createdAt,
      "title": title.${language},
      "slug": slug.current
    }`,
    {
      language,
    }
  );
}
