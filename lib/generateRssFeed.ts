import fs from 'fs';
import { Feed } from 'feed';
import { getAllPosts } from './api';
import markdownToHtml from './markdownToHtml';

export const generateRssFeed = async () => {
  const posts = getAllPosts([
    'title',
    'date',
    'slug',
    'image',
    'tags',
    'content',
    'summary',
  ]);
  const siteURL = 'https://kaneru.me';
  const date = new Date();
  const author = {
    name: 'Анатолий Гуляев',
    email: 'me@kaneru.me',
    link: siteURL,
  };

  const feed = new Feed({
    title: 'Блог Анатолия Гуляева',
    description:
      'Пишу про программирование, фронтенд, продуктивность и свою жизнь.',
    id: siteURL,
    link: siteURL,
    image: `${siteURL}/images/title_image.png`,
    favicon: `${siteURL}/favicon.png`,
    copyright: `Все права защищены ${date.getFullYear()}, Анатолий Гуляев`,
    updated: date,
    feedLinks: {
      rss2: `${siteURL}/feed.xml`,
      json: `${siteURL}/feed.json`,
      atom: `${siteURL}/atom.xml`,
    },
    author,
  });

  posts.forEach(async post => {});

  for (const post of posts) {
    const url = `${siteURL}/${post.slug}`;
    const content = await markdownToHtml(post.content || '');
    feed.addItem({
      title: post.title,
      id: url,
      link: url,
      description: post.summary,
      content,
      author: [author],
      contributor: [author],
      date: new Date(post.date),
    });
  }

  fs.writeFileSync('./public/feed.xml', feed.rss2());
  fs.writeFileSync('./public/atom.xml', feed.atom1());
  fs.writeFileSync('./public/feed.json', feed.json1());
};
