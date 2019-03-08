/******************************************************************************
 *  Execution       :   1. default node          : cmd> node mergeSort.js
 *                      
 * 
 *  Purpose         : Reads in array from standard input and prints them in 
 *                    sorted order.Uses mergesort.
 * 
 *  @description    
 * 
 *  @file           : mergeSort.js
 *  @overview       : Print the Sorted List
 *  @author         : Bhupendra Singh<bhupendrasingh.ec18@gmail.com>
 *  @version        : 1.0
 *  @since          : 25/02/2019
 *
 ******************************************************************************/

/*
 * To require the required files.
 */
var utility = require('../utility/utility')
var read = require('readline-sync');

var num = read.question("Enter the size of array :")
var arr = []
var arr = utility.createArray(num)

var result = utility.mergeSort(arr)
console.log("After sorting : " + result);


