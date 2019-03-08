/******************************************************************************
 *  Execution       :   1. default node          : cmd> node bubble.js
 *                      
 * 
 *  Purpose         : Reads in integers prints them in sorted order using Bubble Sort
 * 
 *  @description    
 * 
 *  @file           : bubble.js
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
        var arr = [];
        arr = utility.createArray(num),
            arr = utility.bubblesort(arr),

            
        console.log("After sorted Array : " + arr);

