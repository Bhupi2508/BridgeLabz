/*
To require the required files.
*/
var read = require('readline-sync');
var inventoryutil = require('../classes/inventoryClass')
var stockUtil = require('../classes/stockClass')
var commDataStock = require('../classes/stockCommercialData')
var linkedStock = require('../classes/linkedList')
var stackStock = require('../classes/stack')
var queueStock = require('../classes/queue')
var card = require('../classes/cardsPlayer')
var cardQueue = require('/home/admin1/bhupi/Data Structure Programs/DSAUtility/queue')
var addressBook = require('../classes/AddressBook')

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

            var sum = 0;

            console.log("These all are in JS Obj form \n");

            for (var key in rice) {
                var num = rice[key].weight * rice[key].price;
                console.log("cost of " + rice[riceName].rname + " is : " + num + " Rs");
                riceName++;
                ricesum += num;

            }

            console.log();
            console.log("Totalvalue of rice : " + ricesum + " Rs\n");

            for (var key in pulses) {
                var num = pulses[key].weight * pulses[key].price;
                console.log("cost of " + pulses[pulsesName].pname + " is : " + num + " Rs");
                pulsesName++;
                pulsessum += num;

            }

            console.log();
            console.log("Totalvalue of pulses: " + pulsessum + " Rs\n");

            for (var key in wheat) {
                var num = wheat[key].weight * wheat[key].price;
                console.log("cost of " + wheat[wheatName].wname + " is : " + num + " Rs");
                wheatName++;
                wheatsum += num;

            }

            console.log();
            console.log("Totalvalue of wheat : " + wheatsum + " Rs\n");

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

            var temp = file.readFileSync('../Oops Programs/regex.txt', 'utf8');

            var a = /[a-z]/;
            var b = /[A-Z]/;
            var c = /[0-9]/;
            var date = new Date();

            /*
            check whether name is string or not
            */
            var Name = read.question("Enter your name : ")
            if (a.test(Name) || b.test(Name)) {
                temp = temp.replace(/<<name>>/i, Name)
            } else {
                console.log("Invalid value, use only alphabets for name");
            }


            /*
            check whether fullName is string or not
            */
            var fullName = read.question("Enter your full name : ")
            if (a.test(fullName) || b.test(fullName)) {
                temp = temp.replace(/<<full name>>/i, fullName)
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
                console.log("Invalid value, use only num between (0 - 9) or 10 digit number ");

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

         Input -> stocks is input from main file for howmany stocks
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

    Logic ->   Get JSON Object in JavaScript. Create Inventory Object from JSON. Calculate the value for                        every Inventory.

     Input -> fileRead is input from main file for file read

    */

    InventoryManagement(fileRead) {
        try {
            /*
            convert json file into Javascript object and call the inventory class
            */
            var myObj = JSON.parse(fileRead)
            var object = new inventoryutil.invetoryClass()

            while (ch != 5) {
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

         Input -> file1 and file2 are input from main file for file read(customer, company)

    */

    commercialData(file1, file2) {

        try {

            var customerData = JSON.parse(file1)
            var companyData = JSON.parse(file2)
            var object = new commDataStock.commercialData(customerData, companyData)

            while (check != 5) {
                /*
               choose the option for create, buy, sell, print and Exit
               */
                console.log("\nPress 1 for Create ");
                console.log("Press 2 for Buy ");
                console.log("Press 3 for Sell ");
                console.log("Press 4 for Print ");
                console.log("Press 5 for Exit \n");
                var check = read.questionInt("Enter your choice  :  ");

                switch (check) {
                    case 1:
                        object.createData()
                        break;
                    case 2:
                        object.buy()
                        break;
                    case 3:
                        object.sell()
                        break;
                    case 4:
                        object.print()
                        break;
                    case 5:
                        break;
                    default:
                        console.log("\n!Please Enter correct key");

                }
            }


        } catch (error) {
            console.log(error.message);
        }
    },



    /*===================================================================================================
    Sixth Program = Commercial data processing program by using Linkedist
    */

    /*
        Desc -> Maintain the List of CompanyShares in a Linked List So new CompanyShares can be added or removed e           easily.

        Logic -> By using linkedList methods for add, remove and print from the DataStructure concepts

         Input -> listFile is input from main file for file read

    */

    stockLinkedList(listFile) {
        try {

            var Data = JSON.parse(listFile)
            var object = new linkedStock.stockLinkedLIst(Data)
            while (check != 4) {
                /*
               choose the option for create, buy, sell, print and Exit
               */
                console.log("\nPress 1 for Add ");
                console.log("Press 2 for Remove ");
                console.log("Press 3 for print ");
                console.log("Press 4 for Exit \n");
                var check = read.questionInt("Enter your choice  :  ");

                switch (check) {
                    case 1:
                        object.addinList()
                        break;
                    case 2:
                        object.removeFromList()
                        break;
                    case 3:
                        object.print()
                        break;
                    case 4:
                        break;
                    default:
                        console.log("\n!Please Enter correct key");

                }
            }
        } catch (error) {
            console.log("error message");
        }
    },




    /*===================================================================================================
    Seventh Program = Commercial data processing program by using Stack
    */

    /*
        Desc -> Further maintain the Stock Symbol Purchased or Sold in a Stack implemented using Linked List to              indicate transactions done.

        Logic -> By using stack methods we modified add, remove, print

        Input -> fileRead is input from main file for file read

    */

    stockStack(fileRead) {
        try {


            var Data = JSON.parse(fileRead);
            var object = new stackStock.StackStock(Data)
            while (check != 4) {
                /*
               choose the option for create, buy, sell, print and Exit
               */
                console.log("\nPress 1 for Add ");
                console.log("Press 2 for Remove ");
                console.log("Press 3 for print ");
                console.log("Press 4 for Exit \n");
                var check = read.questionInt("Enter your choice  :  ");

                switch (check) {
                    case 1:
                        object.addinList()
                        break;
                    case 2:
                        object.removeFromList()
                        break;
                    case 3:
                        object.print()
                        break;
                    case 4:
                        break;
                    default:
                        console.log("\n!Please Enter correct key");

                }
            }
        } catch (error) {
            console.log("!error, please check it once")
        }
    },




    /*===================================================================================================
    Eight Program = Commercial data processing program by using Queue
    */

    /*
        Desc -> Further maintain DateTime of the transaction in a Queue implemented using Linked List to indicate            when the transactions were done.

        Logic -> By using queue methods we modified add, remove, print

        Input -> fileRead is input from main file for file read

    */

    stockQueue(fileRead) {
        try {


            var Data = JSON.parse(fileRead);
            var object = new queueStock.stockQueue(Data)
            while (check != 4) {
                /*
               choose the option for create, buy, sell, print and Exit
               */
                console.log("\nPress 1 for Add ");
                console.log("Press 2 for Remove ");
                console.log("Press 3 for print ");
                console.log("Press 4 for Exit \n");
                var check = read.questionInt("Enter your choice  :  ");

                switch (check) {
                    case 1:
                        object.addinList()
                        break;
                    case 2:
                        object.removeFromList()
                        break;
                    case 3:
                        object.print()
                        break;
                    case 4:
                        break;
                    default:
                        console.log("\n!Please Enter correct key");

                }
            }
        } catch (error) {
            console.log("!error, please check it once")
        }
    },





    /*===================================================================================================
    Ninth Program = Desk of Cards
    */

    /*
        Desk -> Program ​ DeckOfCards.java ​ , to initialize deck of cards having suit ("Clubs", "Diamonds",                 "Hearts", "Spades") & Rank ("2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King",           "Ace"). 

        Logic -> Shuffle the cards using Random method and then distribute 9 Cards to 4 Players and Print the                 Cards the received by the 4 Players using 2D Array...

    */

    cards() {
        try {

            /*
            create an array for suit and rank cards
            */
            var suit = ["clubs", "Spades", "Hearts", "Diamonds"];
            var rank = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"];

            var arr = [];
            var totalCards = (suit.length) * (rank.length)
            for (var i = 0; i < suit.length; i++) {
                for (var j = 0; j < rank.length; j++) {
                    var str = "";
                    arr.push(str + rank[j] + "--" + suit[i])
                }

            }

            /*
            Now suffling cards
            */
            for (var i = 0; i < totalCards; i++) {
                /*
                Generate random value and take that position arr value
                */
                var value = Math.floor(Math.random() * totalCards)

                /*
                Take automatically value from arr[Position] range of between 1 - 52,
                and print that position value from arr array.
                */
                var temp = arr[i];
                arr[i] = arr[value];
                arr[value] = temp;

            }
            return arr;
        } catch (error) {
            console.log("!error, Please try again")
        }
    },

    /*
    Input (res) take from main function which is in array
    */
    deskOfCards(res) {

        var temp = 0;
        var array = res;
        /*
        Decalare 2-D array for four player
        */
        var arr = [[], [], [], []];
        for (var i = 0; i < 4; i++) {
            for (var card = 0; card < 9; card++) {
                /*
                first print 9 random cards then after 9 and so on...
                */
                arr[i][card] = array[card + temp]
            }
            temp += 9;
        }
        for (var k = 0; k < arr.length; k++) {
            console.log("Player " + (k + 1) + " have 9 random cards [" + arr[k] + " ]");

        }
    },





    /*===================================================================================================
    Tenth Program = Desk of Cards
    */

    /*
        Desc -> Extend the above program to create a Player Object having Deck of Cards, and having ability to Sort          by Rank and maintain the cards in a Queue implemented using Linked List.

        Logic -> Shuffle the cards using Random method and then distribute 9 Cards to 4 Players and Print the Cards           the received by the 4 Players using 2D Array...

    */

    QueueCards(take) {
        try {
            /*
            In array variable has all the 52 random cards
            */
            var array = take;


            /*
            create array for every player(four player)
            */
            var player1 = [];
            var player2 = [];
            var player3 = [];
            var player4 = [];

            for (var i = 0; i < array.length; i++) {

                /*
                Take cards 1 to 13 from totalCards
                */
                if (i >= 0 && i < 13) {
                    player1[i] = array[i]
                }
                /*
                Take cards 13 to 26 from totalCards
                */
                else if (i >= 13 && i < 26) {
                    player2[i - 13] = array[i]
                }
                /*
                Take cards 26 to 39 from totalCards
                */
                else if (i >= 26 && i < 39) {
                    player3[i - 26] = array[i]
                }
                /*
                Take cards 39 to 52 from totalCards
                */
                else {
                    player4[i - 39] = array[i]
                }
            }

            /*
            create obj for every player from Player class
            */
            var p1 = new card.Player(player1);
            var p2 = new card.Player(player2);
            var p3 = new card.Player(player3);
            var p4 = new card.Player(player4);

            /*
            sort  all the player cards by using Player class sorting method
            */

            var sortp1 = p1.sorting();
            var sortp2 = p2.sorting();
            var sortp3 = p3.sorting();
            var sortp4 = p4.sorting();

            /*
            call queue linkedlist method for queue and deque cards
            */
            var Queue = new cardQueue.QueueLinkedList();

            /*
            Now push all the player cards in queueLinked List by enqueue
            */
            Queue.enqueue(sortp1)
            Queue.enqueue(sortp2)
            Queue.enqueue(sortp3);
            Queue.enqueue(sortp4)

            /*
            Print all the player cards from queue Linkedlist by Deque
            */
            console.log("\nPlayer 1 cards : [" + Queue.deque() + "]");
            console.log("\nPlayer 2 cards : [" + Queue.deque() + "]");
            console.log("\nPlayer 3 cards : [" + Queue.deque() + "]");
            console.log("\nPlayer 4 cards : [" + Queue.deque() + "]");

        } catch (error) {
            console.log("!error, Please try again");
        }
    },




    /*===================================================================================================
    Eleventh Program = Address Book Problem
    */

    /*
        Desc -> The software to be designed is a program that can be used to maintain an address book. An address            book holds a collection of entries, each recording a person's first and last names, address, city,           state, zip, and phone number.

    */

    Address(fileRead) {
        try {

            var Data = JSON.parse(fileRead);
            var object = new addressBook.Address(Data);
            while (check != 6) {
                /*
               choose the option for create, buy, sell, print and Exit
               */
                console.log("\nPress 1 for AddPerson ");
                console.log("Press 2 for RemovePerson ");
                console.log("Press 3 for EditPerson ");
                console.log("Press 4 for Sort ");
                console.log("Press 5 for Print ");
                console.log("Press 6 for Exit \n");
                var check = read.questionInt("Enter your choice  : ");

                switch (check) {
                    case 1:
                        object.addPerson()
                        break;
                    case 2:
                        object.removePerson()
                        break;
                    case 3:
                        object.EditPerson()
                        break;
                    case 4:
                        object.sort();
                        break;
                    case 5:
                        object.print();
                        break
                    case 6:
                        break;
                    default:
                        console.log("\n!Please Enter correct key");

                }
            }

        } catch (error) {
            console.log("!error");
        }
    }
}