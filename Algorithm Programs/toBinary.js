/******************************************************************************
 *  Execution       :   1. default node          : cmd> node toBinary.js
 *                      
 * 
 *  Purpose         : Convert decimal to binary numbers
 * 
 *  @description    
 * 
 *  @file           : toBinary.js
 *  @overview       : prints binary numbers
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

var number = read.question("Enter the Number :")
var t = utility.toBinary(number)
console.log("Convert into Binary : " + t);
