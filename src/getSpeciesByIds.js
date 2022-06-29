const data = require('../data/zoo_data');

const { species } = data;

const getSpeciesByIds = (...ids) => (ids === undefined ? []
  : ids.map((R) => species.find((E) => E.id === R)));

console.log(getSpeciesByIds('89be95b3-47e4-4c5b-b687-1fabf2afa274',
  'e8481c1d-42ea-4610-8e11-1752cfc05a46'));

module.exports = getSpeciesByIds;
