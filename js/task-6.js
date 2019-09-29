'use strict'

const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 2 },
];


function calculateTotalPrice(arr, productName) {
  let productsCost = 0;
  for(let elements of arr) {
      if(elements['name'] === productName) {
      productsCost = elements['price'] * elements['quantity'];
    }
  }
  return productsCost;
}

console.log(calculateTotalPrice(products, 'Радар')); // 5200

console.log(calculateTotalPrice(products, 'Дроид')); // 2800