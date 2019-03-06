//Binary Search
/*
 * To require the required files.
 */
var utility = require('../utility/utility')
var read = require('readline-sync');


//var read = utility.input();

var num = read.question("Enter the size of Elemnts :")
var arr = [];
arr = utility.createArray(num)

var key = parseInt(read.question("Enter search element :"))
var sa = utility.binarySearch(arr, 0, num-1, key)


if (sa > 0) {
    console.log("Elements found : " + Number(sa));
} else {
    console.log("Invalid Output : ");
}
            
