'use client'
import React from 'react';
import Footer from '@/components/footer';
import { NavBar } from '@/components/nav-bar';
import Image from 'next/image';
import AuthorBadge from '@/components/authorbadge';



export default function Home() {

  return (
    <div>
      <nav className="z-10 sticky top-0 top">
        <NavBar />
      </nav>
    <div className="overflow-hidden flex flex-col items-center justify-center w-screen h-screen">
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-primary-foreground via-secondary-foreground to-primary-foreground" />
      <h1 className="z-9 text-4xl text-transparent duration-3000 bg-secondary-foreground cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
          <Image
            src='/pictures/Logo-transparet.png'
            alt='comboom.sucht Logo'
            width={431}
            height={224}
            layout='responsive'
            objectPosition='center'
            priority={true}
            objectFit='fill'
          />
      </h1>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-primary-foreground via-secondary-foreground to-primary-foreground" />
      <div className="my-16 text-center animate-fade-in">
        <h2 className="text-xl text-secondary-foreground flex flex-row flex-warp gap-2">
            <AuthorBadge
              name='mcpeaps_HD'
              githubUserName='mcpeapsUnterstrichHD'
              email='mcpeaps_HD@outlook.com'
              href='https://mahd.comboompunksucht.app/'
              imageFallback='MAHD'
            />
            <AuthorBadge
              name='BlackDragon'
              githubUserName='BlackDragon-Bat'
              email='knisch03@gmail.com'
              imageFallback='BD'
            />
        </h2>
      </div>
      <div className='absolute inset-x-0 bottom-0'>
        <Footer />
      </div>
      </div>
      </div>
  );
}
