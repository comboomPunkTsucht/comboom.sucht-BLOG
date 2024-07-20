// app/blog/page.tsx
import Link from 'next/link';
import { getSortedPostsData } from '@/lib/blog';
import { NavBar } from '@/components/nav-bar';
import Footer from '@/components/footer';

type PostData = {
  id: string;
  title: string;
  date: string;
};

const Home = async () => {
  const allPostsData = getSortedPostsData();

  return (
    <div>
      <nav className="z-10 sticky top-0 top">
        <NavBar />
      </nav>
      <div className="items-center justify-between flex flex-col flex-wrap"></div>
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-6">Blog</h1>
        <ul>
          {allPostsData.map(({ id, date, title }) => (
            <li key={id} className="mb-4">
              <Link href={`/blog/${id}`} className="text-blue-500 hover:underline">
                {title}
              </Link>
              <br />
              <small className="text-gray-500">{date}</small>
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default Home;