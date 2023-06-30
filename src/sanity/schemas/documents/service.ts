import { defineType, defineField } from "sanity";

export const service = defineType({
  title: "Service",
  name: "service",
  type: "document",
  fields: [
    defineField({
      name: "language",
      type: "string",
      options: {
        list: [
          { title: "English", value: "en" },
          { title: "Hindi", value: "hi" },
          { title: "Gujarati", value: "gu" },
        ],
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
