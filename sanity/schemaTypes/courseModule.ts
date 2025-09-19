import { defineType } from "sanity";

export default defineType({
  name: "courseModule",
  title: "Course Module",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Module Title",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "description",
      title: "Module Description",
      type: "text",
    },
    {
      name: "lessons",
      title: "Lessons",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "title",
              title: "Lesson Title",
              type: "string",
            },
            {
              name: "duration",
              title: "Duration (minutes)",
              type: "number",
            },
            {
              name: "videoUrl",
              title: "Video URL",
              type: "url",
            },
          ],
        },
      ],
    },
    {
      name: "order",
      title: "Module Order",
      type: "number",
      validation: (Rule: any) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "description",
    },
  },
  orderings: [
    {
      title: "Module Order",
      name: "order",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
});
