"use client";
import AuthorBadge from "@/components/authorbadge";
import Footer from "@/components/footer";
import { NavBar } from "@/components/nav-bar";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <nav className="top sticky top-0 z-10">
        <NavBar />
      </nav>
      <div className="flex h-screen w-screen flex-col items-center justify-center overflow-hidden">
        <div className="hidden h-px w-screen animate-fade-left animate-glow bg-gradient-to-r from-primary-foreground via-secondary-foreground to-primary-foreground md:block" />
        <h1 className="z-9 animate-title cursor-default whitespace-nowrap bg-secondary-foreground bg-clip-text font-display text-4xl text-edge-outline text-white duration-3000 sm:text-6xl md:text-9xl ">
          <Image
            src="/media/Logo-transparet.png"
            alt="comboom.sucht Logo"
            width={431}
            height={224}
            layout="responsive"
            objectPosition="center"
            priority={true}
            objectFit="fill"
          />
        </h1>
        <div className="hidden h-px w-screen animate-fade-right animate-glow bg-gradient-to-r from-primary-foreground via-secondary-foreground to-primary-foreground md:block" />
        <div className="my-16 animate-fade-in text-center">
          <h2 className="flex flex-warp flex-row gap-2 text-white text-xl">
            <AuthorBadge
              name="mcpeaps_HD"
              githubUserName="mcpeapsUnterstrichHD"
              email="mcpeaps_HD@outlook.com"
              href="https://mahd.comboompunksucht.app/"
              imageFallback="MAHD"
            />
            <AuthorBadge
              name="BlackDragon"
              githubUserName="BlackDragon-Bat"
              email="knisch03@gmail.com"
              imageFallback="BD"
            />
          </h2>
        </div>
        <div className="absolute inset-x-0 bottom-0">
          <Footer />
        </div>
      </div>
    </div>
  );
}
