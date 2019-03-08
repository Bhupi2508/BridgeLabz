/******************************************************************************
 *  Execution       :   1. default node          : cmd>node twoDArray.js 
 *                      
 * 
 *  Purpose         : A library for reading in 2D arrays of integers from 
 *                    standard input and printing them out to standard output.
 * 
 *  @description    
 * 
 *  @file           : twoDArray.js 
 *  @overview       : Print function to print 2 Dimensional Array. In Java use 
 *                    PrintWriter with OutputStreamWriter to print the output to 
 *                    the screen.
 *  @author         : Bhupendra Singh<bhupendrasingh.ec18@gmail.com>
 *  @version        : 1.0
 *  @since          : 22/02/2019
 *
 ******************************************************************************/

/*
 * To require the required files.
 */
var utility = require('../utility/utility')
var read = require('readline-sync');

var row = read.question("Enter the row : ")
var col = read.question("Enter the col : ")
utility.twoDArray(row, col);
