import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from "@/components/ui/badge";

interface BlogPostCardProps {
    title: string;
    date: string;
    description: string;
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({
    title,
    date,
    description
}) => {
    const dateObj = new Date(date);
    const day = dateObj.getDate().toString().padStart(2, '0');
    const month = (dateObj.getMonth() + 1).toString().padStart(2, '0'); // Months are 0-indexed
    const year = dateObj.getFullYear().toString();

    return (
        <Card className="BlogPostCard">
            <CardHeader>
                <CardTitle>{title}</CardTitle>
            </CardHeader>
            <CardContent>
                {description}
            </CardContent>
            <CardFooter>
                <Badge variant="default">
                    {day + "/" + month + "/" + year}
                </Badge>
            </CardFooter>
        </Card>
    );
}

export default BlogPostCard;