import { GetStaticProps, GetStaticPropsContext } from 'next';
import Link from 'next/link';
import { useState } from 'react';
import Category from '../../components/Category';
import Header from '../../components/HeaderMovies';
import Nav from '../../components/Nav';
import { Movie } from '../../models';
import Skeleton from 'react-loading-skeleton';
import i18next from 'i18next';

export interface MoviesListProps {
  movie: Movie[];
}

export default function MoviesList({ movie }: MoviesListProps) {
  const noAvailable =
    'https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png';
  const [movies, setMovies] = useState<any>(movie);
  return (
    <>
      <Nav />
      <Header />
      <Category />
      <section className='movies'>
        {movies?.length ? (
          movies.map((movie: any) => {
            return (
              <Link href={`/movies/${movie.id}`} key={movie.id} passHref>
                <article className='movie'>
                  <img
                    src={
                      movie?.poster_path
                        ? `https://image.tmdb.org/t/p/w500/${movie?.poster_path}`
                        : noAvailable
                    }
                    alt={movie?.title}
                  />
                  <div className='movie-info'>
                    <h4 className='title'>{movie?.title}</h4>
                    <p className='truncate'>{movie?.overview}</p>
                  </div>
                </article>
              </Link>
            );
          })
        ) : (
          <Skeleton />
        )}
      </section>
    </>
  );
}
export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  const lang = context.params?.lang;
  const res = await fetch(
    `${process.env.BASE_URL}/list/28?api_key=${process.env.API_KEY}&language=vi-VN`
  );
  const data = await res.json();
  return {
    props: {
      movie: data.items,
    },
  };
};
