// Anagram
/*
 * To require the required files.
 */
var utility = require('../utility/utility')
var read = require('readline-sync');

var firstString = read.question("Enter first string : ")
var secondString = read.question("Enter Second string : ")
var check = utility.anagram(firstString, secondString)
if(check == true){
    console.log("Yes String are Anagram");
}else{
    console.log("Yes String are not Anagram");
}
