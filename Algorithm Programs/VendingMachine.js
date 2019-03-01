//Vending Machine
var utility = require('../utility/utility')
var read = require('readline-sync');
var amount = read.question("Enter the Amount : ")
utility.VendingMachine(amount, 0, 0)
