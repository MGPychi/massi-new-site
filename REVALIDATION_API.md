# Revalidation API Documentation

## Overview

This API endpoint allows you to revalidate cached Sanity CMS data when content is updated. It supports token-based authentication for security.

## Setup

### Environment Variables

Add the following to your `.env.local` file:

```bash
REVALIDATE_TOKEN=your_secure_revalidation_token_here
```

Generate a secure token using:

```bash
openssl rand -hex 32
```

## Usage

### Endpoint

```
POST /api/revalidate
GET /api/revalidate
```

### Authentication

The API requires a valid token passed either as:

- **Bearer token** in Authorization header (for POST)
- **Query parameter** `token` (for GET)

### POST Request

```bash
curl -X POST "https://yourdomain.com/api/revalidate" \
  -H "Authorization: Bearer your_revalidation_token" \
  -H "Content-Type: application/json" \
  -d '{
    "type": "siteSettings",
    "tags": ["siteSettings", "sanity-content"],
    "paths": ["/"]
  }'
```

### GET Request (for testing)

```bash
curl "https://yourdomain.com/api/revalidate?token=your_revalidation_token"
```

## Request Body Options (POST only)

### Revalidate by Document Type

```json
{
  "type": "siteSettings"
}
```

Supported types:

- `siteSettings` - Revalidates site settings and home page
- `testimonial` - Revalidates testimonials and home page
- `faq` - Revalidates FAQs and home page
- `pricing` - Revalidates pricing and home page

### Revalidate Specific Tags

```json
{
  "tags": ["siteSettings", "testimonials"]
}
```

Available tags:

- `siteSettings`
- `testimonials`
- `faqs`
- `pricing`
- `sanity-content` (catches all)

### Revalidate Specific Paths

```json
{
  "paths": ["/", "/about", "/pricing"]
}
```

### Default Behavior

If no `tags`, `paths`, or `type` are specified, it will revalidate all common Sanity data tags and the home page.

## Sanity Studio Webhook Integration

### Setup Webhook in Sanity Studio

1. Go to your Sanity project dashboard
2. Navigate to API → Webhooks
3. Create a new webhook with:
   - **URL**: `https://yourdomain.com/api/revalidate`
   - **Dataset**: `production` (or your dataset)
   - **HTTP method**: `POST`
   - **HTTP Headers**:
     ```
     Authorization: Bearer your_revalidation_token
     ```
   - **Trigger on**: Create, Update, Delete
   - **Filter**: `_type in ["siteSettings", "testimonial", "faq", "pricing"]`

### Webhook Payload

Sanity will automatically send the document type in the webhook payload, which the API will use to determine what to revalidate.

## Response Format

### Success Response

```json
{
  "revalidated": true,
  "now": 1640995200000,
  "tags": ["siteSettings"],
  "paths": ["/"]
}
```

### Error Responses

```json
{
  "error": "Invalid or missing token"
}
```

```json
{
  "error": "Revalidate token not configured"
}
```

```json
{
  "error": "Failed to revalidate"
}
```

## Security Notes

1. Keep your `REVALIDATE_TOKEN` secure and never commit it to version control
2. Use HTTPS in production
3. Consider IP restrictions if needed
4. Rotate the token periodically
5. Monitor API usage and implement rate limiting if necessary

## Testing

You can test the endpoint locally:

```bash
# Test GET endpoint
curl "http://localhost:3000/api/revalidate?token=your_token"

# Test POST endpoint
curl -X POST "http://localhost:3000/api/revalidate" \
  -H "Authorization: Bearer your_token" \
  -H "Content-Type: application/json" \
  -d '{"type": "siteSettings"}'
```
