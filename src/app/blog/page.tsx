// app/blog/page.tsx
import Link from 'next/link';
import { getSortedPostsData, PostData } from '@/lib/blog';
import { NavBar } from '@/components/nav-bar';
import Footer from '@/components/footer';
import BlogPostCard from '@/components/BlogPostsCard';

const Home = async () => {
  const allPostsData: Array<PostData> = getSortedPostsData(); // Ensure async data fetching

  return (
    <div>
      <nav className="z-10 sticky top-0">
        <NavBar />
      </nav>
      <div className="container items-center justify-between flex flex-col flex-wrap  p-4">
        <h1 className="text-4xl font-bold mb-6">Blog</h1>
        <div className="my-Blog-grid-4"> {/* Flex container with wrap and gap */}
          {allPostsData
            .filter(({ title, date, description }) => title && date && description) // Filter posts
            .map(({ id, date, title, description }) => (
              <div key={id} className="flex-1"> {/* Ensure minimum width */}
                <Link href={`/blog/${id}`} className="text-blue-500 hover:underline block" legacyBehavior passHref>
                  <BlogPostCard
                    title={title!}
                    date={date!}
                    description={description!}
                  />
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