/*
To require the required files.
*/
var read = require('readline-sync');
var stockUtil = require('../Stock reports/stockClass')

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
            var food = data.Food;
            var name = 0;
            var weight = 0;
            var price = 0;
            var sum = 0;
            var arr = [];

            console.log("These all are in JS Obj form \n");

            var array = new Object();
            array = arr;
            for (var key in food) {
                var num = food[key].Weight * food[key].Price;
                console.log("cost of " + food[name].Name + " is : " + num + "Rs");
                name++;
                sum += num;
                array.push(num)

            }
            console.log("Total sum : " + sum + "\n");
            return array;

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
    }
}