// Anagram
var utility = require('../utility/utility')
var read = require('readline-sync');
var string1 = read.question("Enter first string : ")
var string2 = read.question("Enter Second string : ")
utility.Anagram(string1, string2)
