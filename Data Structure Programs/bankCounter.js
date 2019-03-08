/*****************************************************************************************
 * Execution    :   1.default node               cmd> node bankCounter.js
 *                   
 * 
 * Purpose      :   Program which creates Banking Cash Counter where people come in to 
 *                  deposit Cash and withdraw Cash. 
 * 
 * @description
 * 
 * @file        :   bankCounter.js
 * @overview    :   Banking Cash Counter where people come in to deposit Cash and withdraw
 *                  Cash. Maintain the Cash Balance.
 * @author      :   Bhupendra Singh<bhupendrasingh.ec18@gmail.com>
 * @version     :   1.0
 * @since       :   03-03-2019
 * 
 * *************************************************************************************/

/**
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