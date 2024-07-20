// app/blog/page.tsx
import Link from 'next/link';
import { getSortedPostsData } from '@/lib/blog';
import { NavBar } from '@/components/nav-bar';
import Footer from '@/components/footer';
import BlogPostCard from '@/components/BlogPostsCard';

type PostData = {
    id: string;
    title: string;
    date: string;
    description: string;
};

const Home = async () => {
  const allPostsData = getSortedPostsData();

  return (
    <div>
      <nav className="z-10 sticky top-0">
        <NavBar />
      </nav>
      <div className=" container items-center justify-between flex flex-col flex-wrap mx-auto  p-4">
        <h1 className="text-4xl font-bold mb-6">Blog</h1>
        <div className="my-Blog-grid-4"> {/* Flex container with wrap and gap */}
          {allPostsData.map(({ id, date, title, description }) => (
            <div key={id} className="flex-1 "> {/* Ensure minimum width */}
              <Link href={`/blog/${id}`} className="text-blue-500 hover:underline block">
                <BlogPostCard title={title} date={date} description={description} />
              </Link>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;