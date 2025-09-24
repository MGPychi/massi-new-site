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
    },
    {
      name: "description",
      title: "Site Description",
      type: "text",
    },
    {
      name: "heroContent",
      title: "Hero Section Content",
      type: "object",
      fields: [
        {
          name: "headline",
          title: "Main Headline (HTML supported)",
          type: "text",
          description:
            'Use HTML tags for styling like <span class="text-orange-500">text</span>',
          rows: 4,
        },
        {
          name: "headlineMobile",
          title: "Mobile Headline (HTML supported)",
          type: "text",
          description:
            'Use HTML tags for styling like <span class="text-orange-500">text</span>',
          rows: 3,
        },
        {
          name: "headlineDesktop",
          title: "Desktop Headline (HTML supported)",
          type: "text",
          description:
            'Use HTML tags for styling like <span class="text-orange-500">text</span>',
          rows: 4,
        },
        {
          name: "subtitle",
          title: "Subtitle (HTML supported)",
          type: "text",
          description:
            'Use HTML tags for styling like <span class="text-red-600 font-semibold">text</span>',
          rows: 3,
        },
      ],
    },
    {
      name: "trustBadgeText",
      title: "Trust Badge Text",
      type: "string",
    },
    {
      name: "wistiaVideoId",
      title: "Wistia Video ID",
      type: "string",
    },
    {
      name: "ctaPrimaryText",
      title: "Primary Call-to-Action Text",
      type: "string",
    },
    {
      name: "ctaPrimaryMobile",
      title: "Primary Call-to-Action Text (Mobile)",
      type: "string",
    },
    {
      name: "checkoutUrl",
      title: "Checkout URL",
      type: "url",
    },
    {
      name: "reviewCount",
      title: "Review Count",
      type: "number",
    },
    // Legacy fields for migration - will be hidden
    {
      name: "mainHeadline",
      title: "Main Headline (Legacy)",
      type: "string",
      hidden: true,
    },
    {
      name: "subHeadline",
      title: "Sub Headline (Legacy)",
      type: "string",
      hidden: true,
    },
  ],
});
