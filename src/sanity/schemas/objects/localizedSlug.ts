import { i18n } from "@/utils/language";
import { defineField, defineType } from "sanity";

export const localizedSlug = defineType({
  name: "localizedSlug",
  title: "Localized Slug",
  type: "object",
  fieldsets: [
    {
      title: "Translations",
      name: "translations",
      options: { collapsible: true, collapsed: false },
    },
  ],
  fields: i18n.languages?.map((lang) =>
    defineField({
      name: lang.id,
      title: lang.title,
      type: "slug",
      fieldset: lang.isDefault ? undefined : "translations",
      options: {
        source: `title.${lang.id}`,
      },
    })
  ),
});
