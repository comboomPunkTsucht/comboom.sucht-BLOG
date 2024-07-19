'use client'
import Footer from "@/components/footer";
import { NavBar } from "@/components/nav-bar";
import ProjektCard from "@/components/projekt-card";
export default function Home() {
    const today = new Date();
  const birthday = new Date("2003-06-06");
  var age = today.getFullYear() - birthday.getFullYear();
  const m = today.getMonth() - birthday.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthday.getDate())) {
    age--;
  }

  return (
    <div>
      <nav className="z-10 sticky top-0 top"><NavBar /></nav>
      <main className="p-4">
        <h1 className="text-center text-xl py-1">Hallo 👋</h1>
        <h1 className="text-center text-5xl font-bold">Ich bin Fabian Aps</h1>
        <h1 className="text-center text-3xl py-3 font-bold">ITler/DJ/Producher</h1>

        <a className="w-3/4 text-center">Ich bin ein {age} jähriger ITler/DJ/Producher und ich liebe es Software zu entwikeln aber durch mein Praktikum bei der KfW Bankengruppe hat mir gezeigt, dass mir Anwendungsbetreung auch nicht schwer liegt, denoch mach ich die Entwicklung gerne als Hobby. Musik ist dabei auch eine Leidenschaft von mir, egal ab hören oder Produzieren. </a>

        	<h2 className="text-center text-2xl py-2 font-bold">Meine Playlist:</h2>
	        <div className="w-full flex flex-wrap flex-row flex-auto items-center justify-center">
              <iframe
                  allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
                  width="95%"
                  height="450"
                  style={{ maxWidth: "100%", overflow: "hidden", borderRadius: "10px" }}
                  sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
                  src="https://embed.music.apple.com/de/playlist/favorite/pl.u-aZb0kXDFP7zBoV2"
                  frameBorder="0"
              ></iframe>
          </div>
	        <h2 className="text-center text-2xl py-2 font-bold">Mein aktueller Song:</h2>
          <div className="w-full flex flex-wrap flex-row flex-auto items-center justify-center">
              <iframe
                  width="95%"
                  height="52"
                  src="https://odesli.co/embed/?url=https%3A%2F%2Fsong.link%2Ffestival_dream&theme=dark"
                  frameBorder="0"
                  allowFullScreen
                  sandbox="allow-same-origin allow-scripts allow-presentation allow-popups allow-popups-to-escape-sandbox"
                  allow="clipboard-read; clipboard-write"
              ></iframe>
          </div>


        <h2 className="text-center text-2xl gap-8 p-8">Gepinte Projekte</h2>

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

            <Footer />
      </main>
    </div>
    );
  }