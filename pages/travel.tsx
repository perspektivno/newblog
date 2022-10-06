import { NextPage } from 'next';
import Head from 'next/head';
import { Container } from '../components/container';
import { TRIPS_BY_YEAR } from '../constants/travel';
import { generateTitle } from '../lib/generateTitle';

const Travel: NextPage = () => {
  return (
    <>
      <Head>
        <title>{generateTitle('Путешествия')}</title>
        <meta
          name="description"
          content="Здесь был Толя. Документирую свои путешествия."
        />
      </Head>
      <Container className="mb-10 flex-1">
        <h1 className="text-5xl lg:text-7xl font-bold my-8 tracking-tighter leading-tight text-zinc-900">
          Путешествия
        </h1>
        {Object.keys(TRIPS_BY_YEAR)
          .sort((a, b) => parseInt(b) - parseInt(a))
          .map(year => (
            <>
              <h2 className="text-3xl lg:text-6xl mb-4 font-bold tracking-tighter leading-tight text-zinc-900">
                {year}
              </h2>
              <ul key={year} className="mb-10">
                {TRIPS_BY_YEAR[year].map((trip, index) => (
                  <li
                    key={index}
                    className="text-lg md:text-xl mb-4 text-zinc-700"
                  >
                    {trip.place}{' '}
                    <span className="ml-4 text-sm text-zinc-400">
                      {trip.date}
                    </span>
                  </li>
                ))}
              </ul>
            </>
          ))}
      </Container>
    </>
  );
};

export default Travel;
