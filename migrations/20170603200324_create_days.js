
exports.up = function(knex, Promise) {
  return knex.schema.createTable('days', function(table) {
    table.increments()
    table.date('date');
    table.integer('trip_id').references('id').inTable('trips').notNullable() 
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('days')
};
