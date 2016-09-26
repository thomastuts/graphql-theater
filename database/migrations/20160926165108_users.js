exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', t => {
    t.increments('id').primary();
    t.string('username').notNull();
    t.string('email').notNull();
    t.string('salt').notNull();
    t.string('password').notNull();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
