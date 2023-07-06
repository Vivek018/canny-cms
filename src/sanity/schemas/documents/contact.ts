import { defineType, defineField } from "sanity";

export const contact = defineType({
  title: "Contact",
  name: "contact",
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
      name: "image",
      type: "image",
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
              name: "text",
              title: "text",
              type: "string",
            }),
          ],
        },
      ],
    }),
  ],
});
