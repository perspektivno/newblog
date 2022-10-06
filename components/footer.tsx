import { useRouter } from 'next/router';
import cn from 'classnames';
import { Container } from './container';

export const Footer = () => {
  const router = useRouter();
  const isMainPage = router.pathname === '/';

  return (
    <footer className={cn('bg-zinc-800 py-8', { 'mt-20': !isMainPage })}>
      <Container>
        <p className="text-zinc-50 font-semibold text-xl">
          Блог Анатолия Гуляева
        </p>
        <p className="text-zinc-50 mt-2">
          Электронная почта:{' '}
          <a
            href="mailto:me@kaneru.me"
            className="underline hover:text-blue-500"
          >
            me@kaneru.me
          </a>
        </p>
        <p className="text-zinc-50 mt-2">© 2015–2022</p>
      </Container>
    </footer>
  );
};
