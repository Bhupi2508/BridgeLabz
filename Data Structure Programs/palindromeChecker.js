//Palindrome Checker
var utility = require('../Data Structure Programs/DSAUtility/utilitys')
var read = require('readline-sync')

var stringInput = read.question("Enter the String : ")

var check = utility.palindromeChecker(stringInput)
if(check == true){
    console.log("Strings are palindrome : ");
    }else{
        console.log("Strings are not palindrome : ");
    }