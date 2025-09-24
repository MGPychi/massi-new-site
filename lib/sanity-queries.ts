import { client } from "./sanity";

// Helper function to fetch with proper caching
async function fetchWithCache<T>(
  query: string,
  params: any = {},
  tags: string[]
): Promise<T> {
  return client.fetch(query, params, {
    cache: "force-cache",
    next: { tags },
  });
}

// Site Settings
export async function getSiteSettings() {
  console.log("Fetching siteSettings with tags: siteSettings, sanity-content");
  return fetchWithCache(
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
    ["siteSettings", "sanity-content"]
  );
}

// Testimonials
export async function getTestimonials() {
  return fetchWithCache(
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
    ["testimonials", "sanity-content"]
  );
}

export async function getFeaturedTestimonials() {
  console.log("Fetching testimonials with tags: testimonials, sanity-content");
  return fetchWithCache(
    `*[_type == "testimonial" && featured == true] | order(_createdAt desc) {
      _id,
      name,
      content,
      rating,
      image,
      earnings
    }`,
    {},
    ["testimonials", "sanity-content"]
  );
}

// FAQ
export async function getFAQs(category?: string) {
  const categoryFilter = category ? ` && category == "${category}"` : "";
  return fetchWithCache(
    `*[_type == "faq"${categoryFilter}] | order(order asc) {
      _id,
      question,
      answer,
      category,
      order,
      featured
    }`,
    {},
    ["faqs", "sanity-content"]
  );
}

export async function getFeaturedFAQs() {
  return fetchWithCache(
    `*[_type == "faq" && featured == true] | order(order asc) {
      _id,
      question,
      answer,
      category,
      order
    }`,
    {},
    ["faqs", "sanity-content"]
  );
}

// Pricing
export async function getPricing() {
  return fetchWithCache(
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
    ["pricing", "sanity-content"]
  );
}
export async function getMainPricing() {
  // First try to get popular pricing, then fallback to any pricing
  const popularPricing = await fetchWithCache(
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
    ["pricing", "sanity-content"]
  );

  if (popularPricing) {
    return popularPricing;
  }

  // Fallback to any pricing plan
  const anyPricing = await fetchWithCache(
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
    ["pricing", "sanity-content"]
  );

  // Debug: Check if any pricing documents exist
  if (!anyPricing) {
    const allPricing = await client.fetch(`*[_type == "pricing"]`);
    console.log("No pricing found. All pricing documents:", allPricing);
  }

  return anyPricing;
}
