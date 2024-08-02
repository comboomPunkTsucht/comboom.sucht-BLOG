import { MetadataRoute } from 'next';
import { getAllPostIds, getPostData, PostData } from '@/lib/blog';
import fs from 'fs';
import path from 'path';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const postIds = getAllPostIds();
  const postUrls = await Promise.all(
    postIds.flatMap(async (postId) => {
      const filePath = path.join(process.cwd(), 'public', 'blog', `${postId.id}.md`);
      const urls = [];

      if (fs.existsSync(filePath)) {
        const postData: PostData | null = await getPostData(postId.id);

        // URL für die HTML-Version
        urls.push({
          url: `https://www.comboompunksucht.app/blog/${postId.id}`,
          lastModified: postData && postData.date ? new Date(postData.date) : new Date(),
          changeFrequency: 'daily' as const,
          priority: 1,
        });

        // URL für die Markdown-Version
        urls.push({
          url: `https://www.comboompunksucht.app/blog/${postId.id}.md`,
          lastModified: postData && postData.date ? new Date(postData.date) : new Date(),
          changeFrequency: 'daily' as const,
          priority: 1,
        });
      } else {
        console.warn(`File not found: ${filePath}`);
      }

      return urls;
    })
  );

  // Flache Liste erstellen und nur gültige URLs beibehalten
  const validPostUrls = postUrls.flat().filter((url) => url !== null);

  const staticUrls: MetadataRoute.Sitemap = [
    {
      url: 'https://www.comboompunksucht.app/',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: 'https://www.comboompunksucht.app/impressum',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.5,
    },
  ];

  return [...staticUrls, ...validPostUrls];
}