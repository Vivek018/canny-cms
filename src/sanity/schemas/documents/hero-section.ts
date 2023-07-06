import { defineField, defineType } from "sanity";

export const heroSection = defineType({
  name: "hero_section",
  title: "Hero Section",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "localizedString",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      type: "localizedString",
      validation: (Rule) => Rule.required(),
    }),
  ],
});
