# Sanity CMS Setup Guide

This guide will help you set up and configure Sanity CMS for your Next.js project.

## Prerequisites

1. Node.js (version 20+ recommended)
2. A Sanity account (free at [sanity.io](https://sanity.io))

## Setup Steps

### 1. Create a Sanity Project

1. Go to [sanity.io](https://sanity.io) and sign up/login
2. Create a new project
3. Choose a project name and dataset name (usually "production")
4. Note down your Project ID

### 2. Configure Environment Variables

Update your `.env.local` file with your actual Sanity credentials:

```bash
# Sanity CMS Configuration
NEXT_PUBLIC_SANITY_PROJECT_ID=your-actual-project-id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_SECRET_TOKEN=your-secret-token
```

To get your secret token:

1. Go to your Sanity project dashboard
2. Navigate to Settings > API
3. Create a new token with Editor permissions
4. Copy the token to your environment variables

### 3. Update Sanity Config

Update the `sanity.config.ts` file with your actual project ID:

```typescript
export default defineConfig({
  name: "default",
  title: "Massi Site CMS",

  projectId: "your-actual-project-id", // Replace with your Project ID
  dataset: "production",

  // ... rest of config
});
```

### 4. Deploy Sanity Studio

Deploy your Sanity Studio to manage content:

```bash
# Deploy the studio
pnpm run sanity:deploy
```

This will give you a URL like `https://your-project-id.sanity.studio` where you can manage your content.

## Available Scripts

- `pnpm run sanity` - Start Sanity Studio locally (http://localhost:3333)
- `pnpm run sanity:build` - Build the Sanity Studio
- `pnpm run sanity:deploy` - Deploy Sanity Studio to Sanity's hosting

## Content Schemas

The project includes the following content types:

### Site Settings

- Site title, description
- Main headline and sub-headline
- CTA button text
- Wistia video ID
- Trust badge text

### Testimonials

- Customer name and photo
- Testimonial content and rating
- Earnings mentioned
- Featured flag for homepage display

### Course Modules

- Module title and description
- Lessons with duration and video URLs
- Display order

### Benefits

- Benefit title and description
- Icon image
- Featured flag
- Display order

### Blog Posts (Optional)

- Title, slug, and content
- Author and categories
- Featured image
- Publication date

## Using Sanity Data in Components

### Fetching Data

```typescript
import { getSiteSettings, getFeaturedTestimonials } from "@/lib/sanity-queries";

// In your component or page
const siteSettings = await getSiteSettings();
const testimonials = await getFeaturedTestimonials();
```

### Displaying Images

```typescript
import { urlFor } from "@/lib/sanity-image";

// In your JSX
<img src={urlFor(image).width(400).height(300).url()} alt="Description" />;
```

### Client-Side Fetching

For client-side data fetching, use the example in `components/sanity-testimonials.tsx`.

## Content Management

1. Access your Sanity Studio at the deployed URL or run locally with `pnpm run sanity`
2. Create and manage content through the intuitive interface
3. Content changes will be immediately available to your Next.js app

## Tips

1. **Preview Mode**: You can set up preview mode to see draft content
2. **Webhooks**: Set up webhooks to trigger rebuilds when content changes
3. **GROQ Queries**: Learn GROQ (Sanity's query language) for complex data fetching
4. **Image Optimization**: Always use the `urlFor` helper for optimized images

## Troubleshooting

### Common Issues

1. **"Project not found"**: Check your project ID in environment variables
2. **"Unauthorized"**: Verify your secret token has the correct permissions
3. **TypeScript errors**: Make sure all Sanity packages are installed correctly

### Getting Help

- [Sanity Documentation](https://www.sanity.io/docs)
- [GROQ Reference](https://www.sanity.io/docs/groq)
- [Next.js Integration Guide](https://www.sanity.io/guides/nextjs)

## Next Steps

1. Set up your actual Sanity project
2. Update environment variables with real credentials
3. Deploy your Sanity Studio
4. Start creating content!
5. Replace hardcoded content in your components with Sanity data

This setup provides a solid foundation for managing your course/product landing page content with Sanity CMS.
