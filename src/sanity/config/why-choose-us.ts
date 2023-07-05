import { createClient, groq } from "next-sanity";
import { config } from "./client-config";
import { Lang, Page, WhyChooseUsInfo } from "@/types";

export async function getWhyChooseUsInfo(lang: Lang): Promise<WhyChooseUsInfo[]> {
  return createClient(config).fetch(
    groq`*[_type == "why-choose-us"]{
      _id,
      _createdAt,
      "title": title.${lang},
      "description": description.${lang},
      "image": image.asset->url,
    }`,
    {
      lang,
    }
  );
}
