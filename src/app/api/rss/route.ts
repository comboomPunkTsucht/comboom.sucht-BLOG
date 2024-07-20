// src/app/api/rss/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { generateRSSFeed } from '@/lib/rss';

export async function GET(req: NextRequest) {
  try {
    const rss = await generateRSSFeed();
    return new NextResponse(rss, {
      headers: {
        "Content-Type": "application/rss+xml",
      },
    });
  } catch (error) {
    console.error(error);
    return new NextResponse("Error generating RSS feed", { status: 500 });
  }
}