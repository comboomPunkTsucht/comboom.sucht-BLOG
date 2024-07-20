// pages/api/rss.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { getSortedPostsData } from '@/lib/blog';
import { Feed } from 'feed';

export default (req: NextApiRequest, res: NextApiResponse) => {
  const posts = getSortedPostsData();

  const feed = new Feed({
    title: "My Blog",
    description: "This is my personal blog",
    id: "http://localhost:3000/",
    link: "http://localhost:3000/",
    language: "en",
    image: "http://localhost:3000/logo.png",
    favicon: "http://localhost:3000/favicon.ico",
    copyright: "All rights reserved 2024, My Blog",
  });

  posts.forEach((post) => {
    feed.addItem({
      title: post.title,
      id: `http://localhost:3000/posts/${post.id}`,
      link: `http://localhost:3000/posts/${post.id}`,
      date: new Date(post.date),
      description: post.contentHtml,
    });
  });

  res.setHeader("Content-Type", "application/rss+xml");
  res.write(feed.rss2());
  res.end();
};