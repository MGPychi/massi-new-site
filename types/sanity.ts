// Types for Sanity content

export interface SiteSettings {
  title?: string;
  description?: string;
  heroContent?: {
    headline?: string;
    subtitle?: string;
    headlineMobile?: string;
    headlineDesktop?: string;
  };
  trustBadgeText?: string;
  wistiaVideoId?: string;
  ctaPrimaryText?: string;
  ctaPrimaryMobile?: string;
  checkoutUrl?: string;
  reviewCount?: number;
}

export interface Testimonial {
  _id: string;
  name: string;
  content: string;
  rating?: number;
  image?: {
    asset: {
      _ref: string;
      _type: "reference";
    };
    alt?: string;
  };
  featured?: boolean;
  earnings?: string;
}

export interface FAQ {
  _id: string;
  question: string;
  answer: string;
  category?: "general" | "technical" | "billing" | "course-content";
  order?: number;
  featured?: boolean;
}

export interface Pricing {
  _id: string;
  price: string;
  description?: string;
  features: string[];
  ctaText: string;
  ctaUrl: string;
  popular?: boolean;
  badge?: string;
}
