const data = require('../data/zoo_data');

const { employees } = data;

const isManager = (id) => employees.map((E) => E.managers).some((E) => E.find((R) => R === id));

const getRelatedEmployees = (managerId) => (isManager(managerId)
  ? employees.filter((E) => E.managers.includes(managerId)).map((E) =>
    `${E.firstName} ${E.lastName}`)
  : (function a() {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }()));

console.log(getRelatedEmployees('0e7b460e-acf4-4e17-bcb3-ee472265db83'));

module.exports = { isManager, getRelatedEmployees };

// https://itecnote.com/tecnote/javascript-error-handling-can-i-throw-an-error-inside-a-ternary-operator/

// throw dentro de ternario é feio de mais
