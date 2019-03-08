/******************************************************************************
 *  Execution       :   1. default node          : cmd> node permutation.js
 *                      
 * 
 *  Purpose         : Check if the arrays returned by two string functions are equal.
 * 
 *  @description    
 * 
 *  @file           : permutation.js
 *  @overview       : Displaying permutation possibilities.
 *  @author         : Bhupendra Singh<bhupendrasingh.ec18@gmail.com>
 *  @version        : 1.0
 *  @since          : 23/02/2019
 *
 ******************************************************************************/

/*
 * To require the required files.
 */
var utility = require('../utility/utility')
var read = require('readline-sync');

var string = read.question("Enter the String : ")
var res = utility.permutation(string);
console.log(res);

