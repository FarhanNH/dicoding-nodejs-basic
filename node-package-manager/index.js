const moment = require('moment');
const _ = require('lodash');

const date = moment().format('MMM Do YY');
console.log(date);

const myOddEvenArray = _.partition([1, 2, 3, 4, 5, 6], (n) => n % 2);

console.log(myOddEvenArray);
