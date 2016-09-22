const { buildSchema } = require('graphql');

const schema = buildSchema(`
  type Movie {
    id: Int!
    title: String!
    language: String! #TODO: should be enum
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
    return context.db
      .table('movies')
      .first()
      .where('id', args.id);
  },
  movies(args, context) {
    return context.db
      .select()
      .from('movies');
  },
};

module.exports = {
  schema,
  root,
};
