"use client"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useUser } from '@auth0/nextjs-auth0/client';
import * as React from "react";
import Link from "next/link";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import UserAvatar, { ImageProps } from "@/components/userAvatar";

export default function UserMenu() {
  const { user, isLoading, error } = useUser();

  let name: string;
  let githubUserName: string;
  let logedin: boolean = false;
  let admin: boolean = false;
  let image: ImageProps;

  if (user !== undefined) {
    name = user.name!;
    githubUserName = user.nickname!;
    logedin = true;
    admin = user.org_id! === 'org_wvyPNK9y4HUrFBzV';
    image = {
      src: user.picture!,
      alt: name,
    };
  } else {
    name = "Sign In";
    githubUserName = "comboomPunkTsucht";
    logedin = false;
    admin = false;
    image = {
      src: "https://github.com/comboomPunkTsucht.png",
      alt: "comboom.sucht Logo",
    };
  }

  if (isLoading) {
    return (
      <NotLoggedInToggle />
    );
  }

  if (error) {
    console.error(error.message);
    return (
      <NotLoggedInToggle />
    );
  }

  if (logedin) {
    return (
    <IsLoggedInToggle
      name = { name }
  githubUserName = { githubUserName }
  admin = { admin }
  image = { image }
    />
  );
  } else {
    return (
      <NotLoggedInToggle />
    );
  }
}



function NotLoggedInToggle() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="backdrop-blur-sm  bg-transparent rounded-full" variant="outline" size="icon">
          <UserAvatar name={"Sign In"} githubUserName={"comboomPunkTsucht"} image={{
      src: "https://github.com/comboomPunkTsucht.png",
      alt: "comboom.sucht Logo",
    }} />
          <span className="sr-only">Sign In</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="backdrop-blur-sm  bg-transparent" align="end">
        <Link href="/api/auth/login" legacyBehavior passHref>
        <DropdownMenuItem>
          Log in
        </DropdownMenuItem>
        </Link>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

interface IsLoggedInToggleProps {
  name: string;
  githubUserName: string;
  admin: boolean;
  image: ImageProps;
}

const IsLoggedInToggle: React.FC<IsLoggedInToggleProps> = ({
  name,
  githubUserName,
  admin,
  image,
}) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="backdrop-blur-sm  bg-transparent rounded-full" variant="outline" size="icon">
          <UserAvatar name={name} githubUserName={githubUserName} image={image} />
          <span className="sr-only">{name}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="backdrop-blur-sm  bg-transparent" align="end">
        {admin && (
          <Link href="/admin" legacyBehavior passHref>
        <DropdownMenuItem>
          Admin Dashboard
            </DropdownMenuItem>
            </Link>
        )}
        <Link href="/api/auth/logout" legacyBehavior passHref>
          <DropdownMenuItem>
          Log out
          </DropdownMenuItem>
          </Link>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
