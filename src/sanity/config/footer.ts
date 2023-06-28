import { FooterInfo, Lang } from "@/types";
import { createClient, groq } from "next-sanity";
import { config } from "./client-config";

export async function getFooterInfo(lang: Lang): Promise<FooterInfo[]> {
  return createClient(config).fetch(
    groq`*[_type == "footer"]{
      _id,
      _createdAt,
      "address": address.${lang},
      "socialName": social[].socialName.${lang},
      "socialLink": social[].socialLink.current,
      contact
    }`,
    {
      lang,
    }
  );
}
