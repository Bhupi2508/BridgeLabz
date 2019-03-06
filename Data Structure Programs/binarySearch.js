//Binary Search Tree
/*
 * To require the required files.
 */
var utility = require('../Data Structure Programs/DSAUtility/utilitys')
var util = require('/home/admin1/bhupi/utility/utility')
var read = require('readline-sync');

var arr = []
var number = read.questionFloat("Enter the size of elements : ")
var arr = util.createArray(number)
console.log(arr);

var res = utility.binarySearchTree(arr);
console.log("Output : " + res);
