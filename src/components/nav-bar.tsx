"use client";

import Link from "next/link";
import * as React from "react";

//import { Icons } from "@/components/icons"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

import { ThemeToggle } from "@/components/theme-toggle";

import UserAvatar, { ImageProps } from "@/components/userAvatar";

export function NavBar() {
  const name = "Fabian Aps";
  const githubUserName = "mcpeapsUnterstrichHD";
  const image: ImageProps = {
    src: "https://github.com/mcpeapsUnterstrichHD.png",
    alt: "mcpeaps_HD Logo",
  };
  const imageFallback = "MAHD";

  return (
    <NavigationMenu className="no-print py-2">
      <NavigationMenuList className="fixed left-0">
        <NavigationMenuItem className="rounded-full bg-transparent backdrop-blur-sm">
          <Link href="/" legacyBehavior passHref>
            <div className="flex flex-row items-center justify-between">
              <div
                className={
                  navigationMenuTriggerStyle() +
                  "rounded-full bg-transparent backdrop-blur-sm"
                }
              >
                <UserAvatar
                  name={name}
                  githubUserName={githubUserName}
                  image={image}
                  imageFallback={imageFallback}
                />
              </div>
              <div
                className={
                  "nametag rounded-full bg-transparent font-regular text-sm backdrop-blur-sm"
                }
              >
                {name}
              </div>
            </div>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem className="rounded-full bg-transparent backdrop-blur-sm">
          <Link href="https://linktr.ee/mcpeaps_hd" legacyBehavior passHref>
            <div
              className={
                navigationMenuTriggerStyle() +
                "rounded-full bg-transparent font-regular text-sm backdrop-blur-sm"
              }
            >
              Linkhub
            </div>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem className="rounded-full bg-transparent backdrop-blur-sm">
          <NavigationMenuTrigger className="rounded-full bg-transparent backdrop-blur-sm sm:text-xs md:text-sm lg:text-sm xl:text-sm 2xl:text-sm">
            Über mich
          </NavigationMenuTrigger>
          <NavigationMenuContent className="rounded-full bg-transparent backdrop-blur-sm">
            <div className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <div className="row-span-4">
                <Link href="/" legacyBehavior passHref>
                  <div className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md">
                    <UserAvatar
                      name={name}
                      githubUserName={githubUserName}
                      image={image}
                      imageFallback={imageFallback}
                    />
                    <a className="mt-4 mb-2 font-medium text-lg">{name}</a>
                    <a className="text-muted-foreground text-sm leading-tight">
                      ITler/DJ/Producer aus Leidenschaft
                    </a>
                  </div>
                </Link>
              </div>
              <ListItem href="/aboutme" title="Über mich">
                Wissenswertes über Mich
              </ListItem>
              <ListItem href="/projekte" title="Projekte">
                Meine Projekte
              </ListItem>
              <ListItem href="/lebenslauf" title="Lebenslauf">
                Mein aktueller Lebenslauf
              </ListItem>
              <ListItem href="/impressum" title="Impressum" />
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
      <NavigationMenuList className="fixed right-2">
        <NavigationMenuItem
          className={
            navigationMenuTriggerStyle() +
            "rounded-full bg-transparent backdrop-blur-sm"
          }
        >
          <ThemeToggle />
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <div>
      <a
        ref={ref}
        className={cn(
          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
          className,
        )}
        {...props}
      >
        <div className="font-medium text-sm leading-none">{title}</div>
        <p className="line-clamp-2 text-muted-foreground text-sm leading-snug">
          {children}
        </p>
      </a>
    </div>
  );
});
ListItem.displayName = "ListItem";
