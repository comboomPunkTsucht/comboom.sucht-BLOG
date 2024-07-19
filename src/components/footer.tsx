"use client"

import Image from 'next/image';

export default function Footer() {
  const today = new Date();
  return (
    <div className="flex flex-col text-center items-center justify-center mt-auto text-sm mb-5 pt-10 no-print">
      <div className="pb-4">
        <a href="/" className="flex flex-row justify-center text-center text-sm font-bold">
          &copy; {today.getFullYear()} comboom.sucht
        </a>
      </div>
      <div className="flex flex-row justify-center items-center text-center text-sm pb-4">
        <a href="https://linktr.ee/mcpeaps_hd" target="_blank" className="font-bold">Linksammlung</a> |
        <a href="/" className="font-bold">comboom.sucht</a> |
        <a href="/impressum" className="font-bold">Impressum</a> |
        <a href="https://idx.google.com/import?url=https%3A%2F%2Fgithub.com%2FmcpeapsUnterstrichHD%2FmcpeapsUnterstrichHD">
          <picture>
            <source media="(prefers-color-scheme: dark)" srcSet="https://cdn.idx.dev/btn/open_light_32.svg" />
            <source media="(prefers-color-scheme: light)" srcSet="https://cdn.idx.dev/btn/open_dark_32.svg" />
            <Image height={32} width={32} alt="Open in IDX" src="https://cdn.idx.dev/btn/open_purple_32.svg" />
          </picture>
        </a>
      </div>
    </div>
  );
}
