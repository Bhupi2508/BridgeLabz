/*****************************************************************************************
 * Execution    :   1.default node           cmd> node palindromeChecker.js
 *                   
 * 
 * Purpose      :  Show if the String is Palindrome or not.  
 *                   
 * 
 * @description
 * 
 * @file        :   palindromeChecker.js
 * @overview    :   A palindrome is a string that reads the same forward and backward, for
 *                  example, radar, toot, and madam.
 * @author      :   Bhupendra Singh<bhupendrasingh.ec18@gmail.com>
 * @version     :   1.0
 * @since       :   04-03-2019
 * 
 * *************************************************************************************/

/**
 * To require the required files.
 */
var utility = require('../Data Structure Programs/DSAUtility/utilitys')
var read = require('readline-sync')

var stringInput = read.question("Enter the String : ")
var check = utility.palindromeChecker(stringInput)
if(check == true ){
    console.log("Strings are palindrome : ");
    }else{
        console.log("Strings are not palindrome : ");
    }
