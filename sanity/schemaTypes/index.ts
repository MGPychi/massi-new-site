import author from "./author";
import blockContent from "./blockContent";
import category from "./category";
import post from "./post";
import testimonial from "./testimonial";
import courseModule from "./courseModule";
import benefit from "./benefit";
import siteSettings from "./siteSettings";

export const schemaTypes = [
  // Blog-related schemas
  post,
  author,
  category,
  blockContent,

  // Course/Product schemas
  testimonial,
  courseModule,
  benefit,
  siteSettings,
];
