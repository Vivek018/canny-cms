import { localizedSlug } from "./../objects/localizedSlug";
import { localizedString } from "./../objects/localizedString";
import { defineField, defineType } from "sanity";

export const footer = defineType({
  name: "footer",
  title: "Footer",
  type: "document",
  fields: [
    defineField({
      name: "address",
      title: "Address",
      type: "localizedString",
    }),
    defineField({
      name: "social",
      title: "Socials",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "socialName",
              title: "Social Name",
              type: "localizedString",
            }),
            defineField({
              name: "socialLink",
              title: "Social Link",
              type: "slug",
            }),
          ],
        },
      ],
    }),
    defineField({
      name: "contact",
      title: "Contacts",
      type: "array",
      of: [
        {
          type: "string",
        },
      ],
    }),
  ],
});
