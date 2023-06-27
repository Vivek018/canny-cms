import { schemas } from "@/sanity/schemas";
import { i18n } from "@/utils/language";
import { defineConfig, isKeyedObject } from "sanity";
import { internationalizedArray } from "sanity-plugin-internationalized-array";
import { deskTool } from "sanity/desk";
import { languageFilter } from "@sanity/language-filter";

export const config = defineConfig({
  name: "default",
  title: "Canny Management Services",

  projectId: "ssoyql19",
  dataset: "production",

  apiVersion: "2023-06-26",
  basePath: "/admin",
  plugins: [
    deskTool(),
    internationalizedArray({
      languages: i18n.languages,
      defaultLanguages: [i18n.base],
      fieldTypes: ["string", "text"],
    }),
    languageFilter({
      supportedLanguages: i18n.languages,
      defaultLanguages: [i18n.base],
      documentTypes: [`page`],

      filterField: (enclosingType, member, selectedLanguageIds) => {
        // Filter internationalized arrays
        if (
          enclosingType.jsonType === "object" &&
          enclosingType.name.startsWith("internationalizedArray") &&
          "kind" in member
        ) {
          const language = isKeyedObject(member.field.path[1])
            ? member.field.path[1]._key
            : null;

          return language ? selectedLanguageIds.includes(language) : false;
        }

        // Filter internationalized objects
        // `localeString` must be registered as a custom schema type
        if (
          enclosingType.jsonType === "object" &&
          enclosingType.name.startsWith("locale")
        ) {
          return selectedLanguageIds.includes(member.name);
        }

        return true;
      },
    }),
  ],
  schema: {
    types: schemas,
  },
});
