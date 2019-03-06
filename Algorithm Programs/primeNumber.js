// PrimeNumber
/*
 * To require the required files.
 */
var utility = require('../utility/utility')
var read = require('readline-sync');

var startNumber = read.question("Starting From : ")
var endNumber = read.question("Range upto : ")
var t = utility.primeNumber(startNumber, endNumber)
for(var i = 0;i<t.length;i++){
    console.log(t[i] + " ");
}
