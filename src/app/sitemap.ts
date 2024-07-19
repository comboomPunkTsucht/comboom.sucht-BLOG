import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://mahd.comboompunksucht.app/',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: 'https://mahd.comboompunksucht.app/aboutme',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
        url: 'https://mahd.comboompunksucht.app/projekte',
        lastModified: new Date(),
        changeFrequency: 'daily',
        priority: 0.8,
    },
    {
        url: 'https://mahd.comboompunksucht.app/lebenslauf',
        lastModified: new Date(),
        changeFrequency: 'daily',
        priority: 0.8,
    },
    {
        url: 'https://linktr.ee/mcpeaps_hd',
        lastModified: new Date(),
        changeFrequency: 'daily',
        priority: 0.8,
    },
    {
      url: 'https://mahd.comboompunksucht.app/impressum',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.5,
    },
  ]
}