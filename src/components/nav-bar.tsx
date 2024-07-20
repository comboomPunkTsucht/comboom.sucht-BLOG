"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
//import { Icons } from "@/components/icons"
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

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

import { Separator } from "@/components/ui/separator"
import UserMenu from "@/components/User-Menu"


export function NavBar() {
  return (
    <div className="flex flex-row justify-between items-center ">
      <NavigationMenu className="mt-2 mr-2 ml-2 mb-2 flex flex-row justify-between items-center no-print">
        <NavigationMenuList>
          <div className="flex justify-between">
            <div className="flex flex-row justify-between items-center ">
              <NavigationMenuItem className="backdrop-blur-sm  bg-transparent rounded-full">
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink>
                    <div className="flex flex-row justify-between items-center">
                      <div className="flex flex-row justify-between items-center">
                        <Avatar>
                          <AvatarImage src="/pictures/Logo-transparet.png" alt="comboom.sucht Logo" />
                          <AvatarFallback>CBPS</AvatarFallback>
                        </Avatar>
                      </div>
                      <div className={navigationMenuTriggerStyle() + "ml-2 mr-2 nametag text-sm font-regular flex flex-row justify-between items-center backdrop-blur-sm  bg-transparent rounded-full"}>
                        comboom.sucht
                      </div>
                    </div>
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem className="backdrop-blur-sm  bg-transparent rounded-full">
                <Link href="https://linktr.ee/mcpeaps_hd" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle() + "sm:text-xs md:text-sm lg:text-sm xl:text-sm 2xl:text-sm backdrop-blur-sm  bg-transparent rounded-full"}>
                    Linksammlung
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem className="backdrop-blur-sm  bg-transparent rounded-full rounded-full">
                <NavigationMenuTrigger className="sm:text-xs md:text-sm lg:text-sm xl:text-sm 2xl:text-sm backdrop-blur-sm  bg-transparent rounded-full">Über mich</NavigationMenuTrigger>
                <NavigationMenuContent className="backdrop-blur-sm  bg-transparent rounded-full">
                  <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-4">
                      <NavigationMenuLink className="backdrop-blur-sm  bg-transparent rounded-full" asChild>
                        <a className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                          href="/">
                          <Avatar>
                            <AvatarImage src="/pictures/logo.PNG" />
                            <AvatarFallback>MAHD</AvatarFallback>
                          </Avatar>

                          <p className="mb-2 mt-4 text-lg font-medium">
                            Fabian Aps
                          </p>
                          <p className="text-sm leading-tight text-muted-foreground">
                            ITler/DJ/Producer aus Leidenschaft
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
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
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </div>
            <Separator orientation="vertical" />
            <div>
              <NavigationMenuItem className="backdrop-blur-sm  bg-transparent rounded-full">
                <NavigationMenuLink>
                  <ThemeToggle />
                </NavigationMenuLink>
              </NavigationMenuItem>
            </div>
          </div>
        </NavigationMenuList>
        <UserMenu />
      </NavigationMenu>

    </div>
  )
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
