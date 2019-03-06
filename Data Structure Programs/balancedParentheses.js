/*
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
