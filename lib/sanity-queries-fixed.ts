import { client } from "./sanity";

// Site Settings
export async function getSiteSettings() {
  return client.fetch(`
    *[_type == "siteSettings"][0] {
      title,
      description,
      heroContent {
        headline,
        subtitle
      },
      trustBadgeText,
      wistiaVideoId,
      ctaPrimaryText,
      ctaPrimaryMobile,
      checkoutUrl,
      reviewCount
    }
  `);
}

// Testimonials
export async function getTestimonials() {
  return client.fetch(`
    *[_type == "testimonial"] | order(featured desc, _createdAt desc) {
      _id,
      name,
      content,
      rating,
      image,
      featured,
      earnings
    }
  `);
}

export async function getFeaturedTestimonials() {
  return client.fetch(`
    *[_type == "testimonial" && featured == true] | order(_createdAt desc) {
      _id,
      name,
      content,
      rating,
      image,
      earnings
    }
  `);
}

// FAQ
export async function getFAQs(category?: string) {
  const categoryFilter = category ? ` && category == "${category}"` : "";
  return client.fetch(`
    *[_type == "faq"${categoryFilter}] | order(order asc) {
      _id,
      question,
      answer,
      category,
      order,
      featured
    }
  `);
}

export async function getFeaturedFAQs() {
  return client.fetch(`
    *[_type == "faq" && featured == true] | order(order asc) {
      _id,
      question,
      answer,
      category,
      order
    }
  `);
}

// Pricing
export async function getPricing() {
  return client.fetch(`
    *[_type == "pricing"] | order(popular desc, _createdAt desc) {
      _id,
      title,
      price,
      originalPrice,
      description,
      features,
      ctaText,
      ctaUrl,
      popular,
      badge
    }
  `);
}

export async function getMainPricing() {
  return client.fetch(`
    *[_type == "pricing" && popular == true][0] {
      _id,
      title,
      price,
      originalPrice,
      description,
      features,
      ctaText,
      ctaUrl,
      badge
    }
  `);
}
