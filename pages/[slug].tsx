import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import { getPostBySlug, getAllPosts } from '../lib/api';
import Head from 'next/head';
import markdownToHtml from '../lib/markdownToHtml';
import PostType from '../types/post';
import { Container } from '../components/container';
import { parseTags } from '../lib/parseTags';
import { NextPage } from 'next';
import { formatDate } from '../lib/formatDate';
import { minutesToHuman } from '../lib/minutesToHuman';
import readingTime from 'reading-time';
import { generateTitle } from '../lib/generateTitle';

type Props = {
  post: PostType;
  morePosts: PostType[];
  preview?: boolean;
};

const Post: NextPage<Props> = ({ post, morePosts, preview }: Props) => {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  const timeToRead = Math.ceil(readingTime(post.content).minutes);
  return (
    <Container className="flex-1">
      {router.isFallback ? (
        <p>Loading…</p>
      ) : (
        <>
          <Head>
            <title>{generateTitle(post.title)}</title>
            <meta property="og:type" content="website" />
            <meta
              property="og:url"
              content={`https://kaneru.me/${post.slug}`}
            />
            <meta property="og:title" content={post.title} />
            {post.image && (
              <meta
                property="og:image"
                content={`https://kaneru.me${post.image}`}
              />
            )}
            {post.summary && (
              <meta property="og:description" content={post.summary} />
            )}
            <meta property="og:site_name" content="Блог Анатолия Гуляева" />
            <meta property="og:locale" content="ru_RU" />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:creator" content="@kaneru__" />
            <meta
              name="twitter:url"
              content={`https://kaneru.me/${post.slug}`}
            />
            <meta name="twitter:title" content={post.title} />
            {post.summary && (
              <meta name="twitter:description" content={post.summary} />
            )}
            {post.image && (
              <meta
                name="twitter:image"
                content={`https://kaneru.me${post.image}`}
              />
            )}
          </Head>
          <article>
            <header className="mb-16">
              <h1 className="text-5xl lg:text-7xl font-bold my-8 tracking-tighter leading-tight break-words">
                {post.title}
              </h1>
              <p className="text-lg text-zinc-500 mb-2">
                {formatDate(post.date, true)} ∙ {timeToRead}{' '}
                {minutesToHuman(timeToRead)} чтения
              </p>
              <ul className="flex flex-wrap gap-2 mb-2 list-none !p-0 !mb-0">
                {parseTags(post.tags).map(tag => (
                  <li
                    key={tag}
                    className="bg-blue-200 rounded-2xl px-3 py-0.5 text-zinc-700"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </header>
            <div
              dangerouslySetInnerHTML={{ __html: post.content }}
              className="prose lg:prose-xl prose-zinc prose-a:text-blue-600 hover:prose-a:text-blue-500"
            />
          </article>
        </>
      )}
    </Container>
  );
};

export default Post;

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'content',
    'tags',
    'image',
    'summary',
  ]);

  const content = await markdownToHtml(post.content || '');

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug']);

  return {
    paths: posts.map(post => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
