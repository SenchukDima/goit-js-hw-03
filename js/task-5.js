'use strict'

function checkForSpam(str) {
  let lowerCaseStr = str.toLowerCase();
  const result = lowerCaseStr.includes('spam') || lowerCaseStr.includes('sale')?
        true : false;
  return result; 
}


console.log(checkForSpam('Latest technology news'));

console.log(checkForSpam('JavaScript weekly newsletter'));

console.log(checkForSpam('Get best sale offers now!'));

console.log(checkForSpam('[SPAM] How to earn fast money?'));
