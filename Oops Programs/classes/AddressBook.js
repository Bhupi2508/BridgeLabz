/***************************************************************************************
 * Execution        : Default node             cmd> node AddressBook.js 
 *
 * @file            : AddressBook.js
 * 
 * @overview        : Program ​ DeckOfCards.java ​ , to initialize deck of cards having suit ("Clubs", "Diamonds"                         "Hearts", "Spades") & Rank ("2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen",                          "King", "Ace"). Shuffle the cards using Random method and then distribute 9 Cards to 4 Players                      and Print the Cards the received by the 4 Players using 2D Array...
 *                     
 * @author          : Bhupendra Singh <bhupendrasingh.ec18@gmail.com>
 * @version         : 1.0.  
 * @since           : 14/03/2019
 * **************************************************************************************/

/*
To require the required files.
*/
var file = require('fs')
var read = require('readline-sync')

class Person {
    constructor(fname, lname, address, city, state, phone, zip) {
        /*
        @param of person class
        */
        this.fname = fname;
        this.lname = lname;
        this.address = address;
        this.city = city;
        this.state = state;
        this.phone = phone;
        this.zip = zip;
    }
}

class Address {
    constructor(Data) {
        /*
        @param {Object} Data
        */
        this.Data = Data;
    }


    /***************************************************************************************************************/
    addPerson() {
        try {
            var Data = this.Data;
            // var str1 = /[a-z]/;
            // var str2 = /[A-Z]/;
            // var num = /[0-9]/;

            var firstname = read.question("Enter you first name : ")
            var lastname = read.question("Enter your last name : ")
            var address1 = read.question("Enter your address : ")
            var city1 = read.question("Enter your city : ")
            var state1 = read.question("Enter your state : ")
            var phone1 = read.questionInt("Enter your phone numer : ")
            var zip1 = read.questionInt("Enter your area zip code : ")

            var callPerson = new Person(firstname, lastname, address1, city1, state1, phone1, zip1)
            Data.Person.push(callPerson);
            file.writeFileSync('/home/admin1/bhupi/Oops Programs/Json files/AddressBook.json', JSON.stringify(Data));

        } catch (erroe) {
            console.log("!error, Please check your code")
        }
    }


    /***************************************************************************************************************/
    removePerson() {
        try {

            var data = this.Data.Person;

            var firstname = read.question("Enter first name of person : ")
            for (var i = 0; i < data.length; i++) {
                if (data[i].fname == firstname) {
                    /*
                    After find postion the remove the element from main file
                    */
                    var find = data.indexOf(data[i])
                    var del = data.splice(find, 1)

                    /*
                    Print the updated file from main file
                    */
                    file.writeFileSync('/home/admin1/bhupi/Oops Programs/Json files/AddressBook.json', JSON.stringify(data))
                }
            }
        } catch (error) {
            console.log("!error, check it again")
        }

    }


    /***************************************************************************************************************/
    EditPerson() {
        try {

            var data = this.Data;
            var fname1 = read.question("Enter firstname of person :")
            for (let i = 0; i < data.length; i++) {
                if (data[i].fname == fname1) {
                    while (check != 9) {
                        var find = data[i].indexOf(data[i]);

                        console.log(" select which information to be update ")
                        console.log("Enter 1 for firstname of person to be update")
                        console.log("Enter 2 for lastname of person to be update")
                        console.log("Enter 3 for address of person to be update")
                        console.log("Enter 4 for city of person to be update")
                        console.log("Enter 5 for state of person to be update")
                        console.log("Enter 6 for phonenumber person to be update")
                        console.log("Enter 7 for zip code of person to be update")
                        var check = read.questionInt("\nEnter your Choice : ")

                        switch (check) {
                            case 1:
                                this.firstname(data, find)
                                break;
                            case 2:
                                this.lastname(data, find)
                                break;
                            case 3:
                                this.address(data, find)
                                break;
                            case 4:
                                this.city(data, find)
                                break;
                            case 5:
                                this.state(data, find)
                                break;
                            case 6:
                                this.phone(data, find)
                                break;
                            case 7:
                                this.zipcode(data, find)
                                break;
                            case 8:
                                break;
                            default:
                                console.log("!Invalid Choice, Please enter correct key ");

                        }
                    }
                }
            }
        } catch (error) {
            console.log("!error");
        }
    }
    /*************************************************************************************************************/
    /*
    Modified first Name
    */
    firstname(data, find) {
        var data = this.Data.Person;
        var fname = read.question("Enter new first name : ")
        data[find].fname = fname;
        file.writeFileSync('/home/admin1/bhupi/Oops Programs/Json files/AddressBook.json', JSON.stringify(data))
    }

