//Binary to Decimal
var utility = require('../utility/utility')
var read = require('readline-sync');

var number = read.question("Enter the Number : ")
var binary = utility.toBinary(number)
console.log(binary);

var decimal =  utility.swapNibbles(binary)
console.log(decimal);

var finalValue = utility.toDecimal(decimal)
console.log(finalValue);

