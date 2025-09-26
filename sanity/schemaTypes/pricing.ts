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
      description: 'e.g., "$33" or "Free"',
    },
    {
      name: "pricingTitle",
      title: "Pricing Title",
      type: "string",
      description: 'Text to display below the price, e.g., "lifetime access"',
    },
    {
      name: "description",
      title: "Price Description",
      type: "string",
      description: 'e.g., "Get The Full Access Before The Price Goes Up"',
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
      pricingTitle: "pricingTitle",
      description: "description",
    },
    prepare(selection: any) {
      const { price, pricingTitle, description } = selection;
      const title = pricingTitle ? `${price} ${pricingTitle}` : price;
      return {
        title,
        subtitle: description || "Pricing Plan",
      };
    },
  },
});
