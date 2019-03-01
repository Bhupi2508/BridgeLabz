//binarySearch method for integer
//binarySearch method for String
//insertionSort method for integer
//insertionSort method for String
//bubbleSort method for integer
//bubbleSort method for String

var utility = require('../utility/utility')
var read = require('readline-sync');
var value = 0;
value = parseInt(read.question(" Enter 1 for Binary Search Integer \n Enter 2 for Binary Search String \n Enter 3 for Insertion sort Integer \n Enter 4 for Insertion sort String \n Enter 5 for Bubble sort Integer \n Enter 6 for Bubble sort String  :  "));

//binarySearch method for integer
switch (value) {
    case 1:
        var num = read.question("Enter the size of array : ")
        arr = utility.CreateArray(num);
        var start = parseInt(read.question("Press Enter for start the time :"));
        var s1 = utility.StopWatch(start);
        var key = parseInt(read.question("Enter search element :"))
        var k = utility.BinarySearch(arr, 0, num - 1, key);
        console.log(k);
        var end = parseInt(read.question("Press Enter for stop the time :"));
        var s2 = utility.StopWatch(end);
        console.log("Elapsed Time : " + (s2 - s1));
        break;

    //binarySearch method for String
    case 2:
        var num = read.question("Enter the size of array : ")
        arr = utility.CreateArray1(num);
        var start = parseInt(read.question("Press Enter for start the time :"));
        var s1 = utility.StopWatch(start);
        var key = parseInt(read.question("Enter search element :"))
        var k = utility.BinarySearch(arr, 0, num - 1, key);
        console.log(k);
        var end = parseInt(read.question("Press Enter for stop the time :"));
        var s2 = utility.StopWatch(end);
        console.log("Elapsed Time : " + (s2 - s1));
        break;

    //insertionSort method for integer
    case 3:
        var num = read.question("Enter the size of array : ")
        arr = utility.CreateArray(num);
        var start = parseInt(read.question("Press Enter for start the time :"));
        var s1 = utility.StopWatch(start);
        var s1 = utility.StopWatch();
        var k = utility.Insertion(arr);
        console.log(k);
        var end = parseInt(read.question("Press Enter for stop the time :"));
        var s2 = utility.StopWatch(end);
        console.log("Elapsed Time : " + (s2 - s1));
        break;

    //insertionSort method for String
    case 4:
        var num = read.question("Enter the size of array : ")
        arr1 = utility.CreateArray1(num);
        var start = parseInt(read.question("Press Enter for start the time :"));
        var s1 = utility.StopWatch(start);
        var k = utility.Insertion(arr1);
        console.log(k);
        var end = parseInt(read.question("Press Enter for stop the time :"));
        var s2 = utility.StopWatch(end);
        console.log("Elapsed Time : " + (s2 - s1));
        break;

    //bubbleSort method for integer
    case 5:
        var num = read.question("Enter the size of array : ")
        arr = utility.CreateArray(num);
        var start = parseInt(read.question("Press Enter for start the time :"));
        var s1 = utility.StopWatch(start);
        var k = utility.Bubble(arr);
        console.log(k);
        var end = parseInt(read.question("Press Enter for stop the time :"));
        var s2 = utility.StopWatch(end);
        console.log("Elapsed Time : " + (s2 - s1));
        break;

    //bubbleSort method for String
    case 6:
        var num = read.question("Enter the size of array : ")
        arr = utility.CreateArray1(num);
        var start = parseInt(read.question("Press Enter for start the time :"));
        var s1 = utility.StopWatch(start);
        var k = utility.Bubble(arr);
        console.log(k);
        var end = parseInt(read.question("Press Enter for stop the time :"));
        var s2 = utility.StopWatch(end);
        console.log("Elapsed Time : " + (s2 - s1));
        break;
}
