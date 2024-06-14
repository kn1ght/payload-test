import { CollectionConfig } from "payload/types";

export const Articles: CollectionConfig = {
  slug: "articles",
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "preview",
      type: "textarea",
      required: true,
      minLength: 10,
      maxLength: 400,
    },
    {
      name: "image",
      type: "upload",
      relationTo: "media",
      required: true,
      filterOptions: {
        mimeType: { contains: "image" },
      },
    },
    {
      name: "content",
      type: "textarea",
      required: true,
    },
    {
      name: "comments",
      type: "relationship",
      relationTo: "comments",
      hasMany: true,
    },
  ],
};
