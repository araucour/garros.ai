import type { MetadataRoute } from "next";
import { site } from "@/lib/content";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/mentions-legales"],
    },
    sitemap: `${site.baseUrl}/sitemap.xml`,
  };
}
