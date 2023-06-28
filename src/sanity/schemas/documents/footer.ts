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
      title: "socials",
      type: "array",
      of: [
        {
          type: "localizedString",
        },
      ],
    }),
    defineField({
      name: "contact",
      title: "Contact",
      type: "array",
      of: [
        {
          type: "string",
        },
      ],
    }),
  ],
});
