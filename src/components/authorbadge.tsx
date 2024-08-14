import React from 'react';
import UserAvatar, { UserAvatarProps } from '@/components/userAvatar';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

interface AuthorBadgeProps extends UserAvatarProps {
    href?: string;
    email?: string;
}

const AuthorBadge: React.FC<AuthorBadgeProps> = ({
    name,
    githubUserName,
    email,
    href,
    image,
    imageFallback,
}) => {
    if (!href) {
        href = email ? 'mailto:' + email : '/';
    }

    return (
        <Link href={href} legacyBehavior passHref>
            <Badge variant="default" className="inline-flex items-center gap-2">
                <UserAvatar
                    name={name}
                    githubUserName={githubUserName}
                    image={image}
                    imageFallback={imageFallback}
                />
                <span>{name}</span>
            </Badge>
        </Link>
    );
};

export default AuthorBadge;