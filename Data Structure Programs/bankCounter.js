//Bank Counter
/*
 * To require the required files.
 */
var utility = require('../Data Structure Programs/DSAUtility/utilitys')
var read = require('readline-sync')

var ask = read.questionInt("Enter the total number of people : ")
var val = utility.queueBankCounter(ask)
if (val === true) {
    console.log("Minimum bank cash is not Maintained");
}
else {
    console.log("Minimum bank cash is maintained");
}