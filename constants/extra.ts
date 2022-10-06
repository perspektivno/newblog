type Extra = {
  title: string;
  description: string;
  url: string;
  image: string;
};

export const EXTRAS: Extra[] = [
  {
    title: 'Лайфлист',
    description: `Начал вести Лайфлист в 2022 году.
    Лайфлист — это список вещей, которые я ещё не делал или часто откладываю.
    `,
    url: '/lifelist',
    image: '/images/_extra/lifelist.jpg',
  },
  {
    title: 'Путешествия',
    description: 'Здесь был Толя. Документирую свои путешествия.',
    url: '/travel',
    image: '/images/_extra/travel.jpg',
  },
];
