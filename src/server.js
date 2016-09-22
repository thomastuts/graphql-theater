import graphqlHTTP from 'express-graphql';
import express from 'express';
const config = require('dotenv').config();

import knexConfig from '../knexfile';
import { schema, root } from './schema';

export const knex = require('knex')(knexConfig[config.NODE_ENV || 'development']);

const app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  context: {
    db: knex,
  },
  graphiql: true,
}));

app.listen(config.SERVER_PORT);
console.log(`GraphQL server running at localhost:${config.SERVER_PORT}/graphql.`);
