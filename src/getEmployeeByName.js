const data = require('../data/zoo_data');

const { employees } = data;

const getEmployeeByName = (employeeName) => (employeeName === undefined ? {} : employees.find((E) =>
  E.firstName === employeeName || E.lastName === employeeName));

console.log(getEmployeeByName('Nelson'));

module.exports = getEmployeeByName;
