#!/bin/bash

# Test script for revalidation API
# Make sure to start your Next.js development server first: npm run dev

echo "Testing revalidation API..."

# Get the token from env file
TOKEN="revalidate_tk_8a9b2c4d5e6f7890abcdef1234567890"

echo "Testing GET request..."
curl -s "http://localhost:3000/api/revalidate?token=$TOKEN" | jq '.'

echo ""
echo "Testing POST request with specific type..."
curl -s -X POST "http://localhost:3000/api/revalidate" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"type": "testimonials"}' | jq '.'

echo ""
echo "Testing POST request with specific tags..."
curl -s -X POST "http://localhost:3000/api/revalidate" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"tags": ["pricing", "faqs"]}' | jq '.'

echo ""
echo "Done!"
