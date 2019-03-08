/******************************************************************************
 *  Execution       :   1. default node          : cmd> node quadratic.js
 *                      
 * 
 *  Purpose         : Find the roots of quadratic equation.
 * 
 *  @description    
 * 
 *  @file           : quadratic.js
 *  @overview       : Result as quadratic equation output.
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

var a = read.question("Enter value of a : ")
var b = read.question("Enter value of b : ")
var c = read.question("Enter value of c : ")
utility.quadratic(a, b, c)
