//binarySearch method for integer
//binarySearch method for String
//insertionSort method for integer
//insertionSort method for String
//bubbleSort method for integer
//bubbleSort method for String

var utility = require('../utility/utility')
var read = require('readline-sync');
var value = 0;
value = parseInt(read.question("Enter 1 for Binary Search Integer \n Enter 2 for Binary Search String \n Enter 3 for Insertion sort Integer \n Enter 4 for Insertion sort String \n Enter 5 for Bubble sort Integer \n Enter 6 for Bubble sort String"));

//binarySearch method for integer
switch (value) {
    case 1:
        var num = read.question("Enter the number")
        arr = utility.CreateArray(num);
        var s1 = utility.StopWatch();
        var k = BinarySearch(arr, low, high, key);
        var s2 = utility.StopWatch();
        console.log("Elapsed Time : " + (s2 - s1));
        break;

    case 2:
    var num = read.question("Enter the number : ")
        arr = utility.CreateArray1(num);
        var s1 = utility.StopWatch();
        var k = BinarySearch(arr, low, high, key);
        var s2 = utility.StopWatch();
        console.log("Elapsed Time : " + (s2 - s1));
        break;


}
