// lib/blog.ts
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import remarkGfm from 'remark-gfm';
import remarkRehype from 'remark-rehype';
import rehypePrettyCode from 'rehype-pretty-code';
import remarkParse from 'remark-parse'
import rehypeStringify from 'rehype-stringify'
import { transformerNotationDiff } from '@shikijs/transformers';
import { transformerCopyButton } from '@rehype-pretty/transformers'

const postsDirectory = path.join(process.cwd(), 'public/blog/posts');

export interface PostData {
  id: string;
  title?: string;
  date?: string;
  description?: string;
  contentHtml?: string;
  author?: string;
}

// Function to check if a directory should be ignored
const shouldIgnoreDirectory = (dirName: string) => {
  const ignoredDirectories = ['.git', 'pictures'];
  return ignoredDirectories.includes(dirName);
};

// Function to check if a file should be ignored
const shouldIgnoreFile = (fileName: string) => {
  const ignoredFiles = ['README.md', 'LICENSE.md'];
  return ignoredFiles.includes(fileName);
};

export function getSortedPostsData(): PostData[] {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, '');
    const fullPath = path.join(postsDirectory, fileName);

    // Überprüfen, ob der Pfad eine Datei oder ein Verzeichnis ist
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      if (shouldIgnoreDirectory(fileName)) {
        console.error(`Skipping ignored directory: ${fullPath}`);
        return null;
      } else {
        console.error(`Skipping directory: ${fullPath}`);
        return null;
      }
    } else if (shouldIgnoreFile(fileName)) {
      console.error(`Skipping ignored file: ${fullPath}`);
      return null;
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    return {
      id,
      title: matterResult.data.title,
      date: matterResult.data.date,
      description: matterResult.data.description,
      author: matterResult.data.author
    };
  }).filter(Boolean) as PostData[]; // Filter out null values

  return allPostsData.sort((a, b) => (a.date && b.date && a.date < b.date ? 1 : -1));
}

export function getAllPostIds(): PostData[] {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => {
    if (shouldIgnoreDirectory(fileName) || shouldIgnoreFile(fileName)) {
      console.error(`Skipping ignored file or directory: ${fileName}`);
      return null;
    }
    return {
      id: fileName.replace(/\.md$/, ''),
    };
  }).filter(Boolean) as PostData[]; // Filter out null values
}

export async function getPostData(id: string): Promise<PostData> {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(remarkParse) // Erst das Markdown parsen
    .use(remarkGfm) // GitHub-Flavored Markdown unterstützen
    .use(remarkRehype, { allowDangerousHtml: true }) // In Rehype umwandeln und gefährliches HTML erlauben
    .use(rehypePrettyCode, {
      transformers: [
        transformerNotationDiff(),
        transformerCopyButton({
          visibility: 'always',
          feedbackDuration: 3_000,
        }),
      ]
    })
    .use(html, { allowDangerousHtml: true })
    .use(rehypeStringify, { allowDangerousHtml: true }) // HTML wieder in String umwandeln, gefährliches HTML erlauben
    .process(matterResult.content);

  const contentHtml = processedContent.toString();

  return {
    id,
    contentHtml,
    title: matterResult.data.title,
    date: matterResult.data.date,
    description: matterResult.data.description,
    author: matterResult.data.author
  };
}