//Flip coin
/*
 * To require the required files.
 */
var utility = require('../utility/utility')
var read = require('readline-sync');

var num = read.questionInt("Enter the num :")
utility.flipCoin(num);

