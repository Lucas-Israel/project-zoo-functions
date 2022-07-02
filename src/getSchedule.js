const data = require('../data/zoo_data');

const { species, hours } = data;

const { Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday } = hours;

const exibicaoDia = (A) => species.filter((E) => E.availability.includes(A)).map((E) => E.name);

const dias = {
  Tuesday: { officeHour: `Open from ${Tuesday.open}am until ${Tuesday.close}pm`,
    exhibition: exibicaoDia('Tuesday') },
  Wednesday: { officeHour: `Open from ${Wednesday.open}am until ${Wednesday.close}pm`,
    exhibition: exibicaoDia('Wednesday') },
  Thursday: { officeHour: `Open from ${Thursday.open}am until ${Thursday.close}pm`,
    exhibition: exibicaoDia('Thursday') },
  Friday: { officeHour: `Open from ${Friday.open}am until ${Friday.close}pm`,
    exhibition: exibicaoDia('Friday') },
  Saturday: { officeHour: `Open from ${Saturday.open}am until ${Saturday.close}pm`,
    exhibition: exibicaoDia('Saturday') },
  Sunday: { officeHour: `Open from ${Sunday.open}am until ${Sunday.close}pm`,
    exhibition: exibicaoDia('Sunday') },
  Monday: { officeHour: 'CLOSED',
    exhibition: 'The zoo will be closed!' },
};

const disponiveis = `${Object.keys(dias)},${species.map((E) => E.name)}`;

const test = (A) => {
  const abc = {};
  if (A === 'Monday') {
    abc[A] = { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };
    return abc;
  }
  abc[A] = { officeHour: `Open from ${hours[A].open}am until ${hours[A].close}pm`,
    exhibition: exibicaoDia(A) };
  return abc;
};

const disponibilidade = (A) => (Object.keys(dias).includes(A) ? test(A)
  : species.find((E) => E.name === A.toLowerCase()).availability);

const getSchedule = (A) => (!A || !disponiveis.includes(A) ? dias
  : disponibilidade(A));

// console.log(getSchedule('Monday'));

module.exports = getSchedule;
