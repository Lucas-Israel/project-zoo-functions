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

const criarObjFiltroSex = (A, { sex, sorted }) => {
  const abc = {};
  A.forEach((E) => {
    abc[E] = getAnimalSex(E, { sex, sorted });
  });
  return abc;
};

const criarObj = (A) => {
  const abc = {};
  A.forEach((E) => {
    abc[E] = getAnimalRegion(E);
  });
  return abc;
};

const criarObjComNomes = (A, { sorted }) => {
  const abc = {};
  A.forEach((E) => {
    abc[E] = getAnimalName(E, { sorted });
  });
  return abc;
};

const getAnimalMap = ({ includeNames, sex, sorted } = criarObj(areas)) => {
  if (sex && includeNames === true) return criarObjFiltroSex(areas, { sex, sorted });
  if (includeNames === true) return criarObjComNomes(areas, { sorted });
  return criarObj(areas);
};

module.exports = getAnimalMap;
