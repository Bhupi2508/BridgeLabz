/*
To require the required files.
*/
var read = require('readline-sync');
var inventoryutil = require('../classes/inventoryClass')
var stockUtil = require('../classes/stockClass')

module.exports = {

    /*===================================================================================================
    First Program = JSON Inventry
    */

    /*
        Desc ->  Create a JSON file having Inventory Details for Rice, Pulses and Wheats with properties              name, weight, price per kg.
    
        Logic -> Get JSON Object in Java or NSDictionary in iOS. Create Inventory Object from JSON.                   Calculate the value for every Inventory.

        Input -> data is input from json file.
    
    */

    jsonInventry(data) {
        try {

            /*
            data is obj
            */
            var rice = data.rice;
            var pulses = data.pulses;
            var wheat = data.wheat;
            var riceName = 0;
            var pulsesName = 0;
            var wheatName = 0;

            var ricesum = 0;
            var pulsessum = 0;
            var wheatsum = 0;

            var sum =0;

            console.log("These all are in JS Obj form \n");

            for (var key in rice) {
                var num = rice[key].weight * rice[key].price;
                console.log("cost of " + rice[riceName].rname + " is : " + num + " Rs");
                riceName++;
                ricesum += num;

            }

            console.log();
            console.log("Totalvalue of rice : " + ricesum +" Rs\n");         

            for (var key in pulses) {
                var num = pulses[key].weight * pulses[key].price;
                console.log("cost of " + pulses[pulsesName].pname + " is : " + num + " Rs");
                pulsesName++;
                pulsessum += num;

            }

            console.log();
            console.log("Totalvalue of pulses: "+pulsessum +" Rs\n");

            for (var key in wheat) {
                var num = wheat[key].weight * wheat[key].price;
                console.log("cost of " + wheat[wheatName].wname + " is : " + num + " Rs");
                wheatName++;
                wheatsum += num; 

            }

            console.log();
            console.log("Totalvalue of wheat : "+wheatsum +" Rs\n");

            sum += ricesum + pulsessum + wheatsum;
            return sum;

        } catch (error) {
            console.log(error.message);
        }

    },




    /*===================================================================================================
    Second Program = Regex Demonstration
    */

    /*
        Desc-> Read in the following message: Hello <<name>>, We have your full name as <<full name>> in        our system. your contact number is 91-xxxxxxxxxx. Please,let us know in case of any              clarification Thank you BridgeLabz 01/01/2016. Use Regex to replace name, full name,             Mobile#, and Date with proper value.

        Logic-> Replace <<name>> by first name of the user ( assume you are the user) replace <<full             name>> by user full name. replace any occurance of mobile number that should be in               format 91-xxxxxxxxxx by your contact number. replace any date in the format XX/XX/XXXX           by current date.

    */

    regex() {


        try {

            var file = require('fs')
            
            var temp = file.readFileSync('/home/admin1/bhupi/Oops Programs/regex.txt', 'utf8');

            var a = /[a - z]/;
            var b = /[A - Z]/;
            var c = /[0 - 9]/;
            var date = new Date();

            /*
            check whether name is string or not
            */
            var name = read.question("Enter your name : ")
            if (a.test(name) || b.test(name)) {
                temp = temp.replace(/<<name>>/, name)
            } else {
                console.log("Invalid value, use only alphabets for name");
            }


            /*
            check whether fullName is string or not
            */
            var fullName = read.question("Enter your full name : ")
            if (a.test(fullName) || b.test(fullName)) {
                temp = temp.replace(/<<full name>>/, fullName)
            } else {
                console.log("Invalid value, use only alphabets for fullname ");
            }

            /*
            check whether number is 10-digit or number or not 
            */
            var phone = read.question("Enter your Mobile number : ")
            if (c.test(phone) && phone.length == 10) {
                temp = temp.replace(/xxxxxxxxxx/, phone)
            } else {
                console.log("Invalid value, use only num between 0 - 9 ");

            }

            

            /*
             replace all the select strings
             */
            temp = temp.replace(/01-01-2000/, date)
            return temp;

        } catch (error) {
            console.log(error.message);
        }

    },




    /*===================================================================================================
    Third Program = Stock Report
    */

    /*
        Desc ->  Write a program to read in Stock Names, Number of Share, Share Price.Print a Stock               Report with total value of each Stock and the total value of Stock.

        Input->  N number of Stocks, for Each Stock Read In the Share Name, Number of Share, and Share            Price

        Logic->  Calculate the value of each stock and the total value
    */

    stockReport(stocks) {

        try {
           var stockValue = 0;
           var sum = 0;
           console.log();

            /*
            * Loop to ask user the details of the stock upto number of stocks.
            */
            for (var i = 1; i <= stocks; i++) {

                /**
                * Ask user to input for stoke Values.
                */
                var stockName = read.question("Enter the name of " + i + " Stocks : ")
                var stockShare = read.questionInt("Enter the number of " + stockName + " shares : ")
                var stockPrice = read.questionInt("Enter price of " + stockName + " shares : ")

                /*
                * Create a stock object and pass all the values given by the user.
                */
                var stock = new stockUtil.Stocks(stockName, stockShare, stockPrice);

                /*
                * Invoke valueOfStock function to calculate the value of each stock.
                */
                stockValue = stock.totalStocks();

                /*
                *To calcualte the value of all the stocks.
                */
                console.log("Value of shares " + stockName + " is " + stockValue + "₹\n");
                console.log();
                sum += stockValue;
            }


            return sum;
        } catch (error) {
            console.log(error.message);
        }
    },




    /*===================================================================================================
    Forth Program = Inventory Management Program
    */

    /*
        Desc -> Extend the above program to Create InventoryManager to manage the Inventory. The                 Inventory Manager will use InventoryFactory to create Inventory Object from JSON. The            InventoryManager will call each Inventory Object in its list to calculate the Inventory          Price and then call the Inventory Object to return the JSON String. The main program             will be with InventoryManager.

    Logic ->   Get JSON Object in JavaScript. Create Inventory Object from JSON. Calculate the value for            every Inventory.

    */

    InventoryManagement(fileRead){
        try {
            /*
            convert json file into Javascript object and call the inventory class
            */
            var myObj = JSON.parse(fileRead)
            var object = new inventoryutil.invetoryClass()
    
            while (ch != 4) {
                /*
                choose the option for add, remove, display, print and calaulate
                */
                console.log("\nPress 1 for add :");
                console.log("Press 2 for remove :");
                console.log("Press 3 for Display :");
                console.log("Press 4 for Calculation : ");
                console.log("Press 5 to exit :\n");
    
                var ch = read.questionInt("Enter the number :\n");
    
                switch (ch) {
    
                    case 1:
                        object.add(myObj);
                        break;
                    case 2:
                        object.remove(myObj);
                        break;
                    case 3:
                        object.print(myObj);
                        break;
                    case 4:
                        this.jsonInventry(myObj)
                    case 5:
                        break;
                    default:
                        console.log("\nPlease enter the correct number ");
                }
            }
        } catch (error) {
            console.log(error.message);
        }
    },




    /*===================================================================================================
    Fifth Program = Commercial data processing program
    */

    /*
        Desc -> The StockAccount class also maintains a list of CompanyShares object which has Stock Symbol and Number of          Shares as well as DateTime of the transaction. When buy or sell is initiated StockAccount checks if                CompanyShares are available and accordingly update or create an Object.

        logic -> By using create, buy, sell, print methods from the stock class

    */

    commercialData(){

        try{
            

        }catch (error) {
            console.log(error.message);
        }
    }
}