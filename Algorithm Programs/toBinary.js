// toBinary
/*
 * To require the required files.
 */
var utility = require('../utility/utility')
var read = require('readline-sync');

var number = read.question("Enter the Number :")
var t = utility.toBinary(number)
console.log("Convert into Binary : " + t);
