/******************************************************************************
 *  Execution       :   1. default node          : cmd> node powerOf2.js
 *                      
 * 
 *  Purpose         : This program takes a command-line argument N and prints a table 
 *                    of the powers of 2 that are less than or equal to 2^N.
 * 
 *  @description    
 * 
 *  @file           : powerOf2.js
 *  @overview       : print power of 2 numbers until N th number.
 *  @author         : Bhupendra Singh<bhupendrasingh.ec18@gmail.com>
 *  @version        : 1.0
 *  @since          : 21/02/2019
 *
 ******************************************************************************/

/*
 * To require the required files.
 */
var utility = require('../utility/utility')

var num = process.argv[2]
    utility.power(num);

