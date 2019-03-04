var read = require('readline-sync');
var util = require('../DSAUtility/linkedList1')
var util1 = require('/home/admin1/bhupi/utility/utility')
var stackutil = require('../DSAUtility/stack')

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

    Stack(string) {

        var stack = new stackutil.Stack()
        var str = string.split(" ")

        if (str === '(' || str === ')') {

            for (var i = 0; i < str.length; i++) {

                var currentElement = str[i]
                if (stack.size() === 0) {
                    return false
                }
                if (currentElement === '(') {
                    stack.push(element)

                } else {
                    var lastElement = stack.peek()
                    if (lastElement === '(' && currentElement === ')') {

                    } else {
                        return false;
                    }
                }
            }
            if (stack.size() !== 0) {
                return false
            } else {
                return true
            }
        } else {
            console.log("Error!  Please enter only    '('   or   ')'   element ");

        }
    }
}
