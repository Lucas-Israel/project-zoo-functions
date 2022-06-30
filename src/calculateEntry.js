const data = require('../data/zoo_data');

const { prices } = data;

const entrants = [
  { name: 'Lara Carvalho', age: 5 },
  { name: 'Frederico Moreira', age: 5 },
  { name: 'Pedro Henrique Carvalho', age: 5 },
  { name: 'Maria Costa', age: 18 },
  { name: 'Núbia Souza', age: 18 },
  { name: 'Carlos Nogueira', age: 50 },
];

const countEntrants = (A) => ({ child: A.filter((E) => E.age < 18 && E.age > 0).length,
  adult: A.filter((E) => E.age > 17 && E.age < 50).length,
  senior: A.filter((E) => E.age > 49).length });

const calculateEntry = (A = [{ age: 0 }]) => (Object.keys(A).length === 0 ? 0
  : (prices.child * countEntrants(A).child)
  + (prices.adult * countEntrants(A).adult)
  + (prices.senior * countEntrants(A).senior));

module.exports = { calculateEntry, countEntrants };
