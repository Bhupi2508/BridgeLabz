/******************************************************************************
 *  Execution       :   1. default node          : cmd>node coupons.js 
 *                      
 * 
 *  Purpose         : Generate random coupon number 
 * 
 *  @description       
 * 
 *  @file           : coupons.js
 *  @overview       : Total random number needed to have all distinct numbers
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

var number = read.question("Enter the Number :")
utility.coupen(number)
