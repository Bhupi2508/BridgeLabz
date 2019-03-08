/******************************************************************************
 *  Execution       :   1. default node          : cmd> node insertion.js
 *                      
 * 
 *  Purpose         : Reads in array from standard input and prints them in 
 *                    sorted order.Uses insertion sort.
 * 
 *  @description    
 * 
 *  @file           : insertion.js
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

var num = read.question("Enter the size of array : ")
var arr1 = [];
arr1 = utility.createArray1(num),
    arr1 = utility.insertionsort(arr1),


    console.log("After Insertion sorting : " + arr1);

