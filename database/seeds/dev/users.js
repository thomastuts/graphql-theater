const faker = require('faker');
const users = [];
const NUMBER_OF_USERS = 100;

for (let i = 0; i < NUMBER_OF_USERS.length; i++) {
  users.push({
    username: faker.internet.userName(),
    email: faker.internet.email(),
    salt: 'placeholder',
    password: 'placeholder',
  });
}

exports.seed = function (knex, Promise) {
  return knex('users').del()
    .then(function () {
      return Promise.all(users.map(user => {
        return knex('users').insert(user);
      }));
    });
};
