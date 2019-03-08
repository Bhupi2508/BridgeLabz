/*****************************************************************************************
 * Execution    :   1. cmd> node weekDays.js
 *                   
 * 
 * Purpose      :   Display Calender using Queue.
 * 
 * @description
 * 
 * @file        :   weekDays.js
 * @overview    :   Queue implementation and display calender.
 * @author      :   Bhupendra Singh<bhupendrasingh.ec18@gmail.com>
 * @version     :   1.0
 * @since       :   05-03-2019
 * 
 * *************************************************************************************/

/**
 * To require the required files.
 */
var utility = require('../Data Structure Programs/DSAUtility/utilitys')
var read = require('readline-sync');

var month = read.questionInt("Enter the month : ")
var year = read.questionInt("Enter the year : ")
utility.weekDays(month, year);