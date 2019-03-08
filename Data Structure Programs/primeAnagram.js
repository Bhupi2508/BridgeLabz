/*******************************************************************************************
 * Execution    :   1.default node       cmd> node primeAnagram.js
 *                   
 * 
 * Purpose      :   Prime Number Program and store only the numbers in that range that are Anagrams. 
 * 
 * @description
 * 
 * @file        :   primeAnagram.js
 * @overview    :   store in a 2D Array the numbers that are Anagram and numbers that are not Anagram
 * @author      :   Bhupendra Singh<bhupendrasingh.ec18@gmail.com>
 * @version     :   1.0
 * @since       :   06-03-2019
 * 
 * ********************************************************************************************/

/**
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
