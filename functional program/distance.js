/******************************************************************************
 *  Execution       :   1. default node          : cmd> node distance.js
 *                      
 * 
 *  Purpose         : To find the distance of two points 'x' & 'Y' from origin.
 * 
 *  @description    
 * 
 *  @file           : distance.js
 *  @overview       : The formulae to calculate distance = sqrt(x*x + y*y).
 *  @author         : Bhupendra Singh<bhupendrasingh.ec18@gmail.com>
 *  @version        : 1.0
 *  @since          : 22/02/2019
 *
 ******************************************************************************/

/*
 * To require the required files.
 */
var utility = require('../utility/utility');
var read = require('readline-sync');

var firstNumber = read.question("Enter first number : ")
var secondNumber = read.question("Enter second number : ")
utility.distance(firstNumber, secondNumber)
