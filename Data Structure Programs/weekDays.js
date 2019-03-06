//Week Days
/*
 * To require the required files.
 */
var utility = require('../Data Structure Programs/DSAUtility/utilitys')
var read = require('readline-sync');

var month = read.questionInt("Enter the month : ")
var year = read.questionInt("Enter the year : ")
utility.weekDays(month, year);