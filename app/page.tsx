import { HeroSection } from "@/components/sections/hero-section";
import { SocialProofSection } from "@/components/sections/social-proof-section";
import { BlueprintSection } from "@/components/sections/blueprint-section";
import { TargetAudienceSection } from "@/components/sections/target-audience-section";
import { CourseContentComponent } from "@/components/sections/benefits-section";
import { WhatsIncludedSection } from "@/components/sections/whats-included-section";
import { WhoShouldEnrollSection } from "@/components/sections/who-should-enroll-section";
import { ResultsSection } from "@/components/sections/demo-section";
import { SneakPeekSection } from "@/components/sections/sneak-peek-section";
import { NotForEveryoneSection } from "@/components/sections/not-for-everyone-section";
import { PricingSection } from "@/components/sections/pricing-section";
import { TestimonialsSection as NewTestimonialsSection } from "@/components/sections/new-testimonials-section";
import { UniqueValueSection } from "@/components/sections/unique-value-section";
import { ValueSection } from "@/components/sections/value-section";
import { GuaranteeSection } from "@/components/sections/guarantee-section";
import { ModulesSection } from "@/components/sections/modules-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { FAQSection } from "@/components/sections/faq-section";
import { FooterSection } from "@/components/sections/footer-section";
import {
  getSiteSettings,
  getFeaturedTestimonials,
  getFeaturedFAQs,
  getMainPricing,
} from "@/lib/sanity-queries";
import { SiteSettings, Testimonial, FAQ, Pricing } from "@/types/sanity";

export default async function DigitalProductAcademy() {
  // Fetch dynamic content from Sanity
  let siteSettings: SiteSettings | null | undefined;
  let testimonials: Testimonial[] | null | undefined;
  let faqs: FAQ[] | null | undefined;
  let pricing: Pricing | null | undefined;

  try {
    [siteSettings, testimonials, faqs, pricing] = await Promise.all([
      getSiteSettings(),
      getFeaturedTestimonials(),
      getFeaturedFAQs(),
      getMainPricing(),
    ]);
  } catch (error) {
    console.warn("Failed to fetch some Sanity content:", error);
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-slate-900 to-black">
      <HeroSection siteSettings={siteSettings ?? undefined} />
      <SocialProofSection testimonials={testimonials ?? undefined} />
      <BlueprintSection />
      <TargetAudienceSection />
      <CourseContentComponent />
      <WhatsIncludedSection />
      <WhoShouldEnrollSection />
      <ResultsSection />
      {/* <SneakPeekSection /> */}
      <NotForEveryoneSection />
      <PricingSection pricing={pricing ?? undefined} />
      <NewTestimonialsSection testimonials={testimonials ?? undefined} />
      <UniqueValueSection />
      <GuaranteeSection />
      <FAQSection faqs={faqs ?? undefined} />
      <FooterSection />
    </div>
  );
}
