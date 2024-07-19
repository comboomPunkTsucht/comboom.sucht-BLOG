'use client';

import { useUser } from '@auth0/nextjs-auth0/client';
import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import UserAvatar,{ImageProps} from "@/components/userAvatar";

export default function UserMenu() {
    const AdminUser = ["mcpeapsUnterstrichHD"]
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
    admin = AdminUser.includes(githubUserName);
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
            <NavigationMenuList>
          <NavigationMenuItem className="backdrop-blur-sm  bg-transparent rounded-full">
              <NavigationMenuLink>
                      <div className={navigationMenuTriggerStyle() + "ml-2 mr-2 nametag text-sm font-regular flex flex-row justify-between items-center backdrop-blur-sm  bg-transparent rounded-full"}>
                        Loding Profile...
                      </div>
              </NavigationMenuLink>
                </NavigationMenuItem>
                </NavigationMenuList>
    )
    }
        if (error) {console.error(error.message);}

    return (
            <NavigationMenuList>
                <NavigationMenuItem className="relative">
                    <NavigationMenuTrigger
                        className="sm:text-xs md:text-sm lg:text-sm xl:text-sm 2xl:text-sm backdrop-blur-sm bg-transparent rounded-full">Profile</NavigationMenuTrigger>
                    <NavigationMenuContent
                        className="absolute backdrop-blur-sm bg-transparent rounded-full"
                    >
                        <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                            <li className="row-span-4">
                                <NavigationMenuLink className="backdrop-blur-sm bg-transparent rounded-full" asChild>
                                    <a
                                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                        href={`https://github.com/${githubUserName}/`}
                                    >
                                        <UserAvatar name={name}
                                            githubUserName={githubUserName}
                                            image={image}
                                        />
                                        <p className="mb-2 mt-4 text-lg font-medium">{name}</p>
                                        <p className="text-sm leading-tight text-muted-foreground">
                                            {"@" + githubUserName}
                                        </p>
                                    </a>
                                </NavigationMenuLink>
                            </li>
                            {admin && logedin ? (
                                <ListItem href="/create" title="Create Artikle" />
                            ) : (
                                <ListItem href="." title="" />
                            )
                            }
                            {logedin ? (
                                <ListItem href="/api/auth/logout" title="Log out" />
                            ) : (
                                <ListItem href="/api/auth/login" title="log in" />
                            )}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
            </NavigationMenuList>
    );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
