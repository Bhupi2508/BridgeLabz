/*****************************************************************************************
 * Execution    :   1.default node               cmd> node balancedParentheses.js
 *                   
 * 
 * Purpose      :   Take an Arithmetic Expression such as have balanced paranthesis or not
 * 
 * @description
 * 
 * @file        :   balancedParentheses.js
 * @overview    :   Use readfile to read all the words in the file with space as seperator.
 * @author      :   Bhupendra Singh<bhupendrasingh.ec18@gmail.com>
 * @version     :   1.0
 * @since       :   03-023-2019
 * 
 * *************************************************************************************/

/**
 * To require the required files.
 */ 
var utility = require('../Data Structure Programs/DSAUtility/utilitys')
var util = require('/home/admin1/bhupi/utility/utility')
var read = require('readline-sync');

var str = read.question("Enter your mathematical expression with parantheses : ");
var stackValue = utility.stackBalanced(str)
if (stackValue) {
    console.log("Mathematical expression is balanced");

}
else {
    console.log("Mathematical expression not balanced");
}
