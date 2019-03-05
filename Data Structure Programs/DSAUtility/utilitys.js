var read = require('readline-sync');
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

        // try {
        var deque = new utilDeque.Deque();
        var flag = false;
      //  do {
            if (!isNaN(stringInput)) {
                console.log("Not a valid entry");
            }
            else {
                flag = true;
        //    }
       // } while (!flag)
       var arr = []
        var arr = stringInput.split("");
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
        console.log(string1);

        //add element from front
        for (var i = 0; i < arr.length; i++) {
            deque.addFront(arr[i])
        }

        //remove element from the rear
        for (var i = 0; arr.length; i++) {
            string2 = string2 + "" + deque.removeRear()
        }
        console.log(string2);
    }

        if (string1 == string2) {
            return true;
        } else {
            return false;
        }

        // }
        // catch (error) {
        //     console.log(error.message);
        // }
    },
}






