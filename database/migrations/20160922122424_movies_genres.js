exports.up = function(knex, Promise) {
  return knex.schema.createTable('movies_genres', t => {
    t.integer('movie_id').unsigned().references('movies.id');
    t.integer('genre_id').unsigned().references('genres.id');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('movies_genres');
};
