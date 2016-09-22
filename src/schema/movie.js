import { getMovies, getMovie } from '../repositories/movies';

export const schema = `
  enum BACKDROP_SIZES {
    w300,
    w780,
    w1280,
    original
  }
  
  enum POSTER_SIZES {
    w92
    w154
    w185
    w342
    w500
    w780
    original
  }
  
  type Movie {
    id: Int!
    title: String!
    language: String! #TODO: should be enum
    release_date: String! #TODO: should be date
    overview: String!
    rating: Float!
    backdrop(size: BACKDROP_SIZES!): String! #TODO: should be resolved using image size argument
    poster(size: POSTER_SIZES!): String! #TODO: should be resolved using image size argument
  }
`;

export const queries = `
  # Fetch a single movie with the given movie ID.
  movie(id: Int!): Movie
  
  # Fetch all movies.
  movies: [Movie]
`;

function getImageUrl(size, path) {
  return `http://image.tmdb.org/t/p/${size}${path}`;
}

export const resolvers = {
  backdrop: (obj, args) => {
    return getImageUrl(args.size, obj.backdrop_path);
  },
  poster: (obj, args) => {
    return getImageUrl(args.size, obj.poster_path);
  },
};

export const rootQueryResolvers = {
  movie(args, context) {
    return getMovie(args.id);
  },
  movies(args, context) {
    return getMovies();
  },
};