    /*
    Modified first Name
    */
    lastname(data, find) {
        var data = this.Data.Person;
        var lname = read.question("Enter new last name : ")
        data[find].lname = lname;
        file.writeFileSync('/home/admin1/bhupi/Oops Programs/Json files/AddressBook.json', JSON.stringify(data))
    }

    /*
    Modified last Name
    */
    address(data, find) {
        var data = this.Data.Person;
        var address1 = read.question("Enter new address : ")
        data[find].address = address1;
        file.writeFileSync('/home/admin1/bhupi/Oops Programs/Json files/AddressBook.json', JSON.stringify(data))
    }

    /*
    Modified city
    */
    city(data, find) {
        var data = this.Data.Person;
        var city1 = read.question("Enter new city : ")
        data[find].city = city1;
        file.writeFileSync('/home/admin1/bhupi/Oops Programs/Json files/AddressBook.json', JSON.stringify(data))
    }

    /*
    Modified state
    */
    state(data, find) {
        var data = this.Data.Person;
        var state1 = read.question("Enter new name : ")
        data[find].state = state1;
        file.writeFileSync('/home/admin1/bhupi/Oops Programs/Json files/AddressBook.json', JSON.stringify(data))
    }

    /*
    Modified phone Number
    */
    phone(data, find) {
        var data = this.Data.Person;
        var phone1 = read.questionInt("Enter new number : ")
        data[find].phone = phone1;
        file.writeFileSync('/home/admin1/bhupi/Oops Programs/Json files/AddressBook.json', JSON.stringify(data))
    }

    /*
    Modified zip code
    */
    zipcode(data, find) {
        var data = this.Data.Person;
        var zip1 = read.question("Enter new name : ")
        data[find].zip = zip1;
        file.writeFileSync('/home/admin1/bhupi/Oops Programs/Json files/AddressBook.json', JSON.stringify(data))
    }


    /***************************************************************************************************************/
    print() {
        console.log("*************** Table ***************");
        var data = this.Data.Person;

        /*
        Print the full Person Table
        */
        for (var i in data) {
            console.log(data[i]);
        }
    }

    /***************************************************************************************************************/
    sort() {
        while (check != 4) {
            console.log("\nEnter 1 for sort first name ")
            console.log("Enter 2 for sort zipcode ")
            var check = read.questionInt("\nEnter your choice : ")

            switch (check) {
                case 1:
                    this.sortfname(this.Data);
                    break;
                case 2:
                    this.sortzip(this.Data);
                case 3:
                    break;
                default:
                    console.log("!Invalid key")
            }
        }
    }

        sortfname(data) {
            var data = this.Data.Person;
            function sortbyfname(a, b) {
                if (a.personfname == b.personfname);
                return 0
                if (a.personfname > b.personfname);
                return 1
                if (a.personfname < b.personfname);
                return -1
            }
            var result = data.sort(sortbyfname);
            console.log(result);


        }


        sortzip(data) {
            var data = this.Data.Person;
            function sortbyzip(a, b) {
                return (a.zip - b.zip);
            }
            var result = data.sort(sortbyzip);
            console.log(result);

        }
    }



module.exports = {
    Address, Person
}