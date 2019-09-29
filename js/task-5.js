"use strict";
const allProducts = [
  { name: "Радар", price: 1300, quantity: 4 },
  { name: "Сканер", price: 2700, quantity: 3 },
  { name: "Дроид", price: 400, quantity: 7 },
  { name: "Захват", price: 1200, quantity: 2 }
];

function getAllPropValues(arr, prop) {
  let searchedKey = [];
  for(let elements of arr) {
    for(let key in elements) {
      if(key === prop) {
      searchedKey.push(elements[key]);
      }
    }
  }
  return searchedKey;
}


console.log(getAllPropValues(allProducts, "name")); // ['Радар', 'Сканер', 'Дроид', 'Захват']

console.log(getAllPropValues(allProducts, "quantity")); // [4, 3, 7, 2]

console.log(getAllPropValues(allProducts, "category")); // []
  