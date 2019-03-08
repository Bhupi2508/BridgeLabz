/******************************************************************************
 *  Execution       :   1. default node          : cmd>node stopwatch.js 
 *                      
 * 
 *  Purpose         : Stopwatch Program for measuring the time that elapses 
 *                    between the start and end clicks
 * 
 *  @description    
 * 
 *  @file           : stopwatch.js 
 *  @overview       : Print the elapsed time
 *  @author         : Bhupendra Singh<bhupendrasingh.ec18@gmail.com>
 *  @version        : 1.0
 *  @since          : 23/02/2019
 *
 ******************************************************************************/

/*
 * To require the required files.
 */
var utility = require('../utility/utility')
var read = require('readline-sync');

var s1 = parseInt(read.question("Press Enter for start the time :"));
var t1 = utility.stopWatch(s1);
var s2 = parseInt(read.question("Press Enter for stop the time :"));
var t2 = utility.stopWatch(s2);

var Elapsedtime = t2-t1; 
console.log("Elapsed time : " + Elapsedtime);
