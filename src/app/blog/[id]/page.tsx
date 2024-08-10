import { getAllPostIds, getPostData, PostData } from '@/lib/blog';
import { notFound } from 'next/navigation';
import { NavBar } from '@/components/nav-bar';
import Footer from '@/components/footer';
import AuthorBadge from '@/components/authorbadge';
import axios from 'axios';

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
  let auther_username = ' ';
  auther_username = postData.author!;

  // Access the environment variables for Auth0
  const yourDomain = process.env.AUTH0_ISSUER_BASE_URL;
  const yourMgmtApiAccessToken = process.env.AUTH0_MGMT_API_ACCESS_TOKEN;

  // Define the options for the Axios request
  const options = {
    method: 'GET',
    url: `${yourDomain}/api/v2/users`,
    params: { q: `nickname:"${auther_username}"`, search_engine: 'v3' },
    headers: { authorization: `Bearer ${yourMgmtApiAccessToken}` }
  };

  // Make the request and wait for the response
  let author_name = '';
  let author_email = '';
  let author_picture = '';
  try {
    const response = await axios.request(options);
    const author_response_data = response.data[0]; // Assuming the first result is the correct one
    author_name = author_response_data.name;
    author_email = author_response_data.email;
    author_picture = author_response_data.picture;
  } catch (error) {
    console.error(error);
    notFound(); // Handle errors appropriately
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
      <main className="flex-grow flex flex-col items-start justify-start p-4">
        <article className="prose mx-auto">
          <h1 className="text-4xl font-bold text-start">{postData.title}</h1>
          <div className="text-base text-gray-500 text-start">
            {day + "/" + month + "/" + year}
          </div>
          <div className='flex items-start justify-start'>
            <AuthorBadge
              name={author_name}
              githubUserName={auther_username}
              email={author_email}
              href={'https://github.com/' + auther_username}
              image={{
                src: author_picture,
                alt: author_name
              }}
            />
          </div>
          <div
            dangerouslySetInnerHTML={{ __html: postData.contentHtml || '' }}
            className="flex-grow flex flex-col p-4 items-start justify-start"
          />
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default Post;