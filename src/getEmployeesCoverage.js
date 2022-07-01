const data = require('../data/zoo_data');

const { employees, species } = data;

const findEmployee = (A) => employees.find(({ id, firstName, lastName }) =>
  id === A.id || firstName === A.name || lastName === A.name);

const findSpeciesByID = (A) => species.filter(({ id }) => findEmployee(A).responsibleFor
  .includes(id));

const allEmployees = () => employees.map(({ id, firstName, lastName }) => ({
  id,
  fullName: `${firstName} ${lastName}`,
  locations: employees.find((E) => E.firstName === firstName).responsibleFor
    .map((E) => species.find((R) => R.id === E).location),
  species: employees.find((E) => E.firstName === firstName).responsibleFor
    .map((E) => species.find((R) => R.id === E).name),
}));

// console.log(allEmployees());

const employeesCoverage = (A) => (!findEmployee(A) ? (function a() {
  throw new Error('Informações inválidas');
}()) : ({
  id: findEmployee(A).id,
  fullName: `${findEmployee(A).firstName} ${findEmployee(A).lastName}`,
  locations: findSpeciesByID(A).map(({ location }) => location),
  species: findSpeciesByID(A).map(({ name }) => name) }));

const getEmployeesCoverage = (A) => (!A ? allEmployees() : employeesCoverage(A));

// console.log(getEmployeesCoverage({ name: 'Bur', id: '0e7b460e-acf4-4e17-bcb3-ee472265db84' }));

module.exports = getEmployeesCoverage;
