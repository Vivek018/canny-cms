import { i18n } from "@/utils/language";
import { defineType, defineField } from "sanity";

export const about = defineType({
  title: "About",
  name: "about",
  type: "document",
  fields: [
    defineField({
      name: "language",
      type: "string",
      options: {
        list: i18n.languages,
      },
    }),
    defineField({
      name: "title",
      type: "string",
    }),
    defineField({
      name: "description",
      type: "text",
    }),
    defineField({
      name: "body",
      title: "Body",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "title",
              title: "Title",
              type: "string",
            }),
            defineField({
              name: "content",
              title: "Content",
              type: "text",
            }),
          ],
        },
      ],
    }),
  ],
});
