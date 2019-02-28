// // Find a Number
var utility = require('../utility/utility')
const readline = require('readline-sync')
var low = + process.argv[2];
var high = + process.argv[3];
var n = utility.Findnumber(low, high);

console.log("Your number is : " + n);
