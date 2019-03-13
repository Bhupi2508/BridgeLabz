/*
 * To require the required files.
 */

var read = require('readline-sync');                        //for user input
var take = require('util');                                 //for print in one line
var util = require('../DSAUtility/linkedList1')            // linkedList class
var util1 = require('/home/admin1/bhupi/utility/utility')  // fun & algo utility
var stackutil = require('../DSAUtility/stack')             // stack class
var utilQueue = require('../DSAUtility/queue')             // queue class
var utilDeque = require('../DSAUtility/Deque')             // deque class
var utilNum = require('../DSAUtility/number')              // number class 

module.exports = {

    /*===================================================================================================
    First Program = Unordered List
    */

    /*
        Desc -> Read the Text from a file, split it into words and arrange it as Linked List.
                Take a user input to search a Word in the List. If the Word is not found then add it
                to the list, and if it found then remove the word from the List. In the end save the
                list into a file

        Logic -> Create a Unordered Linked List. The Basic Building Block is the Node
                 Object. Each node object must hold at least two pieces of information. One ref to the data field and second the ref to the next node object.

    */

    unOrderedList(word) {
        try {
            var linkList = new util.LinkedList();
            var data = linkList.fileCall('/home/admin1/bhupi/Data Structure Programs/file.txt')

            for (var i = 0; i < data.length; i++) {
                linkList.add(data[i])
            }

            /*
            display the data
            */
            var display = linkList.display()
            console.log(display)

            /*
            search word from file
            */
            var check = linkList.search(word)
            console.log(check);

            /*
            if word is in file then remove
            */
            if (check == true) {
                linkList.remove(word)
                console.log("Removed Successfully");

                /*
                if word in not in file the add
                */
            } else {
                linkList.add(word)
                console.log("Added Successfully");
            }

            /*
            after apply condition print the final file
            */
            var display = linkList.display();
            linkList.writeFile('/home/admin1/bhupi/Data Structure Programs/file.txt', display)
        }
        catch (error) {
            console.error(error);
        }
    },

    /*===================================================================================================
    Second Program = Ordered list
    */

    /*
        Desc -> Read .a List of Numbers from a file and arrange it ascending Order in a
                Linked List. Take user input for a number, if found then pop the number out of the
                list else insert the number in appropriate position.

        Logic -> Create a Ordered Linked List having Numbers in ascending order.        
    */


    orderedList(number) {
        try {
            var linkList = new util.LinkedList();
            var data1 = linkList.fileCall('/home/admin1/bhupi/Data Structure Programs/file1.txt', 'utf8')
            var data = [];
            for (var i = 0; i < data1.length; i++) {
                data[i] = parseInt(data1[i])
            }

            console.log(data)

            /*
            sort data by bubble sort
            */
            var data = util1.bubble(data)
            console.log("After sorting");

            for (var i = 0; i < data.length; i++) {
                linkList.add(data[i])
            }
            var display = linkList.display()
            console.log(display)

            /*
            search number from file
            */
            var check = linkList.search(number)
            console.log(check);

            /*
            if word is in file then remove
            */
            if (check == true) {
                linkList.remove(number)
                console.log("Removed Successfully");

                /*
                if word in not in file the add
                */
            } else {
                linkList.add(number)
                console.log("Added Successfully");
            }

            var display = linkList.display();
            console.log("After delete or added : " + display);

            /*
            after apply condition print the final file
            */
            linkList.writeFile('/home/admin1/bhupi/Data Structure Programs/file1.txt', display)
        }
        catch (error) {
            console.error(error);
        }
    },




    /*===================================================================================================
    Third program = Stack
    */

    /*
        Desc ->   Take an Arithmetic Expression such as (5+6)∗(7+8)/(4+3)(5+6)∗(7+8)/(4+3) where                   parentheses are used to order the performance of operations. Ensure parentheses
                  must appear in a balanced fashion.

        Logic ->  Write a Stack Class to push open parenthesis “(“ and pop closed parenthesis “)”.
                  At the End of the Expression if the Stack is Empty then the Arithmetic Expression is Balanced. Stack Class Methods are Stack(), push(),
                  pop(), peak(), isEmpty(), size()         
     */

    stackBalanced(str) {
        try {

            /*
            str == userinputs expressions
            */
            var stack = new stackutil.Stack();
            var ch, i;


            /*
            Loop for take all the inputs
            */
            for (i = 0; i < str.length; i++) {
                ch = str.charAt(i);

                /*
                Check push conditions
                */
                if (ch == '(' || ch == '[' || ch == '{') {
                    stack.push(ch);
                }
                else {

                    switch (ch) {
                        /*
                        Check pop conditions 
                        */
                        case ')':
                            /*
                            notEqual to '('
                            */
                            if (stack.pop() != '(') {
                                return false;
                            }
                            break;
                        /*
                        notEqual to '['
                        */
                        case ']':
                            if (stack.pop() != '[') {
                                return false;
                            }
                            break;
                        /*
                        notEqual to '}'
                        */
                        case '}':
                            if (stack.pop() != '{') {
                                return false;
                            }
                            break;
                    }
                }
            }


            /*
            check the whether is empty or not
            */
            if (stack.getSize() == 0) {
                return true;
            }
            return false;
        } catch (error) {
            console.log(error.message);
        }
    },




    /*===================================================================================================
    Forth Program = Queue
    */

    /*
        Desc ->  Create a Program which creates Banking Cash Counter where people come in to deposit              Cash and withdraw Cash. Have an input panel to add people to Queue to either deposit             or withdraw money and dequeue the people. Maintain the Cash Balance.

        Logic ->  Write a Queue Class to enqueue and dequeue people to either deposit
                  or withdraw money and maintain the cash balance
     */

    queueBankCounter(ask) {
        try {

            var queue = new utilQueue.Queue();
            /*
            we considered that totalBank Cash is 10000
            */
            var totalBankCash = 10000;
            var put = []
            var flag = true;
            var amt = totalBankCash

            if (ask > 0) {
                for (var i = 0; i < ask; i++) {
                    var ans = read.question("Press 1 to deposit the cash\npress 2 to withdraw the cash \n ");
                    /*
                    deposit
                    */
                    if (ans == 1) {
                        var amount = read.question("Enter total amount do you want to Deposit : ");
                        var put = queue.enque(Number(amount));
                        flag = true;
                        amt = Number(amt) + Number(amount);
                        console.log("balance amount : " + amt);
                    }
                    /*
                    withdraw
                    */
                    else if (ans == 2) {
                        var amount = read.question("Enter total amount do you want to Withdraw : ");
                        var get = queue.enque(Number(-amount));
                        flag = true;
                        amt = Number(amt) - Number(amount);
                        console.log("balance amount : " + amt);
                    }
                    /*
                    if you entered wrong key
                    */
                    else {
                        console.log("Make sure that, you entered the correct key ");
                        flag = false;
                        return;
                    }
                }
            }
            else {
                console.log("Invalid input ");
                return;
            }
            /*
            if flag is equal to true
            */
            if (flag)
                var addition = 0;
            for (var i = 0; i < ask; i++) {
                /*
                add all the transaction 
                */
                addition = (addition + queue.deque());
            }
            console.log("Addition : " + addition);

            var totalTransaction = totalBankCash + addition;
            console.log("At the end of the day Total amount left in the bank ", totalTransaction);

            if (totalTransaction < totalBankCash) {
                return true;
            }
            else {
                return false;
            }
        } catch (error) {
            console.log(error.message);
        }
    },




    /*===================================================================================================
    Fifth Program = Palindrome-Checker
    */

    /*
        Desc -> A palindrome is a string that reads the same forward and backward, for example, radar,           toot, and madam. We would like to construct an algorithm to input a string of characters         and check whether it is a palindrome.

        Logic -> The solution to this problem will use a deque to store the characters of the string. We          will process the string from left to right and add each character to the rear of the             deque.
    */

    palindromeChecker(stringInput) {
        const input = stringInput.toString()


        try {
            var deque = new utilDeque.Deque();
            var flag = false;

            /*
            if input is not string
            */
            if (!isNaN(input)) {
                console.log("Not a valid entry")
            }

            /*
            if input is string
            */
            else {
                flag = true;
            }
            if (flag == true) {

                /*
                create an array
                */
                var arr = []

                /*
                split the string
                */
                var arr = input.split("");

                /*
                take  two string
                */
                var string1 = "";
                var string2 = "";

                /*
                add element from front
                */
                for (var i = 0; i < arr.length; i++) {
                    deque.addFront(arr[i])
                }

                /*
                remove element from front
                */
                for (var i = 0; i < arr.length; i++) {
                    string1 = string1 + "" + deque.removeFront()
                }
                console.log("string1 : ", string1);

                /*
                add element from front
                */
                for (var i = 0; i < arr.length; i++) {
                    deque.addFront(arr[i])
                }

                /*
                remove element from the rear
                */
                for (var i = 0; i < arr.length; i++) {
                    string2 = string2 + "" + deque.removeRear();
                }
                console.log("string2 : ", string2);

                /*
                check the both strings
                */
                if (string1 == string2) {
                    return true;
                } else {
                    return false;
                }
            }
        }
        catch (error) {
            console.log(error.message);
        }

    },



    /*==================================================================================================
    Seveth Program = Binary Search Tree
    */

    /*
        Desc ->  A binary tree is a binary search tree (BST) if all the non-empty nodes follows both             two properties:
                 If node has a left subtree, then all the values in its left subtree are smaller than the value of the current node.
                 If node has a right subtree, then all the value in its right subtree are greater than the value of the current node.
                 You are given N nodes, each having unique value ranging from [1, N], how many different binary search tree can be created using all of them.

    */

    binarySearchTree(arr) {
        try {

            var sum = ""

            for (var i = 0; i < arr.length; i++) {
                var fact = this.factorization(arr[i]);
                var fact1 = this.factorization(arr[i] * 2);
                var fact2 = this.factorization(arr[i] + 1);


                /*
                Formula is  "T(n) = (2n)! / (n+1)!n!"
                */
                var output = fact1 / (fact2 * fact);
                sum = sum + " " + output
            }
            return sum;
        } catch (error) {
            console.log(error.message);
        }

    },



    /*==================================================================================================
    Eight program = Calendar
    */

    /*
        Desc ->  program ​ Calendar.java that takes the month and year as command-line arguments and             prints the Calendar of the month. Store the Calendar in an 2D Array, the first                  dimension the week of the month and the second dimension stores the day of the week.            Print the result as following.

    */

    calendar(month, year) {
        try {

            /*
            month, year = userinputs
            create week, dates, aMonth
            */
            var week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
            var dates = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
            var aMonth = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

            var day = util1.dayOfWeek(1, month, year);
            console.log("day : " + day);

            var leap = util1.leapyear(year)
            if (leap = true) {
                dates[2] = 29;
            }
            /*
            -1, because array start from 0
            */
            take.print(aMonth[month - 1] + " " + year);
            console.log();

            /*
            Print all the day
            */
            for (var i = 0; i < week.length; i++) {
                take.print(week[i] + "  ");
            }
            console.log();
            for (var i = 0; i < (day * 5); i++) {
                take.print(" ");
            }

            /*
            Print all the dates
            */
            for (var i = 1; i <= dates[month]; i++) {
                if (i < 10) {
                    take.print(" " + i + "   ");
                }

                if (i > 9) {
                    take.print("" + i + "   ")
                }
                if ((i + day) % 7 == 0) {
                    console.log();
                }
            }
            console.log("\n\n");
        } catch (error) {
            console.log(error.message);
        }
    },


    /*==================================================================================================
    Factorial program
    */

    factorization(number) {
        try {
            /*
            use recursion function
            */
            var fact = 1;
            for (let i = 1; i <= number; i++) {
                fact = fact * i;
            }
            return fact;
        } catch (error) {
            console.log(error.message);
        }
    },



    /*==================================================================================================
    Ninth Program = Week Days
    */

    /*
        Desc -> Create the Week Object having a list of WeekDay objects each storing the day (i.e S,M,T,        W,Th,..) and the Date (1,2,3..) . The WeekDay objects are stored in a Queue implemented         using Linked List. Further maintain also a Week Object in a Queue to finally display            the Calendar.

        Note -> If a particular day has no date then the date is set as empty string and add it
                to queue.

    */

    /*
    take input month % year
    */
    weekDays(month, year) {
        try {
            var weekDays = new utilQueue.QueueLinkedList();
            var date = new utilQueue.QueueLinkedList()

            /*
            cal dayOfWeek method from utility
            */
            var dDate = util1.dayOfWeek(1, month, year);
            console.log("day : " + dDate);
            console.log();


            var result = ["sun", "Mon", "Tue", "Wed", "Thru", "Fri", "Sat"];

            if (dDate <= result.length) {
                console.log("Day fall on : " + result[dDate]);
            }
            console.log();

            /*
            call the switch method which is return dates
            */
            var days = utilQueue.monthof(month)
            console.log("days : " + days);

            /*
            call the leap year method for 'FEB' that is leap year or not
            */
            var lYear = util1.leapyear(year);
            if (lYear == true) {
                console.log("Leap year");

            } else {
                console.log("Not a leap year");

            }
            console.log();

            console.log("***************CALENDAR*****************");


            /*
            if leap year then change 28 to 29
            */
            if (lYear) {
                if (month == 2) {
                    days = 29;
                }
            }

            /*
            store the week in queue
            */
            for (var i = 0; i < result.length; i++) {
                weekDays.enqueue(result[i]);
            }

            /*
            store the dates in queue
            */
            for (var i = 1; i <= days; i++) {
                date.enqueue(i);
            }

            /*
            print the element from queue
            */
            for (var i = 0; i < result.length; i++) {
                take.print(weekDays.deque() + "   ");
            }
            console.log();
            console.log();

            /*
            for print the first date in calendar && 6 is set for Space
            */
            for (var i = 0; i < (dDate * 6); i++) {
                take.print(" ");
            }


            for (var i = 1; i <= days; i++) {
                /*
                if the date < 10 then print those space
                */
                if (i < 10) {
                    take.print("  " + date.deque() + "   ");
                }
                /*
                if the date > 9 then print those space
                */
                if (i > 9) {
                    take.print(" " + date.deque() + "   ");
                }
                /*
                for next line after 7 seven element
                */
                if ((dDate + i) % 7 == 0) {
                    console.log();
                }
            }
            console.log();
            console.log();
        } catch (error) {
            console.log(error.message);
        }
    },



    /*==================================================================================================
    Tenth Program = Calendar program to store the Queue in two Stacks
    */

    /*
        Desc -> Modify the above program to store the Queue in two Stacks. Stack here is also                   implemented using Linked List and not from Collection Library

    */

    stackCalendar(month, year) {
        try {
            /*
            create Queue and stack dir
            */
            var dayQueue = new utilQueue.Queue();
            var dateQueue = new utilQueue.Queue();
            var stackutil1 = new stackutil.Stack();
            var stackutil2 = new stackutil.Stack();

            /*
            call dayOfWeek method for current day
            */
            var dateValue = util1.dayOfWeek(Number(1), Number(month), Number(year));
            console.log(dateValue);


            var week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
            var dates = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
            var months = ["", "Jan", "Feb", "Mar", "April", "May", "Jun", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];

            /*
            call leapYear method for check leapyear or not
            */
            var leapY = util1.leapyear(year)
            if (leapY == true) {
                console.log("Leap year : " + year);
            }
            else {
                console.log("Not a leap year : " + year);
            }

            /*
            if year is leap year then Feb day = 29 
            */
            if (month == 2) {
                dates[2] = 29
            }

            for (var i = 0; i < 7; i++) {
                /*
                first store week in enque
                */
                dayQueue.enque(week[i])

                /*
                first deque day from Queue, then push in stack
                */
                stackutil1.push(dayQueue.deque())
            }

            for (let i = 1; i <= dates[month]; i++) {
                /*
                first store date in enque
                */
                dateQueue.enque(i)

                /*
                first deque date from Queue, then push in stack
                */
                stackutil2.push(dateQueue.deque());
            }

            /*
            call the reverse method from the Stack
           */
            var revstk1 = stackutil1.reverseStack();
            var revstk2 = stackutil2.reverseStack();
            console.log();

            console.log("*************** CALENDAR *****************");

            for (var i = 0; i < 7; i++) {
                /*
                print day from reverse stack-1
                */
                take.print(revstk1.pop() + "   ");
            }
            console.log();
            console.log();

            /*
            create space for between the days
            */
            for (var i = 0; i < (dateValue * 6); i++) {
                take.print(" ")
            }

            /*
            print date from reverse stack-2
            */
            for (var i = 0; i < dates[month]; i++) {
                var ch = revstk2.pop();

                if (i < 10) {
                    take.print("  " + ch + "   ")
                }
                if (i > 9) {
                    take.print(" " + ch + "   ")
                }
                if ((dateValue + ch) % 7 == 0) {
                    console.log();

                }
            }
            console.log();
            console.log();

        } catch (error) {
            console.log(error.message);
        }
    },



    /*==================================================================================================
    Eleventh Program = Store the prime numbers in a 2D Array
    */

    /*
        Desc -> Take a range of 0 - 1000 Numbers and find the Prime numbers in that range. Store the            prime numbers in a 2D Array, the first dimension represents the range 0-100, 100-200,           and so on. While the second dimension represents the prime numbers in that range.

    */

    primeNumber() {

        try {
            var primeArr = [[], [], [], [], [], [], [], [], [], []]
            var firstNum = 2;
            var lastNum = 100;

            console.log();
            console.log("Prime Numbers in the given range are :\n");

            /*
            Loop from 0 to 10 and stores the prime numbers and stores the values in each index.
            */
            for (var i = 0; i < 10; i++) {
                /*
                call the Prime number range method 
                */
                primeArr[i] = utilNum.primeNumberRange(firstNum, lastNum);

                /*
                increase the value +100 for next node
                */
                firstNum = firstNum + 100;
                lastNum = lastNum + 100;

            }

            /*
            These are used for count the numbers
            */
            var start = 0;
            var end = 100;

            /*
            To print the prime numbers in the range 0-­100,100­-200, and so on.
            */
            for (var j = 0; j < 10; j++) {
                take.print(
                    "[" + "[" + start + "-" + end + "]" + "," + " " + "[" + primeArr[j] + "]" + "]"
                );

                /*
                increase the value
                */
                start = start + 100;
                end = end + 100;
                console.log();
            }
            console.log("\n");
        }
        catch (error) {
            console.log(error.message);
        }
    },




    /*==================================================================================================
    Twelfth Program = Prime number with anagram
    */

    /*  
    Desc -> Extend the Prime Number Program and store only the numbers in that range that are Anagrams.         For e.g. 17 and 71 are both Prime and Anagrams in the 0 to 1000 range. Further store in a           2D Array the numbers that are Anagram and numbers that are not Anagram.

    */

    primeAnagram() {
        try {

            /*
            create a 2-D array
            */
            var array = [
                ["0 - 100 "],
                ["100-200 "],
                ["200-300 "],
                ["300-400 "],
                ["400-500 "],
                ["500-600 "],
                ["600-700 "],
                ["700-800 "],
                ["800-900 "],
                ["900-1000"]
            ];

            var arr = []
            var arr1 = []

            /*
            considered range = 100 for every row
            */
            range = 100;
            var row = 0;
            var col = 1;

            for (var num = 2; num <= 1000; num++) {

                /*
                call the prime number function
                */
                if (utilNum.primeNum(num)) {

                    if (num <= range) {
                        var a = "" + num;

                        /*
                        split and sortthe number
                        */
                        var b = a.split("")
                        b.sort();
                        var temp = "";

                        for (var i = 0; i < b.length; i++) {
                            temp = temp + b[i]
                        }

                        /*
                         if num is not available in array 
                        */
                        if (!arr.includes(temp)) {
                            arr.push(temp);
                            array[row][col] = num;
                            col++;
                        }
                    } else {
                        var a1 = "" + num;

                        /*
                        split and sort the num
                        */
                        var b1 = a1.split("")
                        b1.sort();
                        var temp1 = "";

                        for (var i = 0; i < b1.length; i++) {
                            temp1 = temp1 + b1[i]
                        }

                        /*
                        if num is not available in array 
                        */
                        if (!arr.includes(temp1)) {
                            arr1.push(temp1);
                            col = 1;

                            /*
                            increase the row
                            */
                            range = range + 100;
                            row++;
                            array[row][col] = num;
                        }
                    }
                }
            }

            /*
            print the all numbers
            */
            for (var i = 0; i < array.length; i++) {
                for (var j = 0; j < array[i].length; j++) {
                    take.print(array[i][j] + " ");
                    if (j == 0)
                        take.print("  : ");
                }
                console.log();
            }

        } catch (error) {
            console.log(error.message);
        }
    },




    /*==================================================================================================
    Thirteen Program = Prime Number using Stack LinkedList 
    */

    /*  
        Desc -> Add the Prime Numbers that are Anagram in the Range of 0 - 1000 in a Stack using the            Linked List and Print the Anagrams in the Reverse Order. Note no Collection Library can         be used.
       
    */

    linkedlistPrime() {
        try {

            var arr = []
            var stack = new stackutil.Stacks()

            /*
            check prime number or not
            */
            for (var i = 2; i <= 1000; i++) {
                if (utilNum.primeNum(i))
                    arr.push(i)
            }

            console.log("Anagrams are in reverse order :");

            for (var i = 0; i < arr.length; i++) {
                for (var j = i + 1; j < arr.length; j++) {

                    /*
                    check anagram or not
                   */
                    if (util1.anagram1(arr[i], arr[j])) {

                        /*
                        store all the value in stack
                        */
                        stack.push(Number(arr[i]));
                        stack.push(Number(arr[j]));
                    }
                }
            }

            /*
            call the stack linkedlist method
            */
            var result = stack.print();
            take.print(result + "\n")


        } catch (error) {
            console.log(error.message);
        }
    },






    /*==================================================================================================
    Forteeth Program =Prime number using Queue Linkedlist 
    */

    /*
        Desc -> Add the Prime Numbers that are Anagram in the Range of 0 - 1000 in a Queue using the            Linked List and Print the Anagrams from the Queue. Note no Collection Library can be            used.

    */

    linkedListQueuePrime() {
        try {

            var queue = new utilQueue.QueueLinkedList();
            var arr = []
            /*
            check prime or not
            */
            for (var i = 0; i <= 1000; i++) {
                if (utilNum.primeNum(i))
                    /*
                    push in arr array
                    */
                    arr.push(i);
            }

            for (var i = 0; i < arr.length; i++) {
                for (var j = i + 1; j < arr.length; j++) {
                    if (util1.anagram1(arr[i], arr[j])) {
                        /*
                        store in queue
                        */
                        queue.enqueue(arr[i])
                        queue.enqueue(arr[j])
                    }
                }
            }

            console.log("These all numbers are prime and Anagram");

        } catch (error) {
            console.log(error.message);
        }
    }
}






