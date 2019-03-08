/******************************************************************************
 *  Execution       :   1. default node          : cmd>node dayofweek.js 
 *                      
 * 
 *  Purpose         : Entered date comes which day
 * 
 *  @description    
 * 
 *  @file           : dayofweek.js
 *  @overview       : Output prints like 'sunday'
 *  @author         : Bhupendra Singh<bhupendrasingh.ec18@gmail.com>
 *  @version        : 1.0
 *  @since          : 26/02/2019
 *
 ******************************************************************************/

/*
 * To require the required files.
 */
var utility = require('../utility/utility')

var d = +process.argv[2]
var m = +process.argv[3]
var y = +process.argv[4]
var Day = utility.dayOfWeek(d, m, y);

var num = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thrusday", "Friday", "Saturday"];

if (Day <= num.length) {
    console.log("Day is : " + num[Day]);
}
else {
    console.log("Invalid num");
}
