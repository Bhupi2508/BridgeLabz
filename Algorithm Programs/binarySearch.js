/******************************************************************************
 *  Execution       :   1. default node          : cmd> node binarySearch.js
 *                      
 * 
 *  Purpose         : The program find the word from the file.
 * 
 *  @description    
 * 
 *  @file           : binarySearch.js
 *  @overview       : search word from the file and print it.
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


//var read = utility.input();

var num = read.question("Enter the size of Elemnts :")
var arr = [];
arr = utility.createArray(num)

var key = parseInt(read.question("Enter search element :"))
var sa = utility.binarySearch(arr, 0, num-1, key)


if (sa > 0) {
    console.log("Elements found : " + Number(sa));
} else {
    console.log("Invalid Output : ");
}
            
