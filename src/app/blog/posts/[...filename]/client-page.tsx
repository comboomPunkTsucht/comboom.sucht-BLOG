"use client";

import { useEffect, useState } from "react";
import { useTina } from "tinacms/dist/react";
import { PostQuery } from "@/../tina/__generated__/types";
import { notFound } from "next/navigation";
import { NavBar } from "@/components/nav-bar";
import Footer from "@/components/footer";
import AuthorBadge from "@/components/authorbadge";
import axios from "axios";
import { remark } from 'remark';
import html from 'remark-html';
import remarkGfm from 'remark-gfm';
import remarkRehype from 'remark-rehype';
import rehypePrettyCode from 'rehype-pretty-code';
import remarkParse from 'remark-parse';
import rehypeStringify from 'rehype-stringify';
import { transformerNotationDiff } from '@shikijs/transformers';
import { transformerCopyButton } from '@rehype-pretty/transformers';

interface ClientPageProps {
  query: string;
  variables: {
    relativePath: string;
  };
  data: PostQuery;
}

interface JSONNode {
  type: string;
  children?: JSONNode[];
  text?: string;
  value?: string;
  url?: string;
  alt?: string;
  caption?: string;
  lang?: string;
}

function jsonToMarkdown(json: JSONNode): string {
  if (json.type === "text") {
    return json.text || "";
  }

  const children = (json.children || []).map(jsonToMarkdown).join("");
  switch (json.type) {
    case "h1":
      return `# ${children}\n`;
    case "h2":
      return `## ${children}\n`;
    case "h3":
      return `### ${children}\n`;
    case "p":
      return `${children}\n\n`;
    case "ul":
      return `${children}\n`;
    case "li":
      return `- ${children}\n`;
    case "blockquote":
      return `> ${children}\n`;
    case "code_block":
      return `\`\`\`${json.lang || ""}\n${children}\n\`\`\`\n`;
    default:
      return children;
  }
}

const renderMarkdownToHTML = async (markdown: string): Promise<string> => {
  const file = await remark()
    .use(remarkParse) // Parse Markdown
    .use(remarkGfm) // Support GitHub-Flavored Markdown
    .use(remarkRehype, { allowDangerousHtml: true }) // Convert to Rehype and allow dangerous HTML
    .use(rehypePrettyCode, {
      transformers: [
        transformerNotationDiff(),
        transformerCopyButton({
          visibility: 'always',
          feedbackDuration: 3_000,
        }),
      ]
    })
    .use(html, { allowDangerousHtml: true }) // Convert to HTML with dangerous HTML allowed
    .use(rehypeStringify, { allowDangerousHtml: true }) // Convert back to string with dangerous HTML allowed
    .process(markdown);
  return file.toString();
};

export default function Post(props: ClientPageProps) {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  const [authorData, setAuthorData] = useState({
    name: "",
    email: "",
    picture: "",
  });
  const [loading, setLoading] = useState(true);
  const [contentHtml, setContentHtml] = useState('');

  useEffect(() => {
    const fetchAuthorData = async () => {
      try {
        const authorUsername = data.post.author || "";
        const yourDomain = process.env.AUTH0_ISSUER_BASE_URL;
        const yourMgmtApiAccessToken = process.env.AUTH0_MGMT_API_ACCESS_TOKEN;

        if (!authorUsername || !yourDomain || !yourMgmtApiAccessToken) {
          console.error("Missing required environment variables or author data");
          notFound();
          return;
        }

        const options = {
          method: "GET",
          url: `${yourDomain}/api/v2/users`,
          params: { q: `nickname:"${authorUsername}"`, search_engine: "v3" },
          headers: { authorization: `Bearer ${yourMgmtApiAccessToken}` },
        };

        const response = await axios.request(options);
        const author_response_data = response.data[0];
        setAuthorData({
          name: author_response_data.name || "",
          email: author_response_data.email || "",
          picture: author_response_data.picture || "",
        });
      } catch (error) {
        console.error("Error fetching author data:", error);
        notFound();
      } finally {
        setLoading(false);
      }
    };

    fetchAuthorData();
  }, [data.post.author]);

  useEffect(() => {
    const convertMarkdownToHTML = async () => {
      try {
        const markdownContent = jsonToMarkdown(data.post.body);
        const htmlContent = await renderMarkdownToHTML(markdownContent);
        setContentHtml(htmlContent);
      } catch (error) {
        console.error("Error converting markdown to HTML:", error);
      }
    };

    if (data.post.body) {
      convertMarkdownToHTML();
    }
  }, [data.post.body]);

  if (loading) {
    return (
      <div>
        <nav className="z-10 sticky top-0">
          <NavBar />
        </nav>
        <main className="flex-grow flex flex-col items-center justify-center p-4">
          <div>Loading...</div>
        </main>
        <Footer />
      </div>
    );
  }

  const dateStr = data.post.date || "";
  const dateObj = new Date(dateStr);
  const day = dateObj.getDate().toString().padStart(2, "0");
  const month = (dateObj.getMonth() + 1).toString().padStart(2, "0");
  const year = dateObj.getFullYear().toString();

  return (
    <div>
      <nav className="z-10 sticky top-0">
        <NavBar />
      </nav>
      <main className="flex-grow flex flex-col items-start justify-start p-4">
        <article className="prose mx-auto">
          <h1 className="text-4xl font-bold text-start">{data.post.title}</h1>
          <div className="text-base text-gray-500 text-start">
            {day + "/" + month + "/" + year}
          </div>
          <div className="flex items-start justify-start">
            <AuthorBadge
              name={authorData.name}
              githubUserName={data.post.author!}
              email={authorData.email}
              href={"https://github.com/" + data.post.author}
              image={{
                src: authorData.picture,
                alt: authorData.name,
              }}
            />
          </div>
          <div
            dangerouslySetInnerHTML={{ __html: contentHtml }}
            className="flex-grow flex flex-col p-4 items-start justify-start"
          />
        </article>
      </main>
      <Footer />
    </div>
  );
}