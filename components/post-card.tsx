import Image from 'next/image';
import Link from 'next/link';
import cn from 'classnames';
import { parseTags } from '../lib/parseTags';
import { minutesToHuman } from '../lib/minutesToHuman';
import { formatDate } from '../lib/formatDate';

type Props = {
  title: string;
  description?: string;
  slug: string;
  createdAt: string;
  coverImage: string;
  tags: string | string[];
  readingTime: number;
  orientation?: 'horizontal' | 'vertical';
};

export const PostCard = ({
  title,
  description,
  slug,
  createdAt,
  coverImage,
  tags,
  readingTime,
  orientation = 'vertical',
}: Props) => {
  return (
    <article
      className={cn('flex gap-8', {
        'flex-col': orientation === 'vertical',
        'flex-col md:flex-row': orientation === 'horizontal',
      })}
    >
      <Link href={`/${slug}`}>
        <a
          aria-label={title}
          className={cn(
            'block relative aspect-video hover:shadow-xl transition-shadow transition-transform duration-200 rounded-xl hover:scale-[1.01]',
            {
              'w-full md:w-1/2': orientation === 'horizontal',
            },
          )}
        >
          <Image
            src={coverImage || '/images/no-image.jpg'}
            alt=""
            layout="fill"
            className="object-cover rounded-xl"
          />
        </a>
      </Link>
      <div className={cn({ 'w-full md:w-1/2': orientation === 'horizontal' })}>
        <ul className="flex flex-wrap gap-2 mb-2">
          {parseTags(tags).map(tag => (
            <li
              key={tag}
              className="bg-blue-200 rounded-2xl px-3 py-0.5 text-zinc-700 text-xs md:text-base"
            >
              {tag}
            </li>
          ))}
        </ul>
        <Link href={`/${slug}`}>
          <a className="hover:underline hover:decoration-blue-500 break-words">
            <h3 className="text-2xl font-semibold mb-2 text-zinc-900 hover:text-blue-500 break-words">
              {title}
            </h3>
          </a>
        </Link>
        {description ? (
          <p className="mb-4 text-lg text-zinc-700">{description}</p>
        ) : null}
        <p className="text-zinc-500">
          {formatDate(createdAt, true)} ∙ {readingTime}{' '}
          {minutesToHuman(readingTime)} чтения
        </p>
      </div>
    </article>
  );
};
