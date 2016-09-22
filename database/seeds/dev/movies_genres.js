const movies = require('./movies').movies;

exports.seed = function (knex, Promise) {
  return knex('movies_genres').del()
    .then(function () {
      return Promise.all(movies.map(movie => {
        const {
          id,
          genre_ids
        } = movie;

        return Promise.all(genre_ids.map(genreId => {
          return knex('movies_genres').insert({
            movie_id: id,
            genre_id: genreId,
          });
        }));
      }));
    });
};
