const data = require('../data/zoo_data');

const { species, employees } = data;

const getAnimalFromEmployee = (id) => employees.find((E) => E.id === id)
  .responsibleFor.find((E) => E);

const oldestAnimalfromId = (id) => Math.max(...species.find((E) => E.id === id)
  .residents.map((E) => E.age));

const getOldestFromFirstSpecies = (id) => Object.values(species.find((E) =>
  E.id === getAnimalFromEmployee(id)).residents.find((E) =>
  E.age === oldestAnimalfromId(getAnimalFromEmployee(id))));

console.log(getOldestFromFirstSpecies('fdb2543b-5662-46a7-badc-93d960fdc0a8'));

module.exports = getOldestFromFirstSpecies;
