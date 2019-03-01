// Newton's Program
var utility = require('../utility/utility')
var read = require('readline-sync');
var str = read.question("Enter the string : ");
var r = utility.Palindrome(str);
if(r == true){
console.log("String are Palindrome : " + str);
}else
    console.log("String are not Palindrome : " + str);
    
