exports.up = function(knex, Promise) {
  return knex.schema.createTable('movies_genres', t => {
    t.integer('movie_id').notNull();
    t.integer('genre_id').notNull();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('movies_genres');
};
