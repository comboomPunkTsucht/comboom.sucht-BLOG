import { NextResponse } from "next/server";

export async function GET() {
  const robotsTxt = `
    User-agent: *
    Allow: /

    Sitemap: ${process.env.HOST_URL || "http://localhost:3000"}/sitemap
  `.trim();

  return new NextResponse(robotsTxt, {
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
