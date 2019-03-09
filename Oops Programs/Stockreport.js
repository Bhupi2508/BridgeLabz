/***************************************************************************************
 * Execution        : Default node             cmd> node Stockreport.js 
 *
 * @file            : Stockreport.js
 * 
 * @overview        : Program to read in Stock Names, Number of Share, Share Price.
 *                    Print a Stock Report with total value of each Stock and the total 
 *                    value of Stock.
 *                     
 * @author          : Bhupendra Singh <bhupendrasingh.ec18@gmail.com>
 * @version         : 1.0.  
 * @since           : 09/03/2019
 * **************************************************************************************/

/*
To require the required files.
*/
var utility = require('../Oops Programs/utility/utility2')
var read = require('readline-sync')
console.log("*********************STOCK REPORT**********************\n");

var stocks = read.question("Enter the number of stock : ")
var result = utility.stockReport(stocks)
console.log("Total Value of stocks are ");
console.log("Result : " + result);
