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

const countEntrants = (A) => {
  const abc = { child: 0, adult: 0, senior: 0 };
  abc.child = A.filter((E) => E.age < 18 && E.age > 0).length;
  abc.adult = A.filter((E) => E.age > 17 && E.age < 50).length;
  abc.senior = A.filter((E) => E.age > 49).length;
  return abc;
};

const calculateEntry = (A = [{ age: 0 }]) => {
  if (Object.keys(A).length === 0) return 0;
  let bca = 0;
  const aaa = countEntrants(A);
  bca += prices.child * aaa.child;
  bca += prices.adult * aaa.adult;
  bca += prices.senior * aaa.senior;
  return bca;
};

module.exports = { calculateEntry, countEntrants };

// console.log(countEntrants(entrant));
console.log(calculateEntry());
