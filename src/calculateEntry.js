const data = require('../data/zoo_data');

const { prices } = data;

const countEntrants = (A) => ({ child: A.filter((E) => E.age < 18 && E.age > 0).length,
  adult: A.filter((E) => E.age > 17 && E.age < 50).length,
  senior: A.filter((E) => E.age > 49).length });

const calculateEntry = (A = [{ age: 0 }]) => (Object.keys(A).length === 0 ? 0
  : (prices.child * countEntrants(A).child)
  + (prices.adult * countEntrants(A).adult)
  + (prices.senior * countEntrants(A).senior));

module.exports = { calculateEntry, countEntrants };
