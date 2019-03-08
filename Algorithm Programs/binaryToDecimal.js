/******************************************************************************
 *  Execution       :   1. default node          : cmd> node binaryToDecimal.js
 *                      
 * 
 *  Purpose         : Convert decimal to binary numbers to decimal
 * 
 *  @description    
 * 
 *  @file           : binaryToDecimal.js
 *  @overview       : prints binary numbers with 8-chars and then convert again in decimal
 *  @author         : Bhupendra Singh<bhupendrsingh.ec18@gmail.com>
 *  @version        : 1.0
 *  @since          : 27/02/2019
 *
 ******************************************************************************/
/*
 * To require the required files.
 */
var utility = require('../utility/utility')
var read = require('readline-sync');

var number = read.question("Enter the Number : ")
var binary = utility.toBinary(number)
console.log(binary);

var decimal =  utility.swapNibbles(binary)
console.log(decimal);

var finalValue = utility.toDecimal(decimal)
console.log(finalValue);

