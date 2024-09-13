// lib/rss.ts
import { PostData, getSortedPostsData } from "@/lib/blog";
import { Feed } from "feed";

async function generateRSSFeed() {
  const posts: PostData[] = await getSortedPostsData();

  const feed = new Feed({
    title: "comboom.sucht Blog",
    description: "comboom.sucht Blog",
    id: `${process.env.HOST_URL || "http://localhost:3000"}/`,
    link: `${process.env.HOST_URL || "http://localhost:3000"}/`,
    language: "de",
    image: `${process.env.HOST_URL || "http://localhost:3000"}/pictures/1024.png`,
    favicon: `${process.env.HOST_URL || "http://localhost:3000"}/favicon.ico`,
    copyright: "All rights reserved 2024, My Blog",
  });

  posts.forEach((post) => {
    feed.addItem({
      title: post.title!,
      id: `${process.env.HOST_URL || "http://localhost:3000"}/blog/posts/${post.id}`,
      link: `${process.env.HOST_URL || "http://localhost:3000"}/blog/posts/${post.id}`,
      date: new Date(post.date!),
      description: post.description!,
      content: post.contentHtml!,
    });
  });

  return feed.rss2();
}

export { generateRSSFeed };
