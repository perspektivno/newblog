import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Header } from '../components/header';
import { Footer } from '../components/footer';
import Head from 'next/head';
import { useRouter } from 'next/router';

const isProd = process.env.NODE_ENV === 'production';

function MyApp({ Component, pageProps }: AppProps) {
  const canonicalURL = `https://kaneru.me${useRouter().asPath}`;
  return (
    <>
      <Head>
        <link rel="manifest" href="/manifest.webmanifest" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="canonical" href={canonicalURL} />
        {isProd && (
          <script
            data-goatcounter="https://kaneru.goatcounter.com/count"
            async
            src="//gc.zgo.at/count.js"
          />
        )}
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
