'use client'
import Link from "next/link";
import Footer from "@/components/footer";
import { NavBar } from "@/components/nav-bar";

export default function Home() {
  return (
    <div>
      <nav className="z-10 sticky top-0 top"><NavBar /></nav>
      <main className="flex min-h-screen flex-col items-center justify-between p-4">
        <div className="pb-12 mt-5">
            <div className="text-3xl w-full font-bold mb-2">Impressum</div>

            <div className="text-2xl py-2 font-bold">Angaben gemäß § 5 TMG:</div>
            <Link href="https://maps.apple.com/?address=Ludwig-Renn-Stra%C3%9Fe%2033,%2012679%20Berlin,%20Deutschland&ll=52.551673,13.558337" legacyBehavior><div className="text-lg py-1">
              Aps, Fabian<br />
              Ludwig-Renn-Straße 33<br />
              12679 Berlin, Deutschland
            </div></Link>

            <div className="text-2xl py-2 font-bold">Kontakt:</div>
            <div className="text-lg py-1">
                <div className="flex flex-col items-start">
                    <div className="flex flex-row items-center">
                        <Link href="mailto:aps.fabian@outlook.com" legacyBehavior passHref><p className="cursor-context-menu">E-Mail: aps.fabian@outlook.com</p></Link></div>
                    <div className="flex flex-row items-center">
                        <Link href="tel:+4917645172171" legacyBehavior passHref><p className="cursor-context-menu">Telefonnummer: +4917645172171</p></Link>
                    </div>

                </div>
            </div>

            <div className="text-2xl py-2 font-bold">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:</div>
            <Link href="https://maps.apple.com/?address=Ludwig-Renn-Stra%C3%9Fe%2033,%2012679%20Berlin,%20Deutschland&ll=52.551673,13.558337" legacyBehavior><div className="text-lg py-1">
              Aps, Fabian<br />
              Ludwig-Renn-Straße 33<br />
              12679 Berlin, Deutschland
            </div></Link>
        </div>
        <Footer />
      </main>
      </div>
    );
  }