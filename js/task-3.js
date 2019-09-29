"use strict";

function findBestEmployee(employees) {
  const elements = Object.entries(employees);
  let mostTasks = 0;
  let bestEmployee;
  for (let element of elements) {
    if (element[1] > mostTasks) {
      mostTasks = element[1];
      bestEmployee = element[0];
    }
  }
  return bestEmployee;
}

console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99
  })
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4
  })
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38
  })
); // lux
