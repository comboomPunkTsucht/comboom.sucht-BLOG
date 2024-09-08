// src/pages/api/robots.ts

import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const robotsTxt = `
    User-agent: *
    Allow: /

    Sitemap: ${process.env.HOST_URL || 'http://localhost:3000'}/sitemap
  `.trim();

  res.setHeader('Content-Type', 'text/plain');
  res.status(200).send(robotsTxt);
}