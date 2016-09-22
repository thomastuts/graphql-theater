import { buildSchema } from 'graphql';

import * as movieRepository from './repositories/movies';

const schema = buildSchema(`
  enum LANGUAGE {
    en
    de
    ja
    hi
  }

  type Movie {
    id: Int!
    title: String!
    language: LANGUAGE! #TODO: should be enum
    release_date: String! #TODO: should be date
    overview: String!
    rating: Float!
    backdrop_path: String! #TODO: should be resolved using image size argument
    poster_path: String! #TODO: should be resolved using image size argument
  }

  type Query {
    movie(id: Int!): Movie
    movies: [Movie]
  }
`);

const root = {
  movie(args, context) {
    return movieRepository.getMovie(args.id);
  },
  movies(args, context) {
    return movieRepository.getMovies();
  },
};

module.exports = {
  schema,
  root,
};
