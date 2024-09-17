'use client';
import { PostQuery } from '@/../tina/__generated__/types';
import AuthorBadge from '@/components/authorbadge';
import Footer from '@/components/footer';
import { NavBar } from '@/components/nav-bar';
import { transformerCopyButton } from '@rehype-pretty/transformers';
import { transformerNotationDiff } from '@shikijs/transformers';
import { notFound } from 'next/navigation';
import { useEffect, useState } from 'react';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeStringify from 'rehype-stringify';
import { remark } from 'remark';
import remarkGfm from 'remark-gfm';
import html from 'remark-html';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import { useTina } from 'tinacms/dist/react';
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
  props?: {
    tableRows?: { tableCells: { value: JSONNode }[] }[];
    align?: string[];
  };
}

function jsonToMarkdown(json: JSONNode): string {
  if (json.type === 'text') {
    return json.text || '';
  }

  const children = (json.children || []).map(jsonToMarkdown).join('');
  switch (json.type) {
    case 'h1':
      return `# ${children}\n\n`;
    case 'h2':
      return `## ${children}\n\n`;
    case 'h3':
      return `### ${children}\n\n`;
    case 'h4':
      return `#### ${children}\n\n`;
    case 'h5':
      return `##### ${children}\n\n`;
    case 'h6':
      return `###### ${children}\n\n`;
    case 'p':
      return `${children}\n\n`;
    case 'ul':
      return `${children}`;
    case 'li':
      return `- ${children}\n`;
    case 'ol':
      return `${children}`;
    case 'blockquote':
      return `> ${children}\n\n`;
    case 'code_block':
      return `\`\`\`${json.lang || ''}\n${json.value || ''}\n\`\`\`\n\n`;
    case 'img':
      return `![${json.alt || ''}](${json.url || ''})\n\n`;
    case 'hr':
      return `---\n\n`;
    case 'table':
      return renderTable(json);
    case 'html':
      return `${json.value || ''}\n\n`; // Allows for custom HTML to pass through
    default:
      return children;
  }
}

function renderTable(json: JSONNode): string {
  if (!json.props || !json.props.tableRows) {
    return '';
  }

  const headers = json.props.tableRows[0].tableCells.map(
    (cell: { value: JSONNode }) => jsonToMarkdown(cell.value).trim(),
  );

  const align = json.props.align || [];
  const alignmentRow = headers.map((_: string, index: number) => {
    switch (align[index]) {
      case 'center':
        return ':---:';
      case 'right':
        return '---:';
      default:
        return '---';
    }
  });

  const rows = json.props.tableRows
    .slice(1)
    .map((row: { tableCells: { value: JSONNode }[] }) =>
      row.tableCells
        .map((cell: { value: JSONNode }) => jsonToMarkdown(cell.value).trim())
        .join(' | '),
    );

  return `
| ${headers.join(' | ')} |
| ${alignmentRow.join(' | ')} |
| ${rows.join(' |\n| ')} |
\n\n`;
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
      ],
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
    name: 'comboom.sucht',
    email: 'comboom.sucht@comboompunksucht.app',
    picture: '/media/1024.png',
    username: 'comboomPunkTsucht',
  });
  const [loading, setLoading] = useState(true);
  const [contentHtml, setContentHtml] = useState('');

  useEffect(() => {
    const fetchAuthorData = async () => {
      try {
        const authorEmail =
          data.post.author || 'comboom.sucht@comboompunksucht.app';
        console.log('Author Email:', authorEmail);
        if (!authorEmail) {
          console.error('Missing author username');
          notFound();
          return;
        }

        const res = await fetch(`/api/auth/users/${authorEmail}`);
        console.log(
          `Response Status: ${res.status}, StatusText: ${res.statusText}`,
        );

        if (!res.ok) {
          console.error(
            `Error fetching author data. Status: ${res.status}, StatusText: ${res.statusText}`,
          );
          notFound();
          return;
        }

        const authorResponse = await res.json();
        if (
          !authorResponse.name &&
          !authorResponse.email &&
          !authorResponse.picture &&
          !authorResponse.username
        ) {
          console.error('Author data is incomplete or missing');
          notFound();
          return;
        }

        setAuthorData({
          name: authorResponse.name || 'comboom.sucht',
          email: authorResponse.email || 'comboom.sucht@comboompunksucht.app',
          picture: authorResponse.picture || '/media/1024.png',
          username: authorResponse.username || 'comboomPunkTsucht',
        });
      } catch (error) {
        console.error('Error fetching author data:', error);
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
        console.error('Error converting markdown to HTML:', error);
      }
    };

    if (data.post.body) {
      convertMarkdownToHTML();
    }
  }, [data.post.body]);

  if (loading) {
    return (
      <div>
        <nav className="sticky top-0 z-10">
          <NavBar />
        </nav>
        <main className="flex flex-grow flex-col items-center justify-center p-4">
          <div>Loading...</div>
        </main>
        <Footer />
      </div>
    );
  }

  const dateStr = data.post.date || '';
  const dateObj = new Date(dateStr);
  const day = dateObj.getDate().toString().padStart(2, '0');
  const month = (dateObj.getMonth() + 1).toString().padStart(2, '0');
  const year = dateObj.getFullYear().toString();
  const fdateStr = `${day}/${month}/${year}`;

  return (
    <div>
      <nav className="sticky top-0 z-10">
        <NavBar />
      </nav>
      <main className="flex flex-grow flex-col items-start justify-start p-4">
        <article className="prose mx-auto">
          <h1 className="text-start font-bold text-4xl">{data.post.title}</h1>
          <div className="text-start text-base text-gray-500">{fdateStr}</div>
          <div className="flex items-start justify-start">
            <AuthorBadge
              name={authorData.name}
              githubUserName={authorData.username}
              email={authorData.email}
              href={`https://github.com/${authorData.username}`}
              image={{
                src: authorData.picture,
                alt: authorData.name,
              }}
            />
          </div>
          <div
            dangerouslySetInnerHTML={{ __html: contentHtml }}
            className="flex flex-grow flex-col items-start justify-start p-4"
          />
        </article>
      </main>
      <Footer />
    </div>
  );
}
