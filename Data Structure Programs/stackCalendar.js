//Calendar program to store the Queue in two Stacks
/*
 * To require the required files.
 */
var utility = require('../Data Structure Programs/DSAUtility/utilitys')

var month = +process.argv[2]
var year = +process.argv[3]
utility.stackCalendar(month, year);