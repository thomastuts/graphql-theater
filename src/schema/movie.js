import { getMovies, getMovie } from '../repositories/movies';

export const schema = `
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
`;

export const queries = `
  movie(id: Int!): Movie
  movies: [Movie]
`;

export const rootResolvers = {
  movie(args, context) {
    return getMovie(args.id);
  },
  movies(args, context) {
    return getMovies();
  },
};
