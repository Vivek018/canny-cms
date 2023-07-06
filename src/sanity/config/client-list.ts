import { ClientList, ContactInfo } from "@/types";
import { createClient, groq } from "next-sanity";
import { config } from "./client-config";

export async function getClientList(): Promise<ClientList[]> {
  return createClient(config).fetch(
    groq`*[_type == "client_list"]{
      name,
      "image": image.asset->url,
    }`
  );
}
