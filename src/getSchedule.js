const data = require('../data/zoo_data');

const { species } = data;

// const resultado = {};

const oqDisponivel = (A) => {
  let abc = 0;
  abc += 1;
  return abc;
};

const getSchedule = (A) => {
  let abc = 0;
  if (A === undefined) ;
  abc = species.find((E) => A === E.name).availability;
  return abc;
};

// console.log(getSchedule('lions'));

console.log(oqDisponivel('Wednesday'));

module.exports = getSchedule;

// const chave = 'monday';
// const test = {};
// test[hours] = 'funcionou';

// console.log(test.monday);
