/*************************************************************************************
* Execution    :   1. cmd> node number.js
* Purpose      :   To have all the functionalities of DataStructure Programs.
* 
* @description
* 
* @file        :   number.js
* @overview    :   Export the functionalities to developers for reuseability,
*                  simplification of coding.
* @author      :   Bhupendra Singh<bhupendrasingh.ec18@gmail.com>
* @version     :   1.0
* @since       :   05-03-2019
* 
* *************************************************************************************/

var utility = require('/home/admin1/bhupi/utility/utility')
var take = require('util');

//Prime Number range condition
module.exports = {

    primeNumberRange(firstNum, lastNum) {
        try {

            var arr = []
            if (firstNum < lastNum) {
                for (var i = firstNum; i <= lastNum; i++) {
                    var flag = false;
                    for (var j = 2; j < i; j++) {
                        if (i % j == 0) {
                            flag = true;
                            break;
                        }
                    }
                    if (flag == false) {
                        arr.push(j);
                    }
                }
            } else {
                console.log("Last number is less than starting number, Please Enter correct num");
            }
            return arr;
        }
        catch (error) {
            console.log("error");

        }
    },

    //Dimentional Array 
    dArray() {
        try {
            var arr = [];
            var array = [
                ["[0 - 100]  "],
                ["[100-200]  "],
                ["[200-300]  "],
                ["[300-400]  "],
                ["[400-500]  "],
                ["[500-600]  "],
                ["[600-700]  "],
                ["[700-800]  "],
                ["[800-900]  "],
                ["[900-1000]"]
            ];

            for (var i = 2; i < 1000; i++) {
                if (this.primeNum(i)) {
                    arr.push(i);
                }
            }
            var range = 100;
            var k = 0;
            for (var i = 0; i < arr.length; i++) {
                for (var j = i + 1; j < arr.length; j++) {
                    if (utility.anagram1(arr[i], arr[j]))
                        if (arr[i] <= range) {
                            if (arr[j] <= range) {
                                array[k].push(arr[i]);
                                array[k].push(arr[j]);
                            }
                        } else {
                            range = range + 100;
                            k++;
                            if (arr[j] <= range) {
                                array[k].push(arr[i]);
                                array[k].push(arr[j]);
                            }
                        }
                }
            }


            console.log("The Number which are prime and anagram : ");
            console.log();


            for (let i = 0; i < array.length; i++) {
                for (let j = 0; j < array[i].length; j++) {
                    take.print(array[i][j]);
                    if (j == 0) {
                        take.print(" : ");
                    } else {
                        if (j != array[i].length -1)
                            take.print(",");
                    }
                }
                console.log();
            }
        } catch (error) {
            console.log(error.message);
        }
    },


    //Prime number
    primeNum(num) {
        if (num == 0 || num == 1) {
            return false;
        } else {
            for (let i = 2; i < num; i++) {
                if (num % i == 0) {
                    return false;
                }
            }
            return true;
        }
    },
}

