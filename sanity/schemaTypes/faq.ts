import { defineType } from "sanity";

export default defineType({
  name: "faq",
  title: "FAQ",
  type: "document",
  fields: [
    {
      name: "question",
      title: "Question",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "answer",
      title: "Answer",
      type: "text",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "General", value: "general" },
          { title: "Blueprint", value: "blueprint" },
          { title: "Course", value: "course" },
          { title: "Technical", value: "technical" },
        ],
      },
      initialValue: "general",
    },
    {
      name: "order",
      title: "Display Order",
      type: "number",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "featured",
      title: "Featured FAQ",
      type: "boolean",
      description: "Display this FAQ prominently",
      initialValue: false,
    },
  ],
  preview: {
    select: {
      title: "question",
      subtitle: "category",
    },
  },
  orderings: [
    {
      title: "Display Order",
      name: "order",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
});
