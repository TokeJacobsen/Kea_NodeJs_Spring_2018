
exports.up = function(knex, Promise) {
    return knex.schema
        .createTable('users', function(table) {
            table.increments('id').primary();
            table.string('username');
            table.string('password');
            table.string('firstName');
            table.string('lastName');
            // create null as default if nothing is input
            table.string('telephoneNumber').nullable();
        });
};

exports.down = function(knex, Promise) {
    return knex.schema
        .dropTableIfExists('users');
};
