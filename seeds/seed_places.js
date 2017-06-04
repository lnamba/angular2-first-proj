
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('places').del()
    .then(function () {
      // Inserts seed entries
      return knex('places').insert([
        {placename: 'Pikes Place', address: '1531 Western Ave, Seattle, WA 98101', trip_id: 1},
        {placename: 'Space Needle', address: '400 Broad St, Seattle, WA 98109', trip_id: 1},
        {placename: 'Little Tokyo, DTLA', address: '328 E. First St., Los Angeles, CA 90012', trip_id: 2},
        {placename: 'Runyon Canyon', address: '2000 N Fuller Ave, Los Angeles, CA 90046', trip_id: 2}
      ]);
    });
};
