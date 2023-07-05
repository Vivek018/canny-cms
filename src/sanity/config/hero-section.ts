import { createClient, groq } from "next-sanity";
import { config } from "./client-config";
import { HeroSectionInfo, Lang } from "@/types";

export async function getHeroSectionInfo(lang: Lang): Promise<HeroSectionInfo[]> {
  return createClient(config).fetch(
    groq`*[_type == "hero_section"]{
      _id,
      _createdAt,
      "title": title.${lang},
      "description": description.${lang},
    }`,
    {
      lang,
    }
  );
}
