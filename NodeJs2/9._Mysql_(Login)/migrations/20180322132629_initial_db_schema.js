
exports.up = function(knex, Promise) {
  return knex.schema
    .createTable('messages', function(table) {
        table.increments('id').primary;
        table.string('message');
    });
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists('messages');
};
