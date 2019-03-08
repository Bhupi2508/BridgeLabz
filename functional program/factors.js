/******************************************************************************
 *  Execution       :   1. default node          : cmd>node factors.js 
 *                      
 * 
 *  Purpose         : To get the prime factorization of user asked number.
 * 
 *  @description    
 * 
 *  @file           : factors.js
 *  @overview       : To check the divisiblity from 2 to sqare root of the number Iteratively.
 *  @author         : Bhupendra Singh<bhupendrasingh.ec18@gmail.com>
 *  @version        : 1.0
 *  @since          : 21/02/2019
 *
 ******************************************************************************/

/*
 * To require the required files.
 */
var utility = require('../utility/utility');
var read = require('readline-sync');

var number = read.question("Enter the value : ")
    utility.factors(number)
   