import type { NextPage } from 'next';
import Image from 'next/image';
import { PostCard } from '../components/post-card';
import { ProjectCard } from '../components/project-card';
import { Container } from '../components/container';
import { getAllPosts } from '../lib/api';
import Post from '../types/post';
import s from '../styles/Home.module.css';
import { PROJECTS } from '../constants/projects';
import readingTime from 'reading-time';
import Link from 'next/link';
import { EXTRAS } from '../constants/extra';
import Head from 'next/head';
import { generateTitle } from '../lib/generateTitle';
import { generateRssFeed } from '../lib/generateRssFeed';

type Props = {
  allPosts: Post[];
};

const Home: NextPage<Props> = ({ allPosts }: Props) => {
  return (
    <>
      <Head>
        <title>{generateTitle()}</title>
        <meta
          name="description"
          content="Пишу про программирование, фронтенд, продуктивность и свою жизнь."
        />
      </Head>
      <Container as="main">
        <section>
          <h2 className="text-5xl lg:text-7xl font-bold mt-16 mb-10 tracking-tighter leading-tight text-zinc-900">
            Посты
          </h2>
          <div className={s['posts-grid']}>
            {allPosts &&
              allPosts.length > 0 &&
              allPosts
                .slice(0, 12)
                .map((post, index) => (
                  <PostCard
                    key={post.slug}
                    title={post.title}
                    description={post.summary}
                    slug={post.slug}
                    createdAt={post.date}
                    coverImage={post.image}
                    tags={post.tags}
                    orientation={index === 0 ? 'horizontal' : 'vertical'}
                    readingTime={Math.ceil(readingTime(post.content).minutes)}
                  />
                ))}
          </div>
          <div className="flex justify-center md:justify-end">
            <Link href="/posts">
              <a className="bg-blue-500 rounded px-10 py-3 text-white text-xl mt-8 align-center hover:bg-blue-600">
                Все посты →
              </a>
            </Link>
          </div>
        </section>
        <section>
          <h2 className="text-5xl lg:text-7xl font-bold mt-16 mb-10 tracking-tighter leading-tight text-zinc-900">
            Проекты
          </h2>
          <div className={s['projects-grid']}>
            {PROJECTS.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                image={project.image}
                url={project.url}
              />
            ))}
          </div>
          {/* <div className="flex justify-end">
            <Link href="/posts">
              <a
                type="button"
                className="bg-blue-500 rounded px-10 py-3 text-white text-xl mt-8 align-center"
              >
                Все проекты →
              </a>
            </Link>
          </div> */}
        </section>
        <section>
          <h2 className="text-5xl lg:text-7xl font-bold mt-16 mb-10 tracking-tighter leading-tight text-zinc-900">
            Остальное
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {EXTRAS.map(extra => (
              <div key={extra.url}>
                <Link href={extra.url}>
                  <a className="block relative aspect-video rounded-2xl mb-4 hover:shadow-xl transition-shadow transition-transform duration-200 rounded-xl hover:scale-[1.01]">
                    <Image
                      src={extra.image}
                      alt=""
                      layout="fill"
                      className="rounded-2xl"
                    />
                  </a>
                </Link>
                <Link href={extra.url}>
                  <a className="hover:underline hover:decoration-blue-500">
                    <h3 className="text-2xl font-semibold mb-2 text-zinc-900 hover:text-blue-500">
                      {extra.title}
                    </h3>
                  </a>
                </Link>
                <p className="text-lg">{extra.description}</p>
              </div>
            ))}
          </div>
        </section>
      </Container>
      <section className="bg-blue-500 py-20 mt-20">
        <div className="container mx-auto flex justify-center items-center gap-8 flex-col px-4 md:px-12 md:flex-row">
          <Image
            src="/images/avatar-1.jpg"
            alt=""
            width="200"
            height="200"
            layout="fixed"
            className="rounded-full footer__avatar"
          />
          <div className="md:w-1/3">
            <h4 className="text-4xl font-bold text-white my-6">
              Привет, меня зовут Толя!
            </h4>
            <p className="text-neutral-50 text-xl">
              Веду блог, пишу пет-проекты, работаю фронтенд разработчиком.
              Немного цифровой бомж.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;

export const getStaticProps = async () => {
  await generateRssFeed();
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'image',
    'tags',
    'content',
    'summary',
  ]);

  return {
    props: { allPosts },
  };
};
