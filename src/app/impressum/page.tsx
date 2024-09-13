"use client";
import Footer from "@/components/footer";
import { NavBar } from "@/components/nav-bar";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <nav className="top sticky top-0 z-10">
        <NavBar />
      </nav>
      <main className="flex min-h-screen flex-col items-center justify-between p-4">
        <div className="mt-5 pb-12">
          <div className="mb-2 w-full font-bold text-3xl">Impressum</div>

          <div className="py-2 font-bold text-2xl">Angaben gemäß § 5 TMG:</div>
          <Link
            href="https://maps.apple.com/?address=Ludwig-Renn-Stra%C3%9Fe%2033,%2012679%20Berlin,%20Deutschland&ll=52.551673,13.558337"
            legacyBehavior
            passHref
          >
            <div className="py-1 text-lg">
              Aps, Fabian
              <br />
              Ludwig-Renn-Straße 33
              <br />
              12679 Berlin, Deutschland
            </div>
          </Link>

          <div className="py-2 font-bold text-2xl">Kontakt:</div>
          <div className="py-1 text-lg">
            <div className="flex flex-col items-start">
              <div className="flex flex-row items-center">
                <Link
                  href="mailto:aps.fabian@outlook.com"
                  legacyBehavior
                  passHref
                >
                  <p className="cursor-context-menu">
                    E-Mail: aps.fabian@outlook.com
                  </p>
                </Link>
              </div>
              <div className="flex flex-row items-center">
                <Link href="tel:+4917645172171" legacyBehavior passHref>
                  <p className="cursor-context-menu">
                    Telefonnummer: +4917645172171
                  </p>
                </Link>
              </div>
            </div>
          </div>

          <div className="py-2 font-bold text-2xl">
            Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:
          </div>
          <Link
            href="https://maps.apple.com/?address=Ludwig-Renn-Stra%C3%9Fe%2033,%2012679%20Berlin,%20Deutschland&ll=52.551673,13.558337"
            legacyBehavior
            passHref
          >
            <div className="py-1 text-lg">
              Aps, Fabian
              <br />
              Ludwig-Renn-Straße 33
              <br />
              12679 Berlin, Deutschland
            </div>
          </Link>
        </div>
        <Footer />
      </main>
    </div>
  );
}
