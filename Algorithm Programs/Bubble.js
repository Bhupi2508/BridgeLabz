//Bubble sorted
var utility = require('../utility/utility')
var read = require('readline-sync');

 var num = read.question("Enter the size of array : ")
        var arr = [];
        arr = utility.CreateArray(num),
            arr = utility.Bubble(arr),

            
        console.log("After sorted Array : " + arr);

