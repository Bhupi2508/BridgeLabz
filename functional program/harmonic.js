// Harmonic  Series
/*
 * To require the required files.
 */
var utility = require('../utility/utility')
var read = require('readline-sync');

var number = read.question("Enter the number : ")
    utility.harmonic(number)
