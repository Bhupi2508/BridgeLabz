// Newton's Program
/*
 * To require the required files.
 */
var utility = require('../utility/utility')
var read = require('readline-sync');

var string = read.question("Enter the string or number : ");
var r = utility.palindrome(string);
if(r == true){
console.log("String are Palindrome : " + string);
}else
    console.log("String are not Palindrome : " + string);
    
