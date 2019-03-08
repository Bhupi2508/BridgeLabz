/*****************************************************************************************
 * Execution    :   1. cmd> node binarySearch.js
 *                   
 * 
 * Purpose      :   Number of Binary tree.
 * 
 * @description
 * 
 * @file        :   binarySearch.js
 * @overview    :   Count number of possibilities binary trees commandline input.
 * @author      :   Bhupendra Singh<bhupendrasingh.ec18@gmail.com>
 * @version     :   1.0
 * @since       :   04-03-2019
 * 
 * *************************************************************************************/

/**
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
