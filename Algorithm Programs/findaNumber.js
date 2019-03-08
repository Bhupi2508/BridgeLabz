/******************************************************************************
 *  Execution       :   1. default node          : cmd> node findaNumber.js
 *                      
 * 
 *  Purpose         : Find the number between start and end(mid)
 * 
 *  @description    
 * 
 *  @file           : findaNumber.js
 *  @overview       : Print the intermediary number and the final answer
 *  @author         : Bhupendra Singh<bhupendrasingh.ec18@gmail.com>
 *  @version        : 1.0
 *  @since          : 25/02/2019
 *
 ******************************************************************************/

/*
 * To require the required files.
 */
var utility = require('../utility/utility')
const readline = require('readline-sync')

var low =  +process.argv[2];
var high =  +process.argv[3];
var n = utility.findNumber(low, high);

console.log("Your number is : " + n);
