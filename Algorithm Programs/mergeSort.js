//merge sort
var utility = require('../utility/utility')
var read = require('readline-sync');

var num = read.question("Enter the size of array :")
var arr = []
var arr = utility.createArray(num)

var result = utility.mergeSort(arr)
console.log("After sorting : " + result);


