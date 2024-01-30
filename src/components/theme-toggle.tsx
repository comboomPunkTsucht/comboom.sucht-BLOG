"use client"

import * as React from "react"
import { MoonIcon, SunIcon } from "@radix-ui/react-icons"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function ThemeToggle() {
  const { setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="backdrop-blur-sm  bg-transparent rounded-full" variant="outline" size="icon">
          <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 sm:scale-90 md:scale-100 lg:scale-100 xl:scale-100 2xl:scale-100  transition-all dark:-rotate-90 dark:scale-0" />
          <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="backdrop-blur-sm  bg-transparent" align="end">
      <DropdownMenuItem className="backdrop-blur-sm  bg-transparent" onClick={() => setTheme("system")} >
          System
        </DropdownMenuItem>
        <DropdownMenuItem className="backdrop-blur-sm  bg-transparent" onClick={() => setTheme("dark")} >
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem className="backdrop-blur-sm  bg-transparent" onClick={() => setTheme("light")} >
          Light
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
