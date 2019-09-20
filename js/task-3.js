'use strict'

function findLongestWord(string) {
    let splitedString = string.split(" ");
    let longestWord = 0;
    let result;
    for (let i = 0; i < splitedString.length ; i++) {
        if (longestWord < splitedString[i].length) {
            longestWord = splitedString[i].length;
            result = splitedString[i];
        }
    }
    return result;
}

console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));

console.log(findLongestWord('Google do a roll')); 

console.log(findLongestWord('May the force be with you'));