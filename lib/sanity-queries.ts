import { client } from "./sanity";

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

// Course Modules
export async function getCourseModules() {
  return client.fetch(`
    *[_type == "courseModule"] | order(order asc) {
      _id,
      title,
      description,
      lessons,
      order
    }
  `);
}

// Benefits
export async function getBenefits() {
  return client.fetch(`
    *[_type == "benefit"] | order(order asc) {
      _id,
      title,
      description,
      icon,
      featured,
      order
    }
  `);
}

export async function getFeaturedBenefits() {
  return client.fetch(`
    *[_type == "benefit" && featured == true] | order(order asc) {
      _id,
      title,
      description,
      icon,
      order
    }
  `);
}

// Site Settings
export async function getSiteSettings() {
  return client.fetch(`
    *[_type == "siteSettings"][0] {
      title,
      description,
      mainHeadline,
      subHeadline,
      trustBadgeText,
      ctaPrimaryText,
      ctaPrimaryMobile,
      checkoutUrl,
      wistiaVideoId,
      reviewCount
    }
  `);
}

// Blog Posts
export async function getPosts() {
  return client.fetch(`
    *[_type == "post"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      author->{
        name,
        image
      },
      mainImage,
      categories[]->{
        title
      },
      publishedAt,
      body
    }
  `);
}

export async function getPost(slug: string) {
  return client.fetch(
    `
    *[_type == "post" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      author->{
        name,
        image,
        bio
      },
      mainImage,
      categories[]->{
        title
      },
      publishedAt,
      body
    }
  `,
    { slug }
  );
}
