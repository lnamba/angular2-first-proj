
exports.up = function(knex, Promise) {
  return knex.schema.createTable('trips', function(table) {
      table.increments();
      table.string('tripname').notNullable()
      table.date('start_date').notNullable();
      table.date('end_date').notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('trips')
};
