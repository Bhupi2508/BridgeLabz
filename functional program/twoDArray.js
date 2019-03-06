// 2-D array 
/*
 * To require the required files.
 */
var utility = require('../utility/utility')
var read = require('readline-sync');

var row = read.question("Enter the row : ")
var col = read.question("Enter the col : ")
utility.twoDArray(row, col);
