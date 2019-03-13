/***************************************************************************************
 * Execution        : Default node             cmd> node stack.js 
 *
 * @file            : stack.js
 * 
 * @overview        : Commercial data processing program by using stack
 *                     
 * @author          : Bhupendra Singh <bhupendrasingh.ec18@gmail.com>
 * @version         : 1.0.  
 * @since           : 12/03/2019
 * **************************************************************************************/

/*
To require the required files.
*/
var file = require('fs')
var read = require('readline-sync')
var takeDSA = require('/home/admin1/bhupi/Data Structure Programs/DSAUtility/stack')

class StackStock {
    constructor(Data) {
         /*
        @param - {object} Data
        */
         this.Data = Data;

        this.Stack = new takeDSA.Stacks();
        try {

            /*
            Data has all the information about company,
            create a for loop for add the elements from the Data
            */
            var data = this.Data;
            
            for (var i = 0; i < data.company.length; i++) {
                this.Stack.push(data.company[i])
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
            call the printStock method from DataStructure Stack LinkedList for print
            all the elements
            */
            console.log(this.Stack.printStock());
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

            var share = read.question("Enter company shares : ")
            var price = read.question("Enter share price : ")

            /*
            add your new list from user input
            */
            this.Stack.push({ "name": name, "share": share, "price": price });
            console.log("\n*******  After added new company ********");
            console.log(this.Stack.printStock())


        } catch (error) {
            console.log("!error please check it again")
        }

    }

    /**************************************************************************************************************/
    removeFromList() {
        try {

            console.log("************* Company List ********************");
            console.log(this.Stack.printStock());

            /*
            Enter company name and delete from the list
            */
            var name = read.question("\nEnter company name which you want to remove : ")
            this.Stack.removeStock(name);

            console.log("\n********* Company List after updated ************");
            console.log(this.Stack.printStock());

        } catch (error) {
            console.log("!error, Please check it again ");
        }
    }

    /**************************************************************************************************************/
    print() {
        console.log("=============== Company List ================");
        console.log(this.Stack.printStock());
    }

}


module.exports = {
    StackStock
}