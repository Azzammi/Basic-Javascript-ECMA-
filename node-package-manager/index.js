const _ = require('lodash');
const moment = require('moment');
 
const myOddEvenArray = _.partition([1, 2, 3, 4, 5, 6], (n) => n % 2);
const date = moment().format("MMM Do YY");
 
console.log(myOddEvenArray);
console.log(date);