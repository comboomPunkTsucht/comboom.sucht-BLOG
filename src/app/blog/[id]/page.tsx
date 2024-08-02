import { getAllPostIds, getPostData, PostData } from '@/lib/blog';
import { notFound } from 'next/navigation';
import { NavBar } from '@/components/nav-bar';
import Footer from '@/components/footer';

export async function generateStaticParams() {
  const paths = getAllPostIds();
  return paths.map((path) => ({
    id: path.id,
  }));
}

const Post = async ({ params }: { params: PostData }) => {
  const postData: PostData | null = await getPostData(params.id);

  if (!postData) {
    notFound();
  }

  // Check if the date exists before using it
  const dateStr = postData.date || '';
  const dateObj = new Date(dateStr);
  const day = dateObj.getDate().toString().padStart(2, '0');
  const month = (dateObj.getMonth() + 1).toString().padStart(2, '0');
  const year = dateObj.getFullYear().toString();

  return (
    <div>
      <nav className="z-10 sticky top-0 top">
        <NavBar />
      </nav>
      <main className="flex-grow flex flex-col items-center justify-center p-4">
        <article className="prose mx-auto">
          <h1 className="text-4xl font-bold text-center">{postData.title}</h1>
          <div className="text-base text-gray-500 text-center">
            {day + "/" + month + "/" + year}
          </div>
          <div
            dangerouslySetInnerHTML={{ __html: postData.contentHtml || '' }}
            className="flex-grow flex flex-col items-center justify-center p-4"
          />
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default Post;