// toBinary
var utility = require('../utility/utility')
var read = require('readline-sync');
var word = read.question("Enter the Number :")
var t = utility.toBinary(word)
console.log("Convert into Binary : " + t);
