/******************************************************************************
 *  Execution       :   1. default node          : cmd> node anagram.js
 *                      
 * 
 *  Purpose         : One string is an anagram of another if the second is simply
 *                    a rearrangement of the first, and check anagrams.
 * 
 *  @description    
 * 
 *  @file           : anagram.js
 *  @overview       : The Two Strings are Anagram or not.
 *  @author         : Bhupendra Singh<bhupendrasingh.ec18@gmail.com>
 *  @version        : 1.0
 *  @since          : 24/02/2019
 *
 ******************************************************************************/

/**
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
