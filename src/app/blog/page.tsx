import { client } from '@/../tina/__generated__/client';
import BlogPostCard from '@/components/BlogPostsCard';
import Footer from '@/components/footer';
import { NavBar } from '@/components/nav-bar';
// app/blog/page.tsx
import Link from 'next/link';

const Home = async () => {
  const { data } = await client.queries.postConnection();

  // Überprüfen, ob data und postConnection vorhanden sind
  if (!data || !data.postConnection) {
    return <div>Error: No data available</div>;
  }

  // Überprüfen, ob edges vorhanden sind und eine Länge haben
  if (!data.postConnection.edges || data.postConnection.edges.length === 0) {
    return <div>No posts available</div>;
  }

  return (
    <div>
      <nav className="sticky top-0 z-10">
        <NavBar />
      </nav>
      <div className="container flex flex-col flex-wrap items-center justify-between p-4">
        <h1 className="mb-6 font-bold text-4xl">Blog</h1>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {' '}
          {/* Flexbox Grid Layout */}
          {data.postConnection.edges.map((postEdge) => {
            // Überprüfen, ob post und post.node vorhanden sind
            const post = postEdge?.node;
            if (!post) {
              return null;
            }

            return (
              <div key={post.id} className="flex flex-col">
                <Link
                  href={`/blog/posts/${post._sys.filename}`}
                  className="text-blue-500 hover:underline"
                >
                  <BlogPostCard
                    title={post.title || 'Untitled'}
                    date={post.date || 'No date'}
                    description={post.description || 'No description'}
                  />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
