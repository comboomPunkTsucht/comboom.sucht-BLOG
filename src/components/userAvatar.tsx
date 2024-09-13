import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import React from "react";

export interface ImageProps {
  src: string;
  alt: string;
}

export interface UserAvatarProps {
  name: string;
  githubUserName: string;
  href?: string;
  image?: ImageProps;
  imageFallback?: string;
}

function getInitials(str: string): string {
  // Split the string into words, filtering out empty strings
  const words = str.split(" ").filter((word) => word.length > 0);

  // Extract the first letter of each word
  const initials = words.map((word) => word.charAt(0));

  // Join the initials into a single string
  return initials.join("");
}

const UserAvatar: React.FC<UserAvatarProps> = ({
  name,
  githubUserName,
  image,
  imageFallback,
}) => {
  if (!image) {
    image = {
      src: `https://github.com/${githubUserName}.png`,
      alt: name,
    };
  }

  if (!imageFallback) {
    imageFallback = getInitials(name);
  }

  return (
    <Avatar>
      <AvatarImage src={image?.src} alt={image?.alt} />
      <AvatarFallback>{imageFallback}</AvatarFallback>
    </Avatar>
  );
};

export default UserAvatar;
