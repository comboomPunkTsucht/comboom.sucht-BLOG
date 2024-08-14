"use client"

import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

import { ThemeToggle } from "@/components/theme-toggle"
import UserAvatar, {ImageProps} from "@/components/userAvatar"
import UserMenu from "@/components/User-Menu"


export function NavBar() {

  const name = "comboom.sucht";
  const githubUserName = "comboomPunkTsucht";
  const image: ImageProps = {
    src: "https://github.com/comboomPunkTsucht.png",
    alt: "comboom.sucht Logo",
  };
  const imageFallback = "CBPS";

  return (
    <NavigationMenu className="py-2 no-print">
      <NavigationMenuList className="fixed left-0">
        <NavigationMenuItem className="backdrop-blur-sm  bg-transparent rounded-full">
          <Link href="/" legacyBehavior passHref>
            <div className="flex flex-row justify-between items-center">
              <div className={navigationMenuTriggerStyle() + "backdrop-blur-sm  bg-transparent rounded-full"}>
                <UserAvatar name={name} githubUserName={githubUserName} image={image} imageFallback={imageFallback} />
              </div>
              <div className={"nametag"+ /*navigationMenuTriggerStyle() + */" text-sm font-regular backdrop-blur-sm  bg-transparent rounded-full"}>
                {name}
              </div>
            </div>
          </Link>
        </NavigationMenuItem>
          <NavigationMenuItem className={navigationMenuTriggerStyle() + "backdrop-blur-sm  bg-transparent rounded-full"}>
            <NavigationMenuTrigger className="sm:text-xs md:text-sm lg:text-sm xl:text-sm 2xl:text-sm backdrop-blur-sm  bg-transparent rounded-full">Menu</NavigationMenuTrigger>
            <NavigationMenuContent className="backdrop-blur-sm  bg-transparent rounded-full">
              <div className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <div className="row-span-4">
                  <Link href="/" legacyBehavior passHref>
                    <div className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md">
                      <UserAvatar name={name} githubUserName={githubUserName} image={image} imageFallback={imageFallback} />
                      <a className="mb-2 mt-4 text-lg font-medium">
                        {name}
                      </a>
                      <a className="text-sm leading-tight text-muted-foreground">
                        {"@" + githubUserName}
                      </a>
                    </div>
                  </Link>
                </div>
                <ListItem href="/blog" title="Blog">
                  Alle Blog seiten
                </ListItem>
                <ListItem href="/rss" title="RSS">
                  How to setup RSS feed
                </ListItem>
                <ListItem href="/impressum" title="Impressum" />
              </div>
            </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
      <NavigationMenuList className="fixed right-2">
        <NavigationMenuItem className={navigationMenuTriggerStyle() + "backdrop-blur-sm  bg-transparent rounded-full"}>
          <ThemeToggle />
        </NavigationMenuItem>
        <NavigationMenuItem className={navigationMenuTriggerStyle() + "backdrop-blur-sm  bg-transparent rounded-full"}>
          <UserMenu />
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
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
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
    </div>
  )
})
ListItem.displayName = "ListItem"
