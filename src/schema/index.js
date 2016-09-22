import { buildSchema } from 'graphql';

import * as movieSchema from './movie';

const schema = buildSchema(`
  enum LANGUAGE {
    en
    de
    ja
    hi
  }

  ${movieSchema.schema}

  type Query {
    ${movieSchema.queries}
  }
`);

const root = Object.assign({}, movieSchema.rootResolvers);

module.exports = {
  schema,
  root,
};
