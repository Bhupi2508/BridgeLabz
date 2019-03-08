/******************************************************************************
 *  Execution       :   1. default node          : cmd> node vendingMachine.js
 *                      
 * 
 *  Purpose         : Program to calculate the minimum number of Notes as well as 
 *                    the Notes to be returned by the Vending Machine as a Change
 * 
 *  @description    
 * 
 *  @file           : vendingMachine.js
 *  @overview       : Two Outputs - 
 *                     one the number of minimum Note needed to give the change and
 *                     second list of Rs Notes that would given in the Change
 *  @author         : Bhupendra Singh<bhupendrasingh.ec18@gmail.com>
 *  @version        : 1.0
 *  @since          : 26/02/2019
 *
 ******************************************************************************/

/*
 * To require the required files.
 */
var utility = require('../utility/utility')
var read = require('readline-sync');

var amount = read.question("Enter the Amount : ")
utility.vendingMachine(amount, 0, 0)
