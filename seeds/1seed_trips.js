
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('trips').del()
    .then(function () {
      // Inserts seed entries
      return knex('trips').insert([
        {id: 1, tripname: 'Seattle', start_date: new Date("2017-06-10"), end_date: new Date("2017-06-13")},
        {id: 2, tripname: 'Cali', start_date: new Date("2017-07-03"), end_date: new Date("2017-07-06")},
      ]);
    });
};
