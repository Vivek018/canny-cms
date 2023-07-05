import { defineField, defineType } from "sanity";

export const whyChooseUs = defineType({
  name: "why-choose-us",
  title: "Why Choose Us",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "localizedString",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [{ name: "alt", title: "Alt", type: "string" }],
      validation: (Rule) => Rule.required(),
    }),
  ],
});
