// lib/rss.js
const { getSortedPostsData } = require('./blog');
const { Feed } = require('feed');

function generateRSSFeed() {
  const posts = getSortedPostsData();

  const feed = new Feed({
    title: "My Blog",
    description: "This is my personal blog",
    id: `${process.env.HOST_URL || 'http://localhost:3000'}/`,
    link: `${process.env.HOST_URL || 'http://localhost:3000'}/`,
    language: "en",
    image: `${process.env.HOST_URL || 'http://localhost:3000'}/logo.png`,
    favicon: `${process.env.HOST_URL || 'http://localhost:3000'}/favicon.ico`,
    copyright: "All rights reserved 2024, My Blog",
  });

  posts.forEach((post) => {
    feed.addItem({
      title: post.title,
      id: `${process.env.HOST_URL || 'http://localhost:3000'}/posts/${post.id}`,
      link: `${process.env.HOST_URL || 'http://localhost:3000'}/posts/${post.id}`,
      date: new Date(post.date),
      description: post.contentHtml,
    });
  });

  return feed.rss2();
}

module.exports = { generateRSSFeed };