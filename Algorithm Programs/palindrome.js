/******************************************************************************
 *  Execution       :   1. default node          : cmd> node palindrome.js
 *                      
 * 
 *  Purpose         :  check the num or string is palindrome or not
 * 
 *  @description    
 * 
 *  @file           : palindrome.js
 *  @overview       : check palindrome then return true or false
 *  @author         : Bhupendra Singh<bhupendrasingh.ec18@gmail.com>
 *  @version        : 1.0
 *  @since          : 26/02/2019
 *
 ******************************************************************************/

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
    
