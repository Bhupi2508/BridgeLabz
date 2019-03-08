/******************************************************************************
 *  Execution       :   1. default node          : cmd> node sqrt.js
 *                      
 * 
 *  Purpose         : Compute the square root of a nonnegative number c given
 *                    in the input using Newton's method.
 * 
 *  @description    
 * 
 *  @file           : sqrt.js
 *  @overview       : Sqrt of given number.
 *  @author         : Bhupendra Singh<bhupendrasingh.ec18@gmail.com>
 *  @version        : 1.0
 *  @since          : 27/02/2019
 *
 ******************************************************************************/

/*
 * To require the required files.
 */
var utility = require('../utility/utility')
var read = require('readline-sync');

var c = read.question("Enter the value of c : ")
utility.sqrt(c)
