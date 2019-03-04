var utility = require('../Data Structure Programs/DSAUtility/utilitys')
var util = require('/home/admin1/bhupi/utility/utility')
var read = require('readline-sync');

var arrSize = []
var arrSize = read.question("Enter the size of Elements : ")
var elements = util.createArray(arrSize)
console.log("Elements : " + elements);

var stackValue = utility.Stack(elements)
