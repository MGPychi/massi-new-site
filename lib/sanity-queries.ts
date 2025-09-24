import { client } from "./sanity";

// Site Settings
export async function getSiteSettings() {
  return client.fetch(
    `*[_type == "siteSettings"][0] {
      title,
      description,
      heroContent {
        headline,
        subtitle,
        headlineMobile,
        headlineDesktop
      },
      trustBadgeText,
      wistiaVideoId,
      ctaPrimaryText,
      ctaPrimaryMobile,
      checkoutUrl,
      reviewCount
    }`,
    {},
    {
      cache: "force-cache",
      next: { tags: ["siteSettings", "sanity-content"] },
    }
  );
}

// Testimonials
export async function getTestimonials() {
  return client.fetch(
    `*[_type == "testimonial"] | order(featured desc, _createdAt desc) {
      _id,
      name,
      content,
      rating,
      image,
      featured,
      earnings
    }`,
    {},
    {
      cache: "force-cache",
      next: { tags: ["testimonials", "sanity-content"] },
    }
  );
}

export async function getFeaturedTestimonials() {
  return client.fetch(
    `*[_type == "testimonial" && featured == true] | order(_createdAt desc) {
      _id,
      name,
      content,
      rating,
      image,
      earnings
    }`,
    {},
    {
      cache: "force-cache",
      next: { tags: ["testimonials", "sanity-content"] },
    }
  );
}

// FAQ
export async function getFAQs(category?: string) {
  const categoryFilter = category ? ` && category == "${category}"` : "";
  return client.fetch(
    `*[_type == "faq"${categoryFilter}] | order(order asc) {
      _id,
      question,
      answer,
      category,
      order,
      featured
    }`,
    {},
    {
      cache: "force-cache",
      next: { tags: ["faqs", "sanity-content"] },
    }
  );
}

export async function getFeaturedFAQs() {
  return client.fetch(
    `*[_type == "faq" && featured == true] | order(order asc) {
      _id,
      question,
      answer,
      category,
      order
    }`,
    {},
    {
      cache: "force-cache",
      next: { tags: ["faqs", "sanity-content"] },
    }
  );
}

// Pricing
export async function getPricing() {
  return client.fetch(
    `*[_type == "pricing"] | order(popular desc, _createdAt desc) {
      _id,
      price,
      description,
      features,
      ctaText,
      ctaUrl,
      popular,
      badge
    }`,
    {},
    {
      cache: "force-cache",
      next: { tags: ["pricing", "sanity-content"] },
    }
  );
}

export async function getMainPricing() {
  // First try to get popular pricing, then fallback to any pricing
  const popularPricing = await client.fetch(
    `*[_type == "pricing" && popular == true][0] {
      _id,
      price,
      description,
      features,
      ctaText,
      ctaUrl,
      badge,
      popular
    }`,
    {},
    {
      cache: "force-cache",
      next: { tags: ["pricing", "sanity-content"] },
    }
  );

  if (popularPricing) {
    return popularPricing;
  }

  // Fallback to any pricing plan
  const anyPricing = await client.fetch(
    `*[_type == "pricing"][0] {
      _id,
      price,
      description,
      features,
      ctaText,
      ctaUrl,
      badge,
      popular
    }`,
    {},
    {
      cache: "force-cache",
      next: { tags: ["pricing", "sanity-content"] },
    }
  );

  // Debug: Check if any pricing documents exist
  if (!anyPricing) {
    const allPricing = await client.fetch(`*[_type == "pricing"]`);
    console.log("No pricing found. All pricing documents:", allPricing);
  }

  return anyPricing;
}
