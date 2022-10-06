type Trip = {
  place: string;
  date: string;
  linkToPost?: string;
};

type TripsByYear = {
  [key: string]: Trip[];
};

export const TRIPS_BY_YEAR: TripsByYear = {
  2022: [
    { place: 'Тбилиси, Грузия', date: 'Июль' },
    { place: 'Ереван, Армения', date: 'Июнь' },
    { place: 'Тбилиси, Грузия', date: 'Июнь' },
    { place: 'Бишкек, Кыргызстан', date: 'Июнь' },
    { place: 'Дубай, ОАЭ', date: 'Июнь' },
    { place: 'Бишкек, Кыргызстан', date: 'Июнь' },
    { place: 'Озеро Колсай, Казахстан', date: 'Апрель' },
    { place: 'Алматы, Казахстан', date: 'Март' },
    { place: 'Нур-Султан, Казахстан', date: 'Март' },
    { place: 'Омск, Россия', date: 'Март' },
    { place: 'Москва, Россия', date: 'Март' },
    { place: 'Москва, Россия', date: 'Январь' },
  ],
  2021: [
    { place: 'Москва, Россия', date: 'Декабрь' },
    { place: 'Владикавказ, Россия', date: 'Декабрь' },
    { place: 'Гора Казбек, Грузия ', date: 'Декабрь' },
    { place: 'Тбилиси, Грузия', date: 'Декабрь' },
    { place: 'Москва, Россия', date: 'Декабрь' },
  ],
  2016: [
    { place: 'Пусан, Южная Корея', date: 'Август' },
    { place: 'Сеул, Южная Корея', date: 'Июль — Август' },
  ],
};
