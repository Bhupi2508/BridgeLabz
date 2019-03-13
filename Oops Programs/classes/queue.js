/***************************************************************************************
 * Execution        : Default node             cmd> node queue.js 
 *
 * @file            : queue.js
 * 
 * @overview        : Commercial data processing program by using queue
 *                     
 * @author          : Bhupendra Singh <bhupendrasingh.ec18@gmail.com>
 * @version         : 1.0.  
 * @since           : 13/03/2019
 * **************************************************************************************/

/*
To require the required files.
*/
var file = require('fs')
var read = require('readline-sync')
var queue = require('/home/admin1/bhupi/Data Structure Programs/DSAUtility/queue')

class stockQueue {
    constructor(Data){
         /*
        @param - {object} Data
        */
        this.Data = Data
        this.Queue = new queue.QueueLinkedList();

        try {

            /*
            Data has all the information about company,
            create a for loop for add the elements from the Data
            */
            var data = this.Data;
            for (var i = 0; i < data.company.length; i++) {
                this.Queue.enqueue(data.company[i])
            }

        } catch (error) {
            console.log("error please check it")
        }

    }

    /***************************************************************************************************************/
    addinList() {
        try {

            console.log("************  Company List  ************");
            /*
            call the printStock method from DataStructure Queue for print
            all the elements
            */
            console.log(this.Queue.printStock());

            console.log("\n*** Now we are adding new company ***")
            var name = read.question("Enter company name which you want to add  : ")
            var flag = false;
            do {
                /*
                check whether is name string or not
                */
                if (!isNaN(name)) {
                    console.log("Please enter only aplhabets only");
                    break;
                } else {
                    flag = true;
                }
            } while (!flag);

            /*
            create a Date Object for Transatation
            */
            var date = new Date();
            var share = read.question("Enter company shares : ")
            var price = read.question("Enter share price : ")

            /*
            add your new list from user input
            */
            this.Queue.enqueue({ "name": name, "share": share, "price": price, "time" : date });
            console.log("\n*******  After added new company ********");
            console.log(this.Queue.printStock())

        } catch (error) {
            console.log("!error please check it again")
        }
    }


    /***************************************************************************************************************/
    removeFromList() {
        try {

            console.log("************* Company List ********************");

            /*
            call the printStock method from DataStructure Queue for print
            all the elements
            */
            console.log(this.Queue.printStock());

            /*
            Enter company name and delete from the list
            */
            var name = read.question("\nEnter company name which you want to remove by Queue : ")
            this.Queue.removeStock(name);

            console.log("\n********* Company List after updated ************");
            console.log(this.Queue.printStock());

        } catch (error) {
            console.log("!error, Please check it again ");
        }
    }


    /***************************************************************************************************************/
    print() {
        console.log("=============== Company List ================");
        console.log(this.Queue.printStock());
    }

    }

module.exports = {
    stockQueue
}