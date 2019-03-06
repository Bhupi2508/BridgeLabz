// Stopwatch
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
