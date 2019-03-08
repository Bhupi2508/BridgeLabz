/*****************************************************************************************
 * Execution    :   cmd> node stackCalendar.js
 *                   
 * 
 * Purpose      :   Display Calender using Stack.
 * 
 * @description
 * 
 * @file        :   stackCalendar.js
 * @overview    :   Stack implementation and display calender.
 * @author      :   Bhupendra Singh<bhupendrasingh.ec18@gmail.com>
 * @version     :   1.0
 * @since       :   05-03-2019
 * 
 * *************************************************************************************/

/**
 * To require the required files.
 */
var utility = require('../Data Structure Programs/DSAUtility/utilitys')

var month = +process.argv[2]
var year = +process.argv[3]
utility.stackCalendar(month, year);