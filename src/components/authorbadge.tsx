import React from 'react';
import UserAvatar, { UserAvatarProps} from '@/components/userAvatar'
import { Badge } from '@/components/ui/badge';

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
        <a href={href}>
        <Badge  variant="default" className='flex flex-nowrap gap-2'>
            <UserAvatar
                name={name}
                githubUserName={githubUserName}
                image={image}
                imageFallback={imageFallback}

            />
            <a>{name}</a>
            </Badge>
            </a>
    );
};

export default AuthorBadge;