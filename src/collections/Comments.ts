import { CollectionConfig } from "payload/types";

export const Comments: CollectionConfig = {
  slug: "comments",
  access: {
    read: () => true,
    create: () => true,
  },
  fields: [
    {
      name: "content", // required
      type: "textarea", // required
      required: true,
      minLength: 1,
      maxLength: 300,
    },
    {
      name: "article", // required
      type: "relationship", // required
      relationTo: "articles", // required
      hasMany: false,
      required: true,
    },
  ],
};
