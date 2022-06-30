const data = require('../data/zoo_data');

const { species } = data;

const listando = () => species.reduce((a, b) => ({ ...a, [b.name]: b.residents.length }), 0);

const filtrado = (animal) => (animal.sex === undefined
  ? species.find((E) => E.name === animal.specie).residents
  : species.find((E) => E.name === animal.specie).residents
    .filter((E) => E.sex === animal.sex)).length;

const countAnimals = (animal) => (animal === undefined ? listando() : filtrado(animal));

// console.log(countAnimals({ specie: 'giraffes', sex: 'female' }));

module.exports = countAnimals;
