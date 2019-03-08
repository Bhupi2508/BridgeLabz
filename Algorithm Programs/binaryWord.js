/******************************************************************************
 *  Execution       :   1. default node          : cmd> node binaryWord.js
 *                      
 * 
 *  Purpose         : The program reports if the search word is found in the list.
 * 
 *  @description    
 * 
 *  @file           : binaryWord.js
 *  @overview       : Print the result if the word is found or not
 *  @author         : Bhupendra Singh<bhupendrasingh.ec18@gmail.com>
 *  @version        : 1.0
 *  @since          : 25/02/2019
 *
 ******************************************************************************/

/*
 * To require the required files.
 */
var utility = require('../utility/utility')
var read = require('readline-sync');

var arr = []
var word = read.question("Enter which word you search :")
var arr = utility.binary(word)
var search = utility.binarySearch(arr, 0, arr.length-1 , word)


if (search >= 0) {
    console.log(word + "  is there in file");
}
else {
    console.log("Searching word " + word + " is Not there in file");
}

