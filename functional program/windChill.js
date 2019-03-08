/******************************************************************************
 *  Execution       :   1. default node          : cmd> node windChill.js
 *                      
 * 
 *  Purpose         : Program to windchill. 
 * 
 *  @description    
 * 
 *  @file           : windChill.js
 *  @overview       : Calculation done.
 *  @author         : Bhupendra Singh<bhupendrasingh.ec18@gmail.com>
 *  @version        : 1.0
 *  @since          : 24/02/2019
 *
 ******************************************************************************/

/*
 * To require the required files.
 */
var utility = require('../utility/utility')

var v = process.argv[2]
var t = process.argv[3]
utility.windChill(v, t);


