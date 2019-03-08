/*****************************************************************************************
 * Execution    :   1. cmd> node calendar.js
 *                   
 * 
 * Purpose      :   Display calender.
 * 
 * @description
 * 
 * @file        :   calendar.js
 * @overview    :   Month and year as command-line arguments and prints the Calendar of the
 *                  month.Store the Calendar in an 2D Array.
 * @author      :   Bhupendra Singh<bhupendrasingh.ec18@gmail.com>
 * @version     :   1.0
 * @since       :   04-03-2019
 * 
 * *************************************************************************************/

/**
 * To require the required files.
 */
var read = require('readline-sync');
var utility = require('../Data Structure Programs/DSAUtility/utilitys')

var month = +process.argv[2];
var year = +process.argv[3];
utility.calendar(month, year)