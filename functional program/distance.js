// Distance
var utility = require('../utility/utility');
var read = require('readline-sync');
var firstNumber = read.question("Enter first number : ")
var secondNumber = read.question("Enter second number : ")
utility.distance(firstNumber, secondNumber)
