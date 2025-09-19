import { defineType } from "sanity";

export default defineType({
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Customer Name",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "content",
      title: "Testimonial Content",
      type: "text",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "rating",
      title: "Rating",
      type: "number",
      validation: (Rule: any) => Rule.required().min(1).max(5),
    },
    {
      name: "image",
      title: "Customer Photo",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative Text",
        },
      ],
    },
    {
      name: "featured",
      title: "Featured Testimonial",
      type: "boolean",
      description: "Display this testimonial prominently on the homepage",
    },
    {
      name: "earnings",
      title: "Earnings Mentioned",
      type: "string",
      description: 'e.g., "$869.66", "$1,200"',
    },
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "content",
      media: "image",
    },
  },
});
