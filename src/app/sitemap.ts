import fs from "fs";
import path from "path";
import { PostData, getAllPostIds, getPostData } from "@/lib/blog";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const postIds = getAllPostIds();
  const postUrls = await Promise.all(
    postIds.flatMap(async (postId) => {
      const filePath = path.join(
        process.cwd(),
        "public",
        "blog",
        "posts",
        `${postId.id}.md`,
      );
      const urls = [];

      if (fs.existsSync(filePath)) {
        const postData: PostData | null = await getPostData(postId.id);

        // URL für die HTML-Version
        urls.push({
          url: `${process.env.HOST_URL || "http://localhost:3000"}/blog/posts/${postId.id}`,
          lastModified:
            postData && postData.date ? new Date(postData.date) : new Date(),
          changeFrequency: "daily" as const,
          priority: 1,
        });

        // URL für die Markdown-Version
        urls.push({
          url: `${process.env.HOST_URL || "http://localhost:3000"}/blog/posts/${postId.id}.md`,
          lastModified:
            postData && postData.date ? new Date(postData.date) : new Date(),
          changeFrequency: "daily" as const,
          priority: 1,
        });
      } else {
        console.warn(`File not found: ${filePath}`);
      }

      return urls;
    }),
  );

  // Flache Liste erstellen und nur gültige URLs beibehalten
  const validPostUrls = postUrls.flat().filter((url) => url !== null);

  const staticUrls: MetadataRoute.Sitemap = [
    {
      url: `${process.env.HOST_URL || "http://localhost:3000"}/`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${process.env.HOST_URL || "http://localhost:3000"}/impressum`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.5,
    },
  ];

  return [...staticUrls, ...validPostUrls];
}
