import Footer from "@/components/footer";
import { NavBar } from "@/components/nav-bar";
// app/rss/page.tsx
import Link from "next/link";

const RSSInfo = () => {
  return (
    <div>
      <nav className="top sticky top-0 z-10">
        <NavBar />
      </nav>
      <div className="flex flex-col flex-wrap items-center justify-between">
        <div className="container mx-auto my-10">
          <h1 className="mb-6 font-bold text-4xl">Was ist RSS?</h1>
          <p className="mb-4">
            RSS (Really Simple Syndication) ist ein Web-Feed-Format, das
            verwendet wird, um regelmäßig aktualisierte Informationen wie
            Blog-Posts, Nachrichten und andere Inhalte in einem standardisierten
            Format zu liefern. Mit einem RSS-Feed können Sie Inhalte von
            verschiedenen Websites an einem Ort lesen, ohne jede Website einzeln
            besuchen zu müssen.
          </p>
          <h2 className="mb-4 font-bold text-2xl">
            Wie richte ich einen RSS-Reader ein?
          </h2>
          <ol className="mb-4 list-inside list-decimal">
            <li className="mb-2">
              Wählen Sie einen RSS-Reader. Beliebte Optionen sind Feedly,
              Inoreader und The Old Reader.
            </li>
            <li className="mb-2">
              Erstellen Sie ein Konto auf der Website des RSS-Readers oder laden
              Sie die App herunter.
            </li>
            <li className="mb-2">
              Suchen Sie nach einer Option zum Hinzufügen eines neuen Feeds.
              Dies ist normalerweise ein Plus-Symbol oder eine Schaltfläche
              &quot;Add Feed&quot;.
            </li>
            <li className="mb-2">
              Geben Sie die URL des RSS-Feeds ein, den Sie abonnieren möchten.
              Für unseren Blog lautet die URL:{" "}
              <Link
                href={`${process.env.HOST_URL || "http://localhost:3000"}/api/rss`}
                className="text-blue-500 hover:underline"
                legacyBehavior
                passHref
              >
                {`${process.env.HOST_URL || "http://localhost:3000"}/api/rss`}
              </Link>
            </li>
            <li className="mb-2">
              Bestätigen Sie die Eingabe. Der RSS-Reader beginnt nun, die
              neuesten Blog-Posts und Inhalte aus unserem Feed anzuzeigen.
            </li>
          </ol>
          <p className="mb-4">
            Mit einem RSS-Reader können Sie bequem auf dem Laufenden bleiben und
            unsere neuesten Blog-Posts an einem Ort lesen.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RSSInfo;
