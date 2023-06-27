import { i18n } from "@/utils/language";
import { defineField, defineType } from "sanity";

export const localizedText = defineType({
  name: "localizedText",
  title: "Localized Text",
  type: "object",
  fieldsets: [
    {
      title: "Translations",
      name: "translations",
      options: { collapsible: true, collapsed: false },
    },
  ],
  fields: i18n.languages.map((lang) =>
    defineField({
      name: lang.id,
      title: lang.title,
      type: "text",
      fieldset: lang.isDefault ? undefined : "translations",
    })
  ),
});
