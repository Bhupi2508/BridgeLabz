/******************************************************************************
 *  Execution       :   1. default node          : cmd> node harmonic.js
 *                      
 * 
 *  Purpose         : Prints the Nth harmonic number: 1/1 + 1/2 + ... + 1/N 
 * 
 *  @description    
 * 
 *  @file           : harmonic.js
 *  @overview       : Print the Nth Harmonic Value
 *  @author         : Bhupendra Singh<bhupendrasingh.ec18@gmail.com>
 *  @version        : 1.0
 *  @since          : 21/02/2019
 *
 ******************************************************************************/

/*
 * To require the required files.
 */
var utility = require('../utility/utility')
var read = require('readline-sync');

var number = read.question("Enter the number : ")
    utility.harmonic(number)
