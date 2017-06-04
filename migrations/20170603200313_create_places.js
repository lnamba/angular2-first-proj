
exports.up = function(knex, Promise) {
  return knex.schema.createTable('places', function(table) {
    table.increments()
    table.string('placename').notNullable()
    table.string('address')
    table.integer('trip_id').references('id').inTable('trips').notNullable()
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('places')
};
