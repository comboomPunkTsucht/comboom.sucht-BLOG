// app/api/rss.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { generateRSSFeed } from '@/lib/rss';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const rss = generateRSSFeed();
  res.setHeader("Content-Type", "application/rss+xml");
  res.status(200).send(rss);
}