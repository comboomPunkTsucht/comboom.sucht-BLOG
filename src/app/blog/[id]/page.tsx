// app/blog/[id]/page.tsx
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

  return (
    <div>
      <nav className="z-10 sticky top-0 top">
        <NavBar />
      </nav>
      <div className="items-center justify-between flex flex-col flex-wrap">
        <article className="prose mx-auto">
          <h1 className="text-3xl font-bold">{postData!.title}</h1>
          <div className="text-gray-500">{postData!.date}</div>
          <div dangerouslySetInnerHTML={{ __html: postData!.contentHtml || '' }} />
        </article>
      </div>
      <Footer />
    </div>
  );
};

export default Post;