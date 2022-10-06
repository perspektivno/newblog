import Head from 'next/head';
import { Container } from '../components/container';
import { generateTitle } from '../lib/generateTitle';

const AboutPage = () => {
  return (
    <>
      <Head>
        <title>{generateTitle('Обо мне')}</title>
        <meta
          name="description"
          content="Пишу про программирование, фронтенд, продуктивность и свою жизнь."
        />
      </Head>
      <Container className="mb-10 flex-1">
        <h1 className="text-5xl lg:text-7xl font-bold my-8 tracking-tighter leading-tight text-zinc-900">
          Обо мне
        </h1>
        <div className="prose lg:prose-xl prose-zinc prose-a:text-blue-600 hover:prose-a:text-blue-500">
          <p>Привет! Меня зовут Анатолий Гуляев.</p>
          <p>Работаю фронтенд разработчиком (React).</p>
          <p>Немного путешествую, пилю пет-проекты и веду этот блог.</p>
          <h2>Ссылки</h2>
          <ul>
            <li>
              эл. почта: <a href="mailto:me@kaneru.me">me@kaneru.me</a>
            </li>
            <li>
              <a href="https://t.me/kaneru">телеграм</a>
            </li>
            <li>
              <a href="https://twitter.com/kaneru__">твиттер</a>
            </li>
            <li>
              <a href="https://github.com/kaneru">гитхаб</a>
            </li>
            <li>
              <a href="https://letterboxd.com/kaneru/">леттербоксд</a>
            </li>
            <li>
              <a href="https://www.flickr.com/photos/kaneru">фликр</a>
            </li>
          </ul>
        </div>
      </Container>
    </>
  );
};

export default AboutPage;
