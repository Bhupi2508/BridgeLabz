//Binary Search word
var utility = require('../utility/utility')
var read = require('readline-sync');

var arr = []
var word = read.question("Enter which word you search :")
var arr = utility.binary(word)
var search = utility.binarySearch(arr, 0, arr.length-1 , word)


if (search >= 0) {
    console.log(word + "  is there in file");
}
else {
    console.log("Searching word " + word + " is Not there in file");
}

