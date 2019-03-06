//Calendar
/*
 * To require the required files.
 */
var read = require('readline-sync');
var utility = require('../Data Structure Programs/DSAUtility/utilitys')

var month = +process.argv[2];
var year = +process.argv[3];
utility.calendar(month, year)