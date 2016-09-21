exports.up = function(knex, Promise) {
  return knex.schema.createTable('movies', t => {
    t.increments().primary();
    t.string('title').notNull();
    t.enu('language', ['en', 'de', 'hi', 'ja']).notNull();
    t.date('release_date').notNull();
    t.text('overview').notNull();
    t.float('rating').notNull();
    t.string('backdrop_path').notNull();
    t.string('poster_path').notNull();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('movies');
};
