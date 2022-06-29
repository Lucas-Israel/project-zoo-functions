const data = require('../data/zoo_data');

const { species } = data;

const getAnimalsOlderThan = (animal, age) => species.some((E) =>
  E.name === animal && E.residents.every((R) => R.age >= age));

// console.log(getAnimalsOlderThan('lions', 50));

module.exports = getAnimalsOlderThan;
