import { NextRequest, NextResponse } from "next/server";
import { revalidateTag, revalidatePath } from "next/cache";

export async function POST(request: NextRequest) {
  try {
    // Get the token from the request
    const authHeader = request.headers.get("authorization");
    const token = authHeader?.replace("Bearer ", "");

    // Validate the token
    const validToken = process.env.REVALIDATE_TOKEN;

    if (!validToken) {
      return NextResponse.json(
        { error: "Revalidate token not configured" },
        { status: 500 }
      );
    }

    if (!token || token !== validToken) {
      return NextResponse.json(
        { error: "Invalid or missing token" },
        { status: 401 }
      );
    }

    // Parse the request body to get specific revalidation targets
    const body = await request.json().catch(() => ({}));
    const { tags, paths, type } = body;

    // Revalidate specific tags if provided
    if (tags && Array.isArray(tags)) {
      tags.forEach((tag: string) => {
        revalidateTag(tag);
      });
    }

    // Revalidate specific paths if provided
    if (paths && Array.isArray(paths)) {
      paths.forEach((path: string) => {
        revalidatePath(path);
      });
    }

    // Default revalidation for common Sanity data
    if (!tags && !paths) {
      // Revalidate common Sanity data tags
      const commonTags = [
        "siteSettings",
        "testimonials",
        "faqs",
        "pricing",
        "sanity-content",
      ];

      commonTags.forEach((tag) => {
        revalidateTag(tag);
      });

      // Revalidate the main page
      revalidatePath("/");
    }

    // If it's a specific document type, revalidate related tags
    if (type) {
      switch (type) {
        case "siteSettings":
          revalidateTag("siteSettings");
          revalidatePath("/");
          break;
        case "testimonial":
          revalidateTag("testimonials");
          revalidatePath("/");
          break;
        case "faq":
          revalidateTag("faqs");
          revalidatePath("/");
          break;
        case "pricing":
          revalidateTag("pricing");
          revalidatePath("/");
          break;
        default:
          revalidateTag("sanity-content");
          revalidatePath("/");
      }
    }

    return NextResponse.json({
      revalidated: true,
      now: Date.now(),
      tags: tags || "default",
      paths: paths || ["/"],
    });
  } catch (error) {
    console.error("Revalidation error:", error);
    return NextResponse.json(
      { error: "Failed to revalidate" },
      { status: 500 }
    );
  }
}

// Also support GET for testing purposes
export async function GET(request: NextRequest) {
  const token = request.nextUrl.searchParams.get("token");
  const validToken = process.env.REVALIDATE_TOKEN;

  if (!validToken) {
    return NextResponse.json(
      { error: "Revalidate token not configured" },
      { status: 500 }
    );
  }

  if (!token || token !== validToken) {
    return NextResponse.json(
      { error: "Invalid or missing token" },
      { status: 401 }
    );
  }

  try {
    // Revalidate all common tags
    const commonTags = [
      "siteSettings",
      "testimonials",
      "faqs",
      "pricing",
      "sanity-content",
    ];

    commonTags.forEach((tag) => {
      revalidateTag(tag);
    });

    revalidatePath("/");

    return NextResponse.json({
      revalidated: true,
      now: Date.now(),
      message: "All Sanity data revalidated",
    });
  } catch (error) {
    console.error("Revalidation error:", error);
    return NextResponse.json(
      { error: "Failed to revalidate" },
      { status: 500 }
    );
  }
}
