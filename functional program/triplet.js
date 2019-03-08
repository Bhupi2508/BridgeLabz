/******************************************************************************
 *  Execution       :   1. default node          : cmd> node triplet.js
 *                      
 * 
 *  Purpose         : A program with cubic running time. Read in N integers and
 *                    counts the   number of triples that sum to exactly 0.
 * 
 *  @description    
 * 
 *  @file           : triplet.js
 *  @overview       : One Output is number of distinct triplets as well as the
 *                    second output is to print the distinct triplets.
 *  @author         : Bhupendra Singh<bhupendrasingh.ec18@gmail.com>
 *  @version        : 1.0
 *  @since          : 22/02/2019
 *
 ******************************************************************************/

/*
 * To require the required files.
 */
var utility = require('../utility/utility')
var read = require('readline-sync');

var size = read.question("Enter the size of array : ")
utility.triplet(size)
