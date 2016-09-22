import { buildSchema } from 'graphql';
import { addResolveFunctionsToSchema } from 'graphql-tools';

import * as movieSchema from './movie';
import * as genreSchema from './genre';

const schema = buildSchema(`
  ${genreSchema.schema}
  ${movieSchema.schema}
  
  type Query {
    ${movieSchema.queries}
  }
`);

const root = Object.assign({}, movieSchema.rootQueryResolvers);

addResolveFunctionsToSchema(schema, {
  Movie: movieSchema.resolvers,
});

module.exports = {
  schema,
  root,
};
