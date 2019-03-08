/*******************************************************************************************
 * Execution    :   1.default node       cmd> node 2dArray.js
 *                   
 * 
 * Purpose      :   Take a range of 0 - 1000 Numbers and find the Prime numbers in that range.
 * 
 * @description
 * 
 * @file        :   2dArray.js
 * @overview    :   2D Array, the first dimension represents the range 0-100, 100-200, and so 
 *                  on. While the second dimension represents the prime numbers in that range
 * @author      :   Bhupendra Singh<bhupendrasingh.ec18@gmail.com>
 * @version     :   1.0
 * @since       :   05-03-2019
 * 
 * ********************************************************************************************/

/**
 * To require the required files.
 */
var read = require('readline-sync');
var utility = require('./DSAUtility/utilitys')
utility.primeNumber();