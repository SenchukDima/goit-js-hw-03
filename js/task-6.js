'use strict'

let input;
const numbers = [];
let total = 0;
  do {
    input = prompt('Введите число:');
    if(isNaN(input)){
    alert('Было введено не число, попробуйте еще раз');
    continue;
  } else if(input != null){
    numbers.push(+input);
  };
  } while(input != null) {
  function arraySum(array){
      for(var i = 0; i < array.length; i++){
          total += array[i];
          }};
  arraySum(numbers);
  alert(`Общая сумма чисел равна ${total}`);
  };