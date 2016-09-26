import { knex } from '../server';

export function getGenresForMovie(movieId) {
  return knex('movies_genres')
    .leftJoin('movies', 'movie_id', 'movies.id')
    .leftJoin('genres', 'genre_id', 'genres.id')
    .select('genres.*')
    .where({ movie_id: movieId });
}
