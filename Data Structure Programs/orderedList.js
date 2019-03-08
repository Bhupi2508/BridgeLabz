/************************************************************************************
 * Execution    :   1.default node       cmd> node orderedList.js
 *                   
 * 
 * Purpose      :   Search a element if present remove it otherwise add it to the file.
 * 
 * @description
 * 
 * @file        :   orderedList.js
 * @overview    :   Use readfile to read all the words in the file with space as seperator.
 * @author      :   Bhupendra Singh<bhupendrasingh.ec18@gmail.com>
 * @version     :   1.0
 * @since       :   02-03-2019
 * 
 * ***********************************************************************************/

/**
* To require the required files.
*/
var utilitys = require('../Data Structure Programs/DSAUtility/utilitys')
var read = require('readline-sync');

var number = read.questionInt("Enter the number :")
var arr = utilitys.orderedList(number);

