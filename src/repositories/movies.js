import { knex } from '../server';

export function getMovies() {
  return knex
    .select()
    .from('movies');
}

export function getMovie(id) {
  return knex
    .first()
    .from('movies')
    .where({ id });
}
