/******************************************************************************
 *  Execution       :   1. default node          : cmd> node gambler.js
 *                      
 * 
 *  Purpose         : To play Gambling game till player reaches his goal or losses all his money.
 * 
 *  @description    
 * 
 *  @file           : gambler.js
 *  @overview       : To play Gambling game till player reaches his goal or losses all his money.
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

 var stake = read.question("Enter the Stake :");
 var goal = read.question("Enter the goal :");
 var bets = read.question("Enter the bets :");
 utility.gambler1(stake, goal, bets)
     
