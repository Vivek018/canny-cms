import { defineType, defineField } from "sanity";

export const clientList = defineType({
  title: "Client List",
  name: "client_list",
  type: "document",
  fields: [
    defineField({
      name: "name",
      type: "string",
    }),
    defineField({
      name: "image",
      type: "image",
    }),
  ],
});
