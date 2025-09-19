import { defineType } from "sanity";

export default defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Site Title",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "description",
      title: "Site Description",
      type: "text",
    },
    {
      name: "mainHeadline",
      title: "Main Headline",
      type: "string",
      description: "The main hero headline on the homepage",
    },
    {
      name: "subHeadline",
      title: "Sub Headline",
      type: "text",
      description: "The subtitle under the main headline",
    },
    {
      name: "trustBadgeText",
      title: "Trust Badge Text",
      type: "string",
    },
    {
      name: "ctaPrimaryText",
      title: "Primary CTA Text (Desktop)",
      type: "string",
    },
    {
      name: "ctaPrimaryMobile",
      title: "Primary CTA Text (Mobile)",
      type: "string",
    },
    {
      name: "checkoutUrl",
      title: "Checkout URL",
      type: "url",
    },
    {
      name: "wistiaVideoId",
      title: "Wistia Video ID",
      type: "string",
      description: "The ID of the main hero video",
    },
    {
      name: "reviewCount",
      title: "Review Count",
      type: "string",
      description: 'e.g., "2,346 reviews"',
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "description",
    },
  },
});
