import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import cn from 'classnames';
import { Container } from './container';
import { useState } from 'react';

const HEADER_MENU_ITEMS = [
  { id: 0, title: 'Посты', url: '/posts' },
  // { id: 1, title: 'Проекты', url: '/projects' },
  { id: 2, title: 'Лайфлист', url: '/lifelist' },
  { id: 3, title: 'Путешествия', url: '/travel' },
  // { id: 4, title: 'Вишлист', url: '/wishlist' },
  { id: 5, title: 'Обо мне', url: '/about' },
];

export const Header = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const router = useRouter();
  const isMainPage = router.pathname === '/';

  return (
    <>
      <header
        className={cn(
          {
            'absolute z-10 top-0 left-0 right-0': isMainPage,
          },
          {
            'bg-zinc-800 mb-10': !isMainPage,
          },
          {
            ['bg-zinc-800 lg:bg-transparent']: isMenuOpened && isMainPage,
          },
        )}
      >
        <Container className="py-8">
          <nav className="flex flex-wrap gap-8 items-center lg:items-end justify-between lg:justify-start">
            <Link href="/">
              <a
                className={cn('text-zinc-50 hover:text-blue-500', {
                  'hover:text-zinc-200': isMainPage,
                })}
              >
                <h1 className="text-xl md:text-3xl font-bold">
                  Блог Анатолия Гуляева
                </h1>
              </a>
            </Link>
            <button
              type="button"
              className="inline-flex items-center p-2 ml-3 text-sm text-zinc-50 rounded-lg lg:hidden hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-gray-200"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={() => setIsMenuOpened(!isMenuOpened)}
            >
              <span className="sr-only">Открыть навигационное меню</span>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <svg
                className="hidden w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
            <div
              className={cn('w-full lg:block lg:w-auto', {
                hidden: !isMenuOpened,
              })}
              id="mobile-menu"
            >
              <ul className="flex flex-col gap-6 lg:flex-row">
                {HEADER_MENU_ITEMS.map(item => (
                  <li key={item.id} className="text-lg font-medium">
                    <Link href={item.url}>
                      <a
                        className={cn(
                          'text-zinc-50 hover:underline hover:text-blue-500',
                          {
                            'hover:text-zinc-200': isMainPage,
                          },
                        )}
                      >
                        {item.title}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </Container>
      </header>
      {router.pathname === '/' ? (
        <div className="w-full coverMain relative">
          <Image
            src="/images/title_image.jpg"
            alt=""
            layout="fill"
            className="object-cover"
            quality={100}
          />
          <p className="absolute text-4xl md:text-6xl md:text-8xl font-black text-white top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            kaneru.me
          </p>
        </div>
      ) : null}
    </>
  );
};
