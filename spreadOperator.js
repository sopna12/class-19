const maxValue = Math.max(20, 30, 40, 100)
console.log(maxValue)

const numbers = [10, 20, 30, 40, 50]
const maxNumbersInAarray = Math.max(...numbers)
console.log(maxNumbersInAarray);
// console.log(...number);


const a = 30;
const b = a;
// console.log(b);

const numbers2 = numbers
numbers.push(100)
console.log('Orginal Array', numbers);
console.log('Duolicate Array', numbers2);