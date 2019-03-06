//Flipcoin
/*
 * To require the required files.
 */
var utility = require('../utility/utility')
var read = require('readline-sync');

var year = read.questionInt("Enter the year : ")
if (year > 999 && year < 10000) {
    var check = utility.leapyear(year)
    if (check = true) {
        console.log("Leap year : " + year);
    }
    else {
        console.log("Not a leap year : " + year);

    }
} else {
    console.log("please enter 4 digit number");

}