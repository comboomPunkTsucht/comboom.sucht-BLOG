// src/app/robots/route.ts

import { NextResponse } from 'next/server';

export async function GET() {
  const robotsTxt = `
    User-agent: *
    Allow: /

    Sitemap: ${process.env.HOST_URL || 'http://localhost:3000'}/sitemap
  `.trim();

  return NextResponse.json(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}