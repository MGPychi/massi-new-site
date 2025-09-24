import { defineType } from "sanity";

export default defineType({
  name: "pricing",
  title: "Pricing Plan",
  type: "document",
  fields: [
    {
      name: "price",
      title: "Price",
      type: "string",
      validation: (Rule: any) => Rule.required(),
      description: 'e.g., "$97" or "Free"',
    },
    {
      name: "description",
      title: "Price Description",
      type: "string",
      description: 'e.g., "lifetime access" or "one-time payment"',
    },
    {
      name: "features",
      title: "Features List",
      type: "array",
      of: [{ type: "string" }],
      validation: (Rule: any) => Rule.required().min(1),
    },
    {
      name: "ctaText",
      title: "CTA Button Text",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "ctaUrl",
      title: "CTA Button URL",
      type: "url",
    },
    {
      name: "popular",
      title: "Popular Plan",
      type: "boolean",
      description: "Mark this as the recommended/popular plan",
      initialValue: false,
    },
    {
      name: "badge",
      title: "Plan Badge",
      type: "string",
      description: 'e.g., "BEST VALUE", "POPULAR"',
    },
  ],
  preview: {
    select: {
      price: "price",
      description: "description",
    },
    prepare(selection: any) {
      const { price, description } = selection;
      return {
        title: `${price} ${description || ""}`,
        subtitle: "Pricing Plan",
      };
    },
  },
});
