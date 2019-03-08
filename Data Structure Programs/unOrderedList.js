/*************************************************************************************
 * Execution    :   1.default node           cmd> node unOrderedList.js
 *                   
 *                  
 * 
 * Purpose      :   Search a element if present remove it otherwise add it to the file.
 * 
 * @description
 * 
 * @file        :   unOrderedList.js
 * @overview    :   Use readfile to read all the words in the file with space as seperator.
 * @author      :   Bhupendra Singh<bhupendrasingh.ec18@gmail.com>
 * @version     :   1.0
 * @since       :   02-03-2019
 * 
 * *********************************************************************************/

/**
 * To require the required files.
 */
var read = require('readline-sync')
var utilitys = require('../Data Structure Programs/DSAUtility/utilitys')
var read = require('readline-sync');

//Enter which word want to search
var word = read.question("Enter the word that you want to search : ")
utilitys.unOrderedList(word)
