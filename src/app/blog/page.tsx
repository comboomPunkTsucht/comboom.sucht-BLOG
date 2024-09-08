// app/blog/page.tsx
import Link from 'next/link';
import { client } from '@/../.tina/__generated__/client';
import { NavBar } from '@/components/nav-bar';
import Footer from '@/components/footer';
import BlogPostCard from '@/components/BlogPostsCard';

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
      <nav className="z-10 sticky top-0">
        <NavBar />
      </nav>
      <div className="container items-center justify-between flex flex-col flex-wrap p-4">
        <h1 className="text-4xl font-bold mb-6">Blog</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"> {/* Flexbox Grid Layout */}
          {data.postConnection.edges.map((postEdge) => {
            // Überprüfen, ob post und post.node vorhanden sind
            const post = postEdge?.node;
            if (!post) {
              return null;
            }

            return (
              <div key={post.id} className="flex flex-col">
                <Link href={`/blog/posts/${post._sys.filename}`} className="text-blue-500 hover:underline">
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