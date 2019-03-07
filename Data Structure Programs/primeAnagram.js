/*
 * To require the required files.
 */
var read = require('readline-sync');
var take = require('util');  
var utility = require('../Data Structure Programs/DSAUtility/utilitys')
var utility1 = require('../Data Structure Programs/DSAUtility/number')
var prime = utility1.dArray()
console.log(prime);

console.log("The prime numbers that are not Anagram present in the given range " );
console.log();


var notPrime = utility.primeAnagram();
console.log(notPrime);
