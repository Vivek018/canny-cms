import { schemas } from "@/sanity/schemas";
import { service } from "@/sanity/schemas/service";
import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";

export const config = defineConfig({
  name: "default",
  title: "Canny Management Services",

  projectId: "ssoyql19",
  dataset: "production",

  apiVersion: "2023-06-26",
  basePath: "/admin",
  plugins: [deskTool()],
  schema: {
    types: schemas,
  },
});
