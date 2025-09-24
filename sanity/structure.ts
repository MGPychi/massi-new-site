import { StructureBuilder } from "sanity/structure";
import { CogIcon, HeartIcon, DocumentTextIcon, StarIcon } from "@sanity/icons";

export const structure = (S: StructureBuilder) =>
  S.list()
    .title("Content")
    .items([
      // Site Settings (Singleton)
      S.listItem()
        .title("Site Settings")
        .icon(CogIcon)
        .child(
          S.document()
            .schemaType("siteSettings")
            .documentId("siteSettings")
            .title("Site Settings")
        ),

      S.divider(),

      // Testimonials
      S.listItem()
        .title("Testimonials")
        .icon(StarIcon)
        .child(S.documentTypeList("testimonial").title("Testimonials")),

      S.divider(),

      // FAQ
      S.listItem()
        .title("FAQs")
        .icon(DocumentTextIcon)
        .child(S.documentTypeList("faq").title("FAQs")),

      S.divider(),

      // Pricing
      S.listItem()
        .title("Pricing")
        .icon(HeartIcon)
        .child(S.documentTypeList("pricing").title("Pricing")),
    ]);
