// PrimeNumber
var utility = require('../utility/utility')
var read = require('readline-sync');
var from = read.question("Starting From : ")
var upto = read.question("Range upto : ")
utility.Prime(from, upto)
