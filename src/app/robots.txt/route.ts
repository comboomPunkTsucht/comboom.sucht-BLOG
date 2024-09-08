
import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '*',
    },
    sitemap: `https://${process.env.HOST_URL || 'http://localhost:3000'}/sitemap`,
  }
}
