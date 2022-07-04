const data = require('../data/zoo_data');

const { species } = data;

const areas = species.map((E) => E.location);

const getAnimalRegion = (A) => species.filter((E) => E.location === A).map((E) => E.name);

const getAnimalName = (A, { sorted }) => species.filter((E) => E.location === A)
  .map((a) => {
    const abc = {};
    const def = [];
    a.residents.forEach((R) => {
      def.push(R.name);
      abc[a.name] = def;
    });
    if (sorted === true) def.sort();
    return abc;
  });

const getAnimalSex = (A, { sex, sorted }) => species.filter((E) => E.location === A)
  .map((E) => {
    const abc = {};
    const def = [];
    E.residents.filter((Q) => Q.sex === sex).forEach((R) => {
      def.push(R.name);
    });
    E.residents.forEach((R) => {
      abc[E.name] = def;
    });
    if (sorted === false) return abc;
    if (sorted === true) def.sort();
    return abc;
  });

const getAnimalMap = ({ includeNames, sex, sorted } = {}) => {
  const abc = {};
  areas.forEach((E) => {
    if (sex && includeNames === true) {
      abc[E] = getAnimalSex(E, { sex, sorted });
      return abc;
    }
    if (includeNames === true) {
      abc[E] = getAnimalName(E, { sorted });
      return abc;
    }
    abc[E] = getAnimalRegion(E);
  });
  return abc;
};

module.exports = getAnimalMap;
