import { ThemedText } from "@/components/ThemedText"
import { ThemedView } from "@/components/ThemedView"
import Markdown from "react-native-marked"
import matter from 'gray-matter'
import { useLocalSearchParams } from "expo-router"
import { useState, useEffect } from "react"
import { blogPosts } from '@/constants/blogPosts';

type BlogPost = {
    id: string
    title: string
    date: string
    author: string
    description: string // Fixed typo
    content: string
}



async function getBlogPost(filename: string): Promise<BlogPost | null> {
    try {
        const content = blogPosts[filename];
        if (!content) {
            throw new Error('Post not found');
        }
        const { data, content: markdown } = matter(content);
        return {
            ...data,
            content: markdown,
            id: filename
        } as BlogPost;
    } catch (error) {
        console.error("Error reading blog post:", error);
        return null;
    }
}


export default function Page() {
    const { id } = useLocalSearchParams()
    const [post, setPost] = useState<BlogPost | null>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        async function fetchPost() {
            if (typeof id !== 'string') {
                setError("Invalid post ID")
                setLoading(false)
                return
            }

            try {
                const blogPost = await getBlogPost(id)
                if (blogPost) {
                    setPost(blogPost)
                } else {
                    setError("Post not found")
                }
            } catch (err) {
                setError("Error loading post")
            } finally {
                setLoading(false)
            }
        }
        fetchPost()
    }, [id])

    if (loading) {
        return <ThemedView><ThemedText>Loading...</ThemedText></ThemedView>
    }

    if (error) {
        return <ThemedView><ThemedText>{error}</ThemedText></ThemedView>
    }

    if (!post) {
        return <ThemedView><ThemedText>Post not found</ThemedText></ThemedView>
    }

    return (
        <ThemedView>
            <ThemedText>{post.title}</ThemedText>
            <ThemedText>{post.date}</ThemedText>
            <ThemedText>{post.author}</ThemedText>
            <Markdown
                value={post.content}
                flatListProps={{
                    initialNumToRender: 8,
                }}
            />
        </ThemedView>
    )
}
