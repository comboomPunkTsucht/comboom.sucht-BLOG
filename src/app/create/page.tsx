"use client";

import { useUser } from "@auth0/nextjs-auth0/client";
import { NavBar } from "@/components/nav-bar";
import Footer from "@/components/footer";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import AuthorBadge from "@/components/authorbadge";
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { remark } from 'remark';
import html from 'remark-html';
import remarkGfm from 'remark-gfm';
import remarkRehype from 'remark-rehype';
import rehypePrettyCode from 'rehype-pretty-code';
import remarkParse from 'remark-parse';
import rehypeStringify from 'rehype-stringify';

export default function CreatePostPage() {
    const { user } = useUser();
    const router = useRouter();

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [content, setContent] = useState('');
    const [contentHtml, setContentHtml] = useState('');

    const currentDate = new Date().toISOString().split('T')[0];
    const dateObj = new Date(currentDate);
    const day = dateObj.getDate().toString().padStart(2, '0');
    const month = (dateObj.getMonth() + 1).toString().padStart(2, '0');
    const year = dateObj.getFullYear().toString();

    useEffect(() => {
        const templateUrl = new URLSearchParams(window.location.search).get('template') +'.md';

        if (templateUrl) {
            fetch(templateUrl)
                .then(response => response.text())
                .then(markdown => {
                    const frontMatterRegex = /^---\n([\s\S]*?)\n---/;
                    const frontMatterMatch = markdown.match(frontMatterRegex);
                    let contentWithoutFrontMatter = markdown;

                    if (frontMatterMatch) {
                        const frontMatter = frontMatterMatch[1];
                        contentWithoutFrontMatter = markdown.replace(frontMatterRegex, '').trim();

                        // Extrahiere Titel und Beschreibung, aber ignoriere Datum und Autor
                        const titleMatch = frontMatter.match(/title:\s*"(.+?)"/);
                        const descriptionMatch = frontMatter.match(/description:\s*"(.+?)"/);
                        setTitle(titleMatch ? titleMatch[1] : '');
                        setDescription(descriptionMatch ? descriptionMatch[1] : '');
                    }

                    setContent(contentWithoutFrontMatter);
                });
        }
    }, []);

    useEffect(() => {
        if (user && user.org_id && user.org_id !== 'org_wvyPNK9y4HUrFBzV') {
            router.push('/');
        }
    }, [user, router]);

    useEffect(() => {
        const processContent = async () => {
            const processedContent = await remark()
                .use(remarkGfm)
                .use(html)
                .use(remarkParse)
                .use(remarkRehype)
                .use(rehypePrettyCode)
                .use(rehypeStringify)
                .process(content);

            setContentHtml(processedContent.toString());
        };

        processContent();
    }, [content]);

    const handleDownload = () => {
        const markdownContent = `---
title: "${title}"
date: "${currentDate}"
description: "${description}"
author: "${user!.nickname}"
---

${content}`;

        const blob = new Blob([markdownContent], { type: 'text/markdown' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `${title.replace(/\s+/g, '_')}.md`;
        link.click();
        URL.revokeObjectURL(url);
    };

    if (user && user.org_id && user.org_id === 'org_wvyPNK9y4HUrFBzV') {
        return (
            <div>
                <nav className="z-10 sticky top-0 top">
                    <NavBar />
                </nav>
                <div className="grid grid-rows-[auto,1fr,auto]">
                    <div className="items-center justify-between flex flex-col flex-wrap p-4">
                        <h1 className="text-5xl mb-4">
                            Create a New Post
                        </h1>
                        <p className="text-xs mb-4">(Only text based Post)</p>
                        <div className="flex flex-col space-y-4">
                            <input
                                type="text"
                                placeholder="Title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                className="border p-2"
                            />
                            <input
                                type="text"
                                placeholder="Description"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                className="border p-2"
                            />
                            <textarea
                                placeholder="Content"
                                value={content}
                                onChange={(e) => setContent(e.target.value)}
                                className="border p-2 h-40 w-[80vw] w-[80dvw]"
                            />
                            <Button
                                onClick={handleDownload}
                            >
                                Download Markdown File
                            </Button>
                        </div>
                    </div>

                    <Separator className="my-8" />

                    <main className="preview flex-col items-start justify-start p-4">
                        <article className="prose mx-auto">
                            <h1 className="text-4xl font-bold text-start">{title === '' ? 'Title': title }</h1>
                            <div className="text-base text-gray-500 text-start">
                                {day + "/" + month + "/" + year}
                            </div>
                            <div className='flex items-start justify-start'>
                                <AuthorBadge
                                    name={user.name!}
                                    githubUserName={user.nickname!}
                                    email={user.email!}
                                    href={'https://github.com/' + user.nickname!}
                                    image={{
                                        src: user.picture!,
                                        alt: user.name!
                                    }}
                                />
                            </div>
                            <div
                                dangerouslySetInnerHTML={{ __html: contentHtml === '' ? 'Content': contentHtml}}
                                className="flex-grow flex flex-col p-4 items-start justify-start"
                            />
                        </article>
                    </main>
                </div>
                <Footer />
            </div>
        );
    } else {
        return (
            <div>
                <nav className="z-10 sticky top-0 top">
                    <NavBar />
                </nav>
                <div className="flex justify-center items-center flex-row flex-wrap">
                    <h1 className="text-5xl">
                        Redirecting...
                    </h1>
                </div>
                <Footer />
            </div>
        );
    }
}