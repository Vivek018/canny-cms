import { defineField, defineType } from "sanity";

export const page = defineType({
  name: "page",
  title: "Pages",
  type: "document",
  fields: [
    defineField({
      name: "name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "title",
      type: "localizedString",
      hidden: (context) => context?.document?.name === undefined,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      type: "localizedSlug",
      options: { source: "name" },
      hidden: (context) => context?.document?.name === undefined,
      validation: (Rule) =>
        Rule.required().error(
          "A slug is required to generate a page on the website"
        ),
    })
  ],
});
