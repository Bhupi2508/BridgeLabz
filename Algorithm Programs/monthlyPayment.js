/******************************************************************************
 *  Execution       :   1. default node          : cmd> node monthlypayment.js
 *                      
 * 
 *  Purpose         : To calculate monthly payment.
 * 
 *  @description    
 * 
 *  @file           : monthlypayment.js
 *  @overview       : Displays calculation results.
 *  @author         : Bhupendra Singh<bhupendrasingh.ec18@gmail.com>
 *  @version        : 1.0
 *  @since          : 26/02/2019
 *
 ******************************************************************************/

/*
 * To require the required files.
 */
var utility = require('../utility/utility')

var P = process.argv[2]
var Y = process.argv[3]
var R = process.argv[4]
    utility.payment(P, Y, R);
