/*
 * To require the required files.
 */

var read = require('readline-sync');
var take = require('util');
var util = require('../DSAUtility/linkedList1')
var util1 = require('/home/admin1/bhupi/utility/utility')
var stackutil = require('../DSAUtility/stack')
var utilQueue = require('../DSAUtility/queue')
var utilDeque = require('../DSAUtility/Deque')
module.exports = {

    //===================================================================================================
    //First Program = Unordered List

    /*
        Desc :-
        @author   - Bhupendra
        @Program  - Unordered List 
        @version  - 1.0
        @Date     - 02/03/2019

        Read the Text from a file, split it into words and arrange it as Linked List. Take a user input to search a Word in the List. If the Word is not found then add it to the list, and if it found then remove the word from the List. In the end save the list into a file
    */

    unOrderedList(word) {
        try {
            var linkList = new util.LinkedList();
            var data = linkList.fileCall('/home/admin1/bhupi/Data Structure Programs/file.txt')

            for (var i = 0; i < data.length; i++) {
                linkList.add(data[i])
            }
            var display = linkList.display()
            console.log(display)


            var check = linkList.search(word)

            console.log(check);

            if (check == true) {


                linkList.remove(word)
                console.log("Removed Successfully");

            } else {
                linkList.add(word)
                console.log("Added Successfully");
            }

            var display = linkList.display();
            linkList.writeFile('/home/admin1/bhupi/Data Structure Programs/file.txt', display)
        }
        catch (error) {
            console.error(error);
        }
    },

    //===================================================================================================
    //Second Program = Ordered list

    /*
        Desc :-
        @author   - Bhupendra
        @Program  - Ordered List 
        @version  - 1.0
        @Date     - 02/03/2019

        Read .a List of Numbers from a file and arrange it ascending Order in a Linked List. Take user input for a number, if found then pop the number out of the list else insert the number in appropriate position.
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

            var data = util1.bubble(data)
            console.log("After sorting");

            for (var i = 0; i < data.length; i++) {
                linkList.add(data[i])
            }
            var display = linkList.display()
            console.log(display)


            var check = linkList.search(number)

            console.log(check);

            if (check == true) {
                linkList.remove(number)
                console.log("Removed Successfully");

            } else {
                linkList.add(number)
                console.log("Added Successfully");
            }

            var display = linkList.display();
            console.log("After delete or added : " + display);

            linkList.writeFile('/home/admin1/bhupi/Data Structure Programs/file1.txt', display)
        }
        catch (error) {
            console.error(error);
        }
    },




    //===================================================================================================
    //Third program = Stack

    /*
        Desc :-
        @author   - Bhupendra
        @Program  - Simple Balanced Parentheses by using Stack
        @version  - 1.0
        @Date     - 03/03/2019

        Write a Stack Class to push open parenthesis “(“ and pop closed parenthesis “)”. At the End of the Expression if the Stack is Empty then the Arithmetic Expression is Balanced. Stack Class Methods are Stack(), push(), pop(), peak(), isEmpty(), size().
     */

    stackBalanced(str) {
        //str == userinputs expressions
        var stack = new stackutil.Stack();
        var ch, i;


        //Loop for take all the inputs
        for (i = 0; i < str.length; i++) {
            ch = str.charAt(i);

            //Check push conditions
            if (ch == '(' || ch == '[' || ch == '{') {
                stack.push(ch);
            }
            else {

                switch (ch) {
                    //Check pop conditions 
                    case ')':
                        //notEqual to '('
                        if (stack.pop() != '(') {
                            return false;
                        }
                        break;
                    //notEqual to '['
                    case ']':
                        if (stack.pop() != '[') {
                            return false;
                        }
                        break;
                    //notEqual to '}'
                    case '}':
                        if (stack.pop() != '{') {
                            return false;
                        }
                        break;
                }
            }
        }


        //check the whether is empty or not
        if (stack.getSize() == 0) {
            return true;
        }
        return false;
    },




    //===================================================================================================
    //forth Program = Queue

    /*
        Desc :-
        @author   - Bhupendra
        @Program  - Banking Cash Counter by using Queue
        @version  - 1.0
        @Date     - 03/03/2019

        Create a Program which creates Banking Cash Counter where people come in to deposit Cash and withdraw Cash. Have an input panel to add people to Queue to either deposit or withdraw money and dequeue the people. Maintain the Cash Balance.
        True or False to Show Arithmetic Expression is balanced or not.
     */

    queueBankCounter(ask) {

        var queue = new utilQueue.Queue();
        //we considered that totalBank Cash is 10000
        var totalBankCash = 10000;
        var put = []
        var flag = true;
        var amt = totalBankCash

        if (ask > 0) {
            for (var i = 0; i < ask; i++) {
                var ans = read.question("Press 1 to deposit the cash\npress 2 to withdraw the cash \n ");
                //deposit
                if (ans == 1) {
                    var amount = read.question("Enter total amount do you want to Deposit : ");
                    var put = queue.enque(Number(amount));
                    flag = true;
                    amt = Number(amt) + Number(amount);
                    console.log("balance amount : " + amt);
                }
                //withdraw
                else if (ans == 2) {
                    var amount = read.question("Enter total amount do you want to Withdraw : ");
                    var get = queue.enque(Number(-amount));
                    flag = true;
                    amt = Number(amt) - Number(amount);
                    console.log("balance amount : " + amt);
                }
                //if you entered wrong key
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
        //if flag is equal to true
        if (flag)
            var addition = 0;
        for (var i = 0; i < ask; i++) {
            //add all the transaction 
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
    },




    //===================================================================================================
    //Fifth Program = Palindrome-Checker

    /*
        Desc :-
        @author   - Bhupendra
        @Program  - Banking Cash Counter by using Queue
        @version  - 1.0
        @Date     - 04/03/2019

        A palindrome is a string that reads the same forward and backward, for example, radar, toot, and madam. We would like to construct an algorithm to input a string of characters and check whether it is a palindrome.
    */

    palindromeChecker(stringInput) {
        const input = stringInput.toString()


        try {
            var deque = new utilDeque.Deque();
            var flag = false;

            //if input is not string
            if (!isNaN(input)) {
                console.log("Not a valid entry")
            }

            //if input is string
            else {
                flag = true;
            }
            if (flag == true) {

                //create an array
                var arr = []

                //split the string
                var arr = input.split("");

                //take  two string
                var string1 = "";
                var string2 = "";

                //add element from front
                for (var i = 0; i < arr.length; i++) {
                    deque.addFront(arr[i])
                }

                //remove element from front
                for (var i = 0; i < arr.length; i++) {
                    string1 = string1 + "" + deque.removeFront()
                }
                console.log("string1 : ", string1);

                //add element from front
                for (var i = 0; i < arr.length; i++) {
                    deque.addFront(arr[i])
                }

                //remove element from the rear
                for (var i = 0; i < arr.length; i++) {
                    string2 = string2 + "" + deque.removeRear();
                }
                console.log("string2 : ", string2);

                //check the both strings
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



    //===================================================================================================
    //Seveth Program = Binary Search Tree

    /*
        Desc :-
        @author   - Bhupendra
        @Program  - Banking Cash Counter by using Queue
        @version  - 1.0
        @Date     - 04/03/2019
     
        It can be empty (null).
        It can contain a root node which contain some value and two subtree, left subtree and right subtree, which are also binary tree.
    */

    binarySearchTree(arr) {

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

    },



    //===================================================================================================
    //Eight program = Calendar

    /*
        Desc :-
        @author   - Bhupendra
        @Program  - Calendar
        @version  - 1.0
        @Date     - 04/03/2019
     
        A program Calendar.java that takes the month and year as command-line arguments and prints the Calendar of the month. Store the Calendar in an 2D Array, the first dimension the week of the month and the second dimension stores the day of the week.
    */

    calendar(month, year) {

        //create week, dates, aMonth
        var week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        var dates = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        var aMonth = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

        var day = util1.dayOfWeek(1, month, year);
        console.log("day : " + day);

        var leap = util1.leapyear(year)
        if (leap = true) {
            dates[2] = 29;
        }
        take.print(aMonth[month - 1] + " " + year);
        console.log();

        for (var i = 0; i < week.length; i++) {
            take.print(week[i] + "  ");
        }
        console.log();
        for (var i = 0; i < (day * 5); i++) {
            take.print(" ");
        }
        //console.log();
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
    },


    //===================================================================================================
    //Factorial program

    factorization(number) {
        try {
            var fact = 1;
            for (let i = 1; i <= number; i++) {
                fact = fact * i;
            }
            return fact;
        } catch (error) {
            console.log(error.message);
        }
    },



    //===================================================================================================
    //Ninth Program = Week Days

    /*
        Desc :-
        @author   - Bhupendra
        @Program  - Calendar by using Queue implemented
        @version  - 1.0
        @Date     - 05/03/2019
    */

    //take input month % year
    weekDays(month, year) {
        var weekDays = new utilQueue.QueueLinkedList();
        var date = new utilQueue.QueueLinkedList()

        //cal dayOfWeek method from utility
        var dDate = util1.dayOfWeek(1, month, year);
        console.log("day : " + dDate);
        console.log();


        var result = ["sun", "Mon", "Tue", "Wed", "Thru", "Fri", "Sat"];

        if (dDate <= result.length) {
            console.log("Day fall on : " + result[dDate]);
        }
        console.log();

        //call the switch method which is return dates
        var days = utilQueue.monthof(month)
        console.log("days : " + days);

        //call the leap year method for 'FEB' that is leap year or not
        var lYear = util1.leapyear(year);
        if (lYear == true) {
            console.log("Leap year");

        } else {
            console.log("Not a leap year");

        }
        console.log();

        console.log("***************CALENDAR*****************");


        //if leap year then change 28 to 29
        if (lYear) {
            if (month == 2) {
                days = 29;
            }
        }

        //store the week in queue
        for (var i = 0; i < result.length; i++) {
            weekDays.enqueue(result[i]);
        }

        //store the dates in queue
        for (var i = 1; i <= days; i++) {
            date.enqueue(i);
        }

        //print the element from queue
        for (var i = 0; i < result.length; i++) {
            take.print(weekDays.deque() + "   ");
        }
        console.log();
        console.log();

        //for print the first date in calendar && 6 is set for Space
        for (var i = 0; i < (dDate * 6); i++) {
            take.print(" ");
        }


        for (var i = 1; i <= days; i++) {
            //if the date < 10 then print those space
            if (i < 10) {
                take.print("  " + date.deque() + "   ");
            }
            //if the date > 9 then print those space
            if (i > 9) {
                take.print(" " + date.deque() + "   ");
            }
            //for next line after 7 seven element
            if ((dDate + i) % 7 == 0) {
                console.log();
            }
        }
        console.log();
        console.log();
    },



    //===================================================================================================
    //Tenth Program = Calendar program to store the Queue in two Stacks

    /*
        Desc :-
        @author   - Bhupendra
        @Program  - Calendar by using Stack
        @version  - 1.0
        @Date     - 05/03/2019

       This program to store the Queue in two Stacks. Stack here is also implemented using Linked List and not from Collection Library
    */

    stackCalendar(month, year) {
        var dayQueue = new utilQueue.Queue();
        var dateQueue = new utilQueue.Queue();
        var stackutil1 = new stackutil.Stack();
        var stackutil2 = new stackutil.Stack();

        var dateValue = util1.dayOfWeek(Number(1), Number(month), Number(year));
        console.log(dateValue);

        var week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        var dates = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        var months = ["", "Jan", "Feb", "Mar", "April", "May", "Jun", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];

        var leapY = util1.leapyear(year)
        if (leapY == true) {
            console.log("Leap year : " + year);
        }
        else {
            console.log("Not a leap year : " + year);
        }

        if (month == 2) {
            dates[2] = 29
        }

        for (var i = 0; i < 7; i++) {
            dayQueue.enque(week[i])
           var r = stackutil1.push(dayQueue.deque())
           console.log(r);
           
        }

        for (let i = 1; i <= dates[month]; i++) {
            dateQueue.enque(i)
           var k = stackutil2.push(dateQueue.deque());
           console.log(k);
           
        }

        var revstk1 = stackutil1.reverseStack();
        var revstk2 = stackutil2.reverseStack();
        console.log();

        console.log("*************** CALENDAR *****************");

        for (var i = 0; i < 7; i++) {
            take.print("  " + revstk1.pop());
        }
        console.log();
        console.log();

        for (var i = 0; i < (dateValue * 4 + 2); i++) {
            take.print(" ")
        }

        for (var i = 0; i < dates[months]; i++) {
            var ch = revstk2.pop();

            if (i < 10) {
                take.print(ch + "   ")
            }
            if (i > 9) {
                take.print("" + ch + "  ")
            }
            if ((dateValue + ch) % 7 == 0) {
                console.log();
                take.print(" ")
            }
        }
    }
}






