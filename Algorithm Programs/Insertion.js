//Insertion sorted
var utility = require('../utility/utility')
var read = require('readline-sync');

var num = read.question("Enter the size of array : ")

var arr1 = [];
arr1 = utility.CreateArray1(num),
    arr1 = utility.Insertion(arr1),


    console.log("After Insertion sorting : " + arr1);

