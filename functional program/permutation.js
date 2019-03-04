// Permutation
var utility = require('../utility/utility')
var read = require('readline-sync');

var string = read.question("Enter the String : ")
var res = utility.permutation(string);
console.log(res);

