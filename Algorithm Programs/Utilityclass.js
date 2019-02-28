//binarySearch method for integer
//binarySearch method for String
//insertionSort method for integer
//insertionSort method for String
//bubbleSort method for integer
//bubbleSort method for String

var utility = require('../utility/utility')

function Class() {
    var arr = [];
    var read = utility.input();
    read.question("Enter the size of Elemnts :", function (num) {
        
        arr = utility.CreateArray(num),
        read.question("Enter the search element  :", function (i) {
            arr = utility.BinarySearch(arr, i),
            console.log(arr);
        })     
    })
}
Class();