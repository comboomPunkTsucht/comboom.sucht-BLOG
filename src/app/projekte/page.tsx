"use client"
import React from "react";
import ProjektCard from "@/components/projekt-card";
import Footer from "@/components/footer";
import { NavBar } from "@/components/nav-bar";

export default function Home() {
  return (
    <div>
      <nav className="z-10 sticky top-0 top"><NavBar /></nav>
      <main className="p-4">
        <h1 className="text-center text-6xl gap-8 p-8">Projekte</h1>

        <h2 className="text-center text-5xl gap-8 p-8">Gepinte Projekte</h2>


        <div className="my-Project-grid-3">
          <ProjektCard
            ProjektImage="/pictures/my_Portfolio.jpeg"
            ProjektImageAlt="Portfolio Bild"
            ProjektImageBgColor=""
            ProjektTitle="Portfolio"
            ProjektBadges={["FOSS","WEB","NEW"]}
            ProjektLink="https://github.com/mcpeapsUnterstrichHD/mcpeapsUnterstrichHD">Das Projekt zu diesem Portfolio.</ProjektCard>
          <ProjektCard
            ProjektImage="/pictures/OSZimt-Logo-l.png"
            ProjektImageAlt="Grosßes Logo vom OSZ IMT"
            ProjektImageBgColor="bg-white"
            ProjektTitle="Schul Repository"
            ProjektBadges={["FOSS","SCHOOL"]}
            ProjektLink="https://github.com/comboomPunkTsucht/OSZIMT-repo-ITA12_aps">Das ist Das Repository mit meinen aufgaben aus meine Ausbildung.</ProjektCard>
          <ProjektCard
            ProjektImage="/pictures/searxng.png"
            ProjektImageAlt="SearxNG Logo"
            ProjektImageBgColor=""
            ProjektTitle="Meine eigene Suchmaschine"
            ProjektBadges={["FOSS","WEB","NEW", "SEARCH ENGINE", "DOCKER"]}
            ProjektLink="https://github.com/mcpeapsUnterstrichHD/searxng">Das Projekt zu Meiner Suchmaschine basiernd auf SearxNG</ProjektCard>
        </div>

        <h2 className="text-center text-4xl gap-8 p-8">Alle Projekte</h2>

            <div className="my-Project-grid-4">
            <ProjektCard
            ProjektImage="/pictures/my_Portfolio.jpeg"
            ProjektImageAlt="Portfolio Bild"
            ProjektImageBgColor=""
            ProjektTitle="Portfolio"
            ProjektBadges={["FOSS","WEB","NEW"]}
            ProjektLink="https://github.com/mcpeapsUnterstrichHD/mcpeapsUnterstrichHD">Das Projekt zu diesem Portfolio.</ProjektCard>
          <ProjektCard
            ProjektImage="/pictures/OSZimt-Logo-l.png"
            ProjektImageAlt="Grosßes Logo vom OSZ IMT"
            ProjektImageBgColor="bg-white"
            ProjektTitle="Schul Repository"
            ProjektBadges={["FOSS","SCHOOL"]}
            ProjektLink="https://github.com/comboomPunkTsucht/OSZIMT-repo-ITA12_aps">Das ist Das Repository mit meinen aufgaben aus meine Ausbildung.</ProjektCard>
          <ProjektCard
            ProjektImage="/pictures/OSZimt-Logo-l.png"
            ProjektImageAlt="Grosßes Logo vom OSZ IMT"
            ProjektImageBgColor="bg-white"
            ProjektTitle="Klassen Website"
            ProjektBadges={["FOSS","SCHOOL", "WEB", "MARKDOWN", "WIKI"]}
            ProjektLink="https://github.com/comboomPunkTsucht/OSZ_ITA12_Doc">Das ist die Webseite der Klassen ITA 12 in der ich ich am OSZ IMT gewesen bin.</ProjektCard>
          <ProjektCard
            ProjektImage="/pictures/Klassen_App_Icon_iOS_macOS_iPadOS.png"
            ProjektImageAlt="App Icon der Klassen App"
            ProjektImageBgColor=""
            ProjektTitle="Klassen App"
            ProjektBadges={["FOSS","SCHOOL", "APP", "iOS", "SWIFT", "SWIFTUI", "HUB"]}
            ProjektLink="https://github.com/comboomPunkTsucht/ITA-12_App">Das ist die App der Klassen ITA 12 in der ich ich am OSZ IMT gewesen bin.</ProjektCard>
          <ProjektCard
            ProjektImage="/pictures/ssqlr.png"
            ProjektImageAlt="Simple SQL Runner"
            ProjektImageBgColor="bg-black"
            ProjektTitle="Simple SQL Runner"
            ProjektBadges={["FOSS","SCHOOL", "JAVA", "SQL"]}
            ProjektLink="https://github.com/comboomPunkTsucht/Simple-SQL-Runner">Das ist ein GUI-Programm zum ausführen und ausgeben von SQL Statements</ProjektCard>
          <ProjektCard
            ProjektImage="/pictures/searxng.png"
            ProjektImageBgColor=""
            ProjektImageAlt="SearxNG Logo"
            ProjektTitle="Meine eigene Suchmaschine"
            ProjektBadges={["FOSS","WEB","NEW", "SEARCH ENGINE", "DOCKER"]}
            ProjektLink="https://github.com/mcpeapsUnterstrichHD/searxng">Das Projekt zu Meiner Suchmaschine basiernd auf SearxNG</ProjektCard>
          <ProjektCard
            ProjektImage="/pictures/logo.PNG"
            ProjektImageAlt="mcpeaps_HD Logo"
            ProjektImageBgColor=""
            ProjektTitle="Meine eigenen Dotfiles"
            ProjektBadges={["FOSS","WEB","NEW", "Konfiguration", "DOTFILES"]}
            ProjektLink="https://github.com/mcpeapsUnterstrichHD/dotfiles">Das Repository für meine Dotfiles.</ProjektCard>
          <ProjektCard
            ProjektImage="/pictures/Logo-transparet.PNG"
            ProjektImageAlt="comboom.sucht Logo"
            ProjektImageBgColor="bg-black"
            ProjektTitle="comboom.sucht Website"
            ProjektBadges={["FOSS", "WEB", "MARKDOWN", "WIKI"]}
            ProjektLink="https://github.com/comboomPunkTsucht/comboom.sucht-BLOG">Das ist die Webseite meiner Freundes Gruppe.</ProjektCard>
          <ProjektCard
            ProjektImage="/pictures/Logo-transparet.PNG"
            ProjektImageAlt="comboom.sucht Logo"
            ProjektImageBgColor="bg-black"
            ProjektTitle="comboom.sucht App"
            ProjektBadges={["FOSS", "APP", "iOS", "SWIFT", "SWIFTUI", "HUB"]}
            ProjektLink="https://github.com/comboomPunkTsucht/comboomPunkTsucht-IOS-macOS-App">Das ist die App meiner Freundes Gruppe.</ProjektCard>

            </div>
            <Footer />
      </main>
    </div>
    );
}