import Head from 'next/head';
import Link from 'next/link';
import { Container } from '../components/container';
import { generateTitle } from '../lib/generateTitle';

export default function Custom404() {
  return (
    <>
      <Head>
        <title>{generateTitle('404 - Страница не найдена')}</title>
      </Head>
      <Container className="flex-1" as="main">
        <h1 className="text-5xl lg:text-7xl font-bold mt-16 mb-10 tracking-tighter leading-tight text-zinc-900 text-center">
          404 - Страница не найдена
        </h1>
        <p className="text-blue-600 text-center text-2xl font-medium hover:text-blue-500 underline">
          <Link href="/">
            <a>← Хочу обратно домой</a>
          </Link>
        </p>
      </Container>
    </>
  );
}
