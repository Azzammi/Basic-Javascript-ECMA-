const _ = require('lodash');

const myArray = [1,2,3,4];
let sum = 0;

for(let i=0; i < myArray.length; i++){
    sum += myArray[i];
}

let sumSecond = myArray.reduce((prev, curr) => {
    return prev + curr;
});

const sumThird = _.sum(myArray);

console.log([sum,sumSecond, sumThird]);