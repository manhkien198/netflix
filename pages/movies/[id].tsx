import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import Link from 'next/link';
import * as React from 'react';
import { Movie } from '../../models';

export interface MovieDetailProps {
  movie: Movie;
}

export default function MovieDetail({ movie }: MovieDetailProps) {
  const url =
    'https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png';
  return (
    <>
      <article className='flex flex-row items-center w-8/12 mt-10 m-auto justify-between relative'>
        <img
          src={
            movie?.poster_path
              ? `https://image.tmdb.org/t/p/w500/${movie?.poster_path}`
              : url
          }
          alt={movie?.title}
        />
        <div className='ml-20'>
          <h4 className='text-3xl mb-10 text-white'>{movie?.title}</h4>
          <p className='w-full leading-10 text-white'>{movie?.overview}</p>
          <p className='mt-5 text-white'>Releases : {movie?.release_date}</p>
          <p className='mt-5 text-white'>Vote count : {movie?.vote_count}</p>
          <p className='mt-5 text-white'>
            Vote average : {movie?.vote_average}
          </p>
        </div>
      </article>
      <div className='flex justify-center items-center mt-10'>
        <Link href='/movies' passHref>
          <button className='rounded bg-sky-500 p-2 text-white'>
            Back to Movies
          </button>
        </Link>
      </div>
    </>
  );
}
export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  const movieId = context.params?.id;
  const lang = context.params?.lang;

  if (!movieId) return { notFound: true };
  const resp = await fetch(
    `${process.env.BASE_URL}/movie/${movieId}?api_key=${process.env.API_KEY}&language=${lang}`
  );
  const data = await resp.json();
  return {
    props: {
      movie: data,
    },
  };
};
export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};
