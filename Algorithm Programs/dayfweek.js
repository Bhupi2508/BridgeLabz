//Day of week
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
