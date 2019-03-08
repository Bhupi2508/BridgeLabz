/******************************************************************************
 *  Execution       :   1. default node          : cmd> node primeNumber.js
 *                      
 * 
 *  Purpose         : Prints N th numbers of prime numbers
 * 
 *  @description    
 * 
 *  @file           : primeNumber.js
 *  @overview       : Prints prime numbers.
 *  @author         : Bhupendra Singh<bhupendrasingh.ec18@gmail.com>
 *  @version        : 1.0
 *  @since          : 24/02/2019
 *
 ******************************************************************************/

/*
 * To require the required files.
 */
var utility = require('../utility/utility')
var read = require('readline-sync');

var startNumber = read.question("Starting From : ")
var endNumber = read.question("Range upto : ")
var t = utility.primeNumber(startNumber, endNumber)
for(var i = 0;i<t.length;i++){
    console.log(t[i] + " ");
}
