
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('days').del()
    .then(function () {
      // Inserts seed entries
      return knex('days').insert([
        {date: new Date('2017-06-10'), trip_id: 1},
        {date: new Date('2017-06-11'), trip_id: 1},
        {date: new Date('2017-06-12'), trip_id: 1},
        {date: new Date('2017-06-13'), trip_id: 1},
        {date: new Date('2017-07-3'), trip_id: 2},
        {date: new Date('2017-07-4'), trip_id: 2},
        {date: new Date('2017-07-5'), trip_id: 2},
        {date: new Date('2017-07-6'), trip_id: 2},
      ]);
    });
};
