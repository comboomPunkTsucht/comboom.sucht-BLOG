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
                .use(html, { allowDangerousHtml: true })
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

    const [previewMode, setPreviewMode] = useState(false)
    const [fullscreenMode, setFullscreenMode] = useState(false)
    const togglePreviewMode = () => {
        setPreviewMode((prevMode) => !prevMode)
    }

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

                        <div
                            className={`flex flex-col h-screen w-full bg-transparent text-foreground transition-all duration-300 ${fullscreenMode ? "fixed top-0 left-0 z-50 m-0" : ""
                                }`}
                        >
                            <div
                                className={`flex items-center justify-between bg-transparent  px-4 py-2 border-b border-border ${fullscreenMode ? "sticky top-0 z-40" : ""
                                    }`}
                            >
                                <div className="flex items-center gap-2">

                                    <Button variant="ghost" size="icon" onClick={() => {
                                        const temp = content
                                        togglePreviewMode();
                                        setContent(content);
                                        autoResizeTextarea();
                                        setContent(temp);
                                    }}>
                                        {previewMode ? <EyeOffIcon className="h-5 w-5" /> : <EyeIcon className="h-5 w-5" />}
                                    </Button>
                                </div>
                            </div>
                            <div
                                className={`flex-1 overflow-auto p-4 transition-all duration-300 ${previewMode ? "prose prose-invert max-w-none" : "prose max-w-none dark:prose-invert"
                                    }`}
                            >
                                {previewMode ? (
                                    <div>
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
                                ) : (
                                    <div className="flex flex-col space-y-4 h-auto">
                                        <Input
                                            type="text"
                                            placeholder="Title"
                                            value={title}
                                            onChange={(e) => setTitle(content)}
                                            className="border p-2 backdrop-blur-sm  bg-transparent"
                                            inputMode="text"
                                        />
                                        <Input
                                            type="text"
                                            placeholder="Description"
                                            value={description}
                                            onChange={(e) => setDescription(content)}
                                            className="border p-2 backdrop-blur-sm  bg-transparent"
                                            inputMode="text"
                                        />

                                        <Textarea
                                            ref={textareaRef}  // Textarea mit Ref verbinden
                                            placeholder="Content"
                                            value={content}
                                            onChange={(e) => {
                                                const temp = e.target.value;

                                        setContent(e.target.value);
                                        autoResizeTextarea();
                                        setContent(temp);
                                            }}
                                            className="border p-2 h-auto backdrop-blur-sm  bg-transparent"
                                            style={{
                                                overflow: 'hidden',
                                                height: 'auto',
                                            }}
                                            onInput={(e) => {
                                                const temp = content;

                                        setContent(content);
                                        autoResizeTextarea();
                                        setContent(temp);
                                            }} // Auch beim Tippen anpassen
                                            onLoad={(e) => {
                                                const temp = content;

                                        setContent(content);
                                        autoResizeTextarea();
                                        setContent(temp);
                                            }}
                                            onClick={(e) => {
                                                const temp = content;

                                        setContent(content);
                                        autoResizeTextarea();
                                        setContent(temp);
                                            }}
                                            onResize={(e) => {
                                                const temp = content;

                                        setContent(content);
                                        autoResizeTextarea();
                                        setContent(temp);
                                            }}
                                            inputMode="text"
                                            onResizeCapture={(e) => {
                                                const temp = content;

                                        setContent(content);
                                        autoResizeTextarea();
                                        setContent(temp);
                                            }}
                                            onLoadCapture={(e) => {
                                                const temp = content;

                                        setContent(content);
                                        autoResizeTextarea();
                                        setContent(temp);
                                            }}
                                            onInputCapture={(e) => {
                                                const temp = content;

                                        setContent(content);
                                        autoResizeTextarea();
                                        setContent(temp);
                                            }}
                                            onClickCapture={(e) => {
                                                const temp = content;

                                        setContent(content);
                                        autoResizeTextarea();
                                        setContent(temp);
                                            }}
                                            onContextMenu={(e) => {
                                                const temp = content;

                                        setContent(content);
                                        autoResizeTextarea();
                                        setContent(temp);
                                            }}
                                            onContextMenuCapture={(e) => {
                                                const temp = content;

                                        setContent(content);
                                        autoResizeTextarea();
                                        setContent(temp);
                                            }}
                                            onFocus={(e) => {
                                                const temp = content;

                                        setContent(content);
                                        autoResizeTextarea();
                                        setContent(temp);
                                            }}
                                            onFocusCapture={(e) => {
                                                const temp = content;

                                        setContent(content);
                                        autoResizeTextarea();
                                        setContent(temp);
                                            }}
                                            onTouchStart={(e) => {
                                                const temp = content;

                                        setContent(content);
                                        autoResizeTextarea();
                                        setContent(temp);
                                            }}
                                            onTouchStartCapture={(e) => {
                                                const temp = content;

                                        setContent(content);
                                        autoResizeTextarea();
                                        setContent(temp);
                                            }}
                                            onTouchEnd={(e) => {
                                                const temp = content;

                                        setContent(content);
                                        autoResizeTextarea();
                                        setContent(temp);
                                            }}
                                            onTouchEndCapture={(e) => {
                                                const temp = content;

                                        setContent(content);
                                        autoResizeTextarea();
                                        setContent(temp);
                                            }}
                                            onTouchCancel={(e) => {
                                                const temp = content;

                                        setContent(content);
                                        autoResizeTextarea();
                                        setContent(temp);
                                            }}
                                            onTouchCancelCapture={(e) => {
                                                const temp = content;

                                        setContent(content);
                                        autoResizeTextarea();
                                        setContent(temp);
                                            }}
                                            onTouchMove={(e) => {
                                                const temp = content;

                                        setContent(content);
                                        autoResizeTextarea();
                                        setContent(temp);
                                            }}
                                            onTouchMoveCapture={(e) => {
                                                const temp = content;

                                        setContent(content);
                                        autoResizeTextarea();
                                        setContent(temp);
                                            }}
                                            onSelect={(e) => {
                                                const temp = content;

                                        setContent(content);
                                        autoResizeTextarea();
                                        setContent(temp);
                                            }}
                                            onSelectCapture={(e) => {
                                                const temp = content;

                                        setContent(content);
                                        autoResizeTextarea();
                                        setContent(temp);
                                            }}
                                            onScroll={(e) => {
                                                const temp = content;

                                        setContent(content);
                                        autoResizeTextarea();
                                        setContent(temp);
                                            }}
                                            onScrollCapture={(e) => {
                                                const temp = content;

                                        setContent(content);
                                        autoResizeTextarea();
                                        setContent(temp);
                                            }}
                                        />
                                        <Button onClick={handleDownload}>
                                            Download Markdown File
                                        </Button>
                                    </div>
                                )}
                            </div>
                        </div>

                    </div>

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

function EyeIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
            <circle cx="12" cy="12" r="3" />
        </svg>
    )
}


function EyeOffIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" />
            <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" />
            <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" />
            <line x1="2" x2="22" y1="2" y2="22" />
        </svg>
    )
}

function MaximizeIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M8 3H5a2 2 0 0 0-2 2v3" />
            <path d="M21 8V5a2 2 0 0 0-2-2h-3" />
            <path d="M3 16v3a2 2 0 0 0 2 2h3" />
            <path d="M16 21h3a2 2 0 0 0 2-2v-3" />
        </svg>
    )
}


function MinimizeIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M8 3v3a2 2 0 0 1-2 2H3" />
            <path d="M21 8h-3a2 2 0 0 1-2-2V3" />
            <path d="M3 16h3a2 2 0 0 1 2 2v3" />
            <path d="M16 21v-3a2 2 0 0 1 2-2h3" />
        </svg>
    )
}