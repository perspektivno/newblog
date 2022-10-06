import Link from 'next/link';
import cn from 'classnames';
import { Container } from '../components/container';
import { LIFELIST } from '../constants/lifelist';
import { generateTitle } from '../lib/generateTitle';
import Head from 'next/head';

const LifelistPage = () => {
  return (
    <>
      <Head>
        <title>{generateTitle('Лайфлист')}</title>
        <meta
          name="description"
          content="Начал вести Лайфлист в 2022 году. Лайфлист — это список вещей, которые я ещё не делал или часто откладываю."
        />
      </Head>
      <Container className="mb-10 flex-1">
        <h1 className="text-5xl lg:text-7xl font-bold my-8 tracking-tighter leading-tight text-zinc-900">
          Лайфлист
        </h1>
        <div className="prose lg:prose-xl prose-zinc prose-a:text-blue-600 hover:prose-a:text-blue-500">
          <p>
            Считаю, что в жизни надо попробовать «всё» (в рамках закона,
            конечно). Заметил, что ищу кучу отговорок, чтобы попробовать новое.
            Лайфлист — это регулярно пополняющийся список вещей, которых я ещё
            не делал или долго откладывал.
          </p>
          <figure>
            <blockquote>
              Узнайте, как устроен остальной мир. Разнообразие – стоящая вещь.
            </blockquote>
            <figcaption>
              Ричард Фейнман.{' '}
              <i className="font-serif">Вы, конечно, шутите, мистер Фейнман!</i>
            </figcaption>
          </figure>
          <p>
            Это вторая попытка сделать такой Лайфлист. Не помню, почему в первый
            раз не получилось. В этот раз хочу документировать всё в блоге.
            Иначе зачем он создавался?
          </p>
          <p>
            Увидел идею Лайфлиста у{' '}
            <a href="https://skaplichniy.ru/note/lifelist/">
              Сергея Капличного
            </a>
            .
          </p>
          <ol className="list-decimal">
            {LIFELIST.map((item, index) => (
              <li
                key={index}
                className={cn('text-zinc-700 text-lg md:text-xl mb-4', {
                  'text-zinc-400': item.isCompleted,
                })}
              >
                {item.isCompleted ? (
                  <>
                    {item.linkToPost ? (
                      <Link href={item.linkToPost}>
                        <a className="underline">{item.title}</a>
                      </Link>
                    ) : (
                      item.title
                    )}
                    <span className="ml-2">✅</span>
                  </>
                ) : (
                  item.title
                )}
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </>
  );
};

export default LifelistPage;
