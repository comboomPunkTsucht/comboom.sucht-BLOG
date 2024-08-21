"use client";

import { useUser } from "@auth0/nextjs-auth0/client";
import { NavBar } from "@/components/nav-bar";
import Footer from "@/components/footer";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import AuthorBadge from "@/components/authorbadge";
import { useRouter } from 'next/navigation';
import { useEffect, useState, useRef } from 'react';
import { remark } from 'remark';
import html from 'remark-html';
import remarkGfm from 'remark-gfm';
import remarkRehype from 'remark-rehype';
import rehypePrettyCode from 'rehype-pretty-code';
import remarkParse from 'remark-parse';
import rehypeStringify from 'rehype-stringify';
import { transformerNotationDiff } from '@shikijs/transformers';
import { transformerCopyButton } from '@rehype-pretty/transformers'
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"

export default function CreatePostPage() {
    const { user } = useUser();
    const router = useRouter();

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [content, setContent] = useState('');
    const [contentHtml, setContentHtml] = useState('');

    const textareaRef = useRef<HTMLTextAreaElement>(null);

    const currentDate = new Date().toISOString().split('T')[0];
    const dateObj = new Date(currentDate);
    const day = dateObj.getDate().toString().padStart(2, '0');
    const month = (dateObj.getMonth() + 1).toString().padStart(2, '0');
    const year = dateObj.getFullYear().toString();

    useEffect(() => {
        const templateUrl = new URLSearchParams(window.location.search).get('template');

        if (templateUrl) {
            fetch(templateUrl + '.md')
                .then(response => response.text())
                .then(markdown => {
                    const frontMatterRegex = /^---\n([\s\S]*?)\n---/;
                    const frontMatterMatch = markdown.match(frontMatterRegex);
                    let contentWithoutFrontMatter = markdown;

                    if (frontMatterMatch) {
                        const frontMatter = frontMatterMatch[1];
                        contentWithoutFrontMatter = markdown.replace(frontMatterRegex, '').trim();

                        const titleMatch = frontMatter.match(/title:\s*"(.+?)"/);
                        const descriptionMatch = frontMatter.match(/description:\s*"(.+?)"/);
                        setTitle(titleMatch ? titleMatch[1] : '');
                        setDescription(descriptionMatch ? descriptionMatch[1] : '');
                    }

                    setContent(contentWithoutFrontMatter);

                    // Verwende setTimeout für das Resizing nach dem Rendering
                    setTimeout(() => {
                        autoResizeTextarea();
                    }, 10);
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
            .use(rehypeStringify, { allowDangerousHtml: true }) // HTML wieder in String umwandeln, gefährliches HTML erlauben
            .process(content);

        setContentHtml(processedContent.toString());
        console.log(processedContent.toString());
    };

    processContent();

    setTimeout(() => {
        autoResizeTextarea(); // Sicherstellen, dass das Resizing nach dem Update von content durchgeführt wird
    }, 10);
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

    const autoResizeTextarea = () => {
        if (textareaRef.current) {
            textareaRef.current.style.height = 'auto';
            textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
        }
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
                            <Input
                                type="text"
                                placeholder="Title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                className="border p-2 backdrop-blur-sm  bg-transparent"
                                inputMode="text"
                            />
                            <Input
                                type="text"
                                placeholder="Description"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                className="border p-2 backdrop-blur-sm  bg-transparent"
                                inputMode="text"
                            />

                            <Textarea
                                ref={textareaRef}  // Textarea mit Ref verbinden
                                placeholder="Content"
                                value={content}
                                onChange={(e) => {
                                    setContent(e.target.value);
                                    autoResizeTextarea();
                                }}
                                className="border p-2 w-[80vw] w-[80dvw] h-auto backdrop-blur-sm  bg-transparent"
                                style={{
                                    overflow: 'hidden',
                                    height: 'auto',
                                }}
                                onInput={(e) => { autoResizeTextarea }} // Auch beim Tippen anpassen
                                onLoad={(e) => { autoResizeTextarea }}
                                onClick={(e) => { autoResizeTextarea }}
                                onResize={(e) => { autoResizeTextarea }}
                                inputMode="text"
                                onResizeCapture={(e) => { autoResizeTextarea }}
                                onLoadCapture={(e) => { autoResizeTextarea }}
                                onInputCapture={(e) => { autoResizeTextarea }}
                                onClickCapture={(e) => { autoResizeTextarea }}
                                onContextMenu={(e) => { autoResizeTextarea }}
                                onContextMenuCapture={(e) => { autoResizeTextarea }}
                                onFocus={(e) => { autoResizeTextarea }}
                                onFocusCapture={(e) => { autoResizeTextarea }}
                                onTouchStart={(e) => { autoResizeTextarea }}
                                onTouchStartCapture={(e) => { autoResizeTextarea }}
                                onTouchEnd={(e) => { autoResizeTextarea }}
                                onTouchEndCapture={(e) => { autoResizeTextarea }}
                                onTouchCancel={(e) => { autoResizeTextarea }}
                                onTouchCancelCapture={(e) => { autoResizeTextarea }}
                                onTouchMove={(e) => { autoResizeTextarea }}
                                onTouchMoveCapture={(e) => { autoResizeTextarea }}
                                onSelect={(e) => { autoResizeTextarea }}
                                onSelectCapture={(e) => { autoResizeTextarea }}
                                onScroll={(e) => { autoResizeTextarea }}
                                onScrollCapture={(e) => { autoResizeTextarea }}
                            />
                            <Button onClick={handleDownload}>
                                Download Markdown File
                            </Button>
                        </div>
                    </div>

                    <Separator className="my-8" />

                    <main className="preview flex-col items-start justify-start p-4">
                        <article className="prose mx-auto">
                            <h1 className="text-4xl font-bold text-start">{title === '' ? 'Title' : title}</h1>
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
                                dangerouslySetInnerHTML={{ __html: contentHtml === '' ? 'Content' : contentHtml }}
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