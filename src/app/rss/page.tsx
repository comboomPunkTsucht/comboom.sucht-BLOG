// app/rss/page.tsx
import Link from 'next/link';
import { NavBar } from '@/components/nav-bar';
import Footer from '@/components/footer';

const RSSInfo = () => {
  return (
    <div>
      <nav className="z-10 sticky top-0 top">
        <NavBar />
          </nav>
          <div className="items-center justify-between flex flex-col flex-wrap">
      <div className="container mx-auto my-10">
        <h1 className="text-4xl font-bold mb-6">Was ist RSS?</h1>
        <p className="mb-4">
          RSS (Really Simple Syndication) ist ein Web-Feed-Format, das verwendet wird, um regelmäßig aktualisierte Informationen wie Blog-Posts, Nachrichten und andere Inhalte in einem standardisierten Format zu liefern. Mit einem RSS-Feed können Sie Inhalte von verschiedenen Websites an einem Ort lesen, ohne jede Website einzeln besuchen zu müssen.
        </p>
        <h2 className="text-2xl font-bold mb-4">Wie richte ich einen RSS-Reader ein?</h2>
        <ol className="list-decimal list-inside mb-4">
          <li className="mb-2">Wählen Sie einen RSS-Reader. Beliebte Optionen sind Feedly, Inoreader und The Old Reader.</li>
          <li className="mb-2">Erstellen Sie ein Konto auf der Website des RSS-Readers oder laden Sie die App herunter.</li>
          <li className="mb-2">Suchen Sie nach einer Option zum Hinzufügen eines neuen Feeds. Dies ist normalerweise ein Plus-Symbol oder eine Schaltfläche "Add Feed".</li>
          <li className="mb-2">Geben Sie die URL des RSS-Feeds ein, den Sie abonnieren möchten. Für unseren Blog lautet die URL: <Link href="/rss.xml" className="text-blue-500 hover:underline">/rss.xml</Link></li>
          <li className="mb-2">Bestätigen Sie die Eingabe. Der RSS-Reader beginnt nun, die neuesten Blog-Posts und Inhalte aus unserem Feed anzuzeigen.</li>
        </ol>
        <p className="mb-4">Mit einem RSS-Reader können Sie bequem auf dem Laufenden bleiben und unsere neuesten Blog-Posts an einem Ort lesen.</p>
        <Link href="/blog" className="text-blue-500 hover:underline">Zurück zu den Blog-Posts</Link>
              </div>
              </div>
      <Footer />
    </div>
  );
};

export default RSSInfo;