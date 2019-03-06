//Vending Machine
/*
 * To require the required files.
 */
var utility = require('../utility/utility')
var read = require('readline-sync');

var amount = read.question("Enter the Amount : ")
utility.vendingMachine(amount, 0, 0)
