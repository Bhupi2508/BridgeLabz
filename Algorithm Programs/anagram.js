// Anagram
var utility = require('../utility/utility')
var read = require('readline-sync');
var firstString = read.question("Enter first string : ")
var secondString = read.question("Enter Second string : ")
utility.anagram(firstString, secondString)
