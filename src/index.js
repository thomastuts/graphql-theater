const express = require('express');
const graphqlHTTP = require('express-graphql');
const config = require('dotenv').config();
const knexConfig = require('../knexfile');

const { schema, root } = require('./schema');

const knex = require('knex')(knexConfig[config.NODE_ENV || 'development']);

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
