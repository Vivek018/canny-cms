import { defineField, defineType } from "sanity";

export const service = defineType({
  name: "service",
  title: "Services",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "localizedSlug",
      options: { source: "name" },
      validation: (Rule) =>
        Rule.required().error(
          "A slug is required to generate a page on the website"
        ),
      hidden: (context) => context?.document?.name === undefined,
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "localizedString",
        },
      ],
      validation: (Rule) => Rule.required(),
      hidden: (context) => context?.document?.name === undefined,
    }),
    defineField({
      name: "url",
      title: "URL",
      type: "url",
      validation: (Rule) => Rule.required(),
      hidden: (context) => context?.document?.name === undefined,
    }),
    defineField({
      name: "content",
      title: "Content",
      type: "array",
      of: [
        {
          type: "localizedText",
        },
      ],
      validation: (Rule) => Rule.required(),
      hidden: (context) => context?.document?.name === undefined,
    }),
  ],
});
