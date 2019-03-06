//Bubble sorted
/*
 * To require the required files.
 */
var utility = require('../utility/utility')
var read = require('readline-sync');

 var num = read.question("Enter the size of array : ")
        var arr = [];
        arr = utility.createArray(num),
            arr = utility.bubble(arr),

            
        console.log("After sorted Array : " + arr);

