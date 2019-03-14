/***************************************************************************************
 * Execution        : Default node             cmd> node stockCommericalData.js 
 *
 * @file            : stockCommericalData.js
 * 
 * @overview        : CommericalData class is used for stock customer and company data
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
class commercialData {
    constructor(customerData, companyData) {
        /*
         * @param {CustomerData object} 
         * @param {ComanyData object} 
         */
        this.customerData = customerData
        this.companyData = companyData
    }


    /***********************************************************************************************************************************/
    createData() {
        var customer = this.customerData.customer

        try {

            var date = new Date();
            /*
            take input for new user name, id, shares, amount
            */
            var name = read.question("Enter the customer name : ")
            var id = read.questionInt("Enter the customer Id :")
            var shares = read.question("Enter the " + name + " shares :")

            console.log(customer);

            /*
            push data into customerData file
            */
            customer.push({ "name": name, "Id": id, "share": shares, "time": date })

            file.writeFileSync('/home/admin1/bhupi/Oops Programs/Json files/customer.json', JSON.stringify(this.customerData))

        }
        catch (error) {
            console.log("error message")
        }
    }

    /***********************************************************************************************************************************/
    buy() {
        try {
            /*
            Customer details
            */
            console.log("********Customer Data********\n");
            console.log(this.customerData);
            var data = this.customerData.customer;

            /*
            Enter customer Id
            */
            var id = read.questionInt("\nEnter your Id : ")
            /*
            check whether Id is present or not in customer Data
            */

            for (var i in data) {

                if (data[i].Id == id) {
                    console.log("\nName of Customer : " + data[i].name)
                    /*
                    Company Details
                    */
                    console.log("\n********Company Data********");
                    console.log(this.companyData)
                    var comData = this.companyData.company;

                    /*
                    Enter company name that you want
                    */
                    var comName = read.question("\nEnter company name : ")

                    /*
                    check whether company name is present or not
                    */
                    for (var j in comData) {
                        if (comData[j].name == comName) {
                            console.log("\nName of company : " + comData[j].name);
                            console.log("Share of company : " + comData[j].share);

                            /*
                            Enter your share, Howmany you want from company
                            */
                            var flag = false;
                            do {
                                var shareWant = read.questionInt("\nEnter your share that you want from company : ")

                                if (shareWant > comData[j].share) {
                                    console.log("\nEnter no of shares less than company shares ");
                                } else {
                                    flag = true;
                                }
                            } while (!flag);
                            console.log("\nCustomer name : " + data[i].name + "\nCompany Name : " + comData[j].name + "\nCompany share : " + comData[j].share + "\nCompany Balanced : " + comData[j].balanced);
                            /*
                            Now remaining company and customer share
                            */
                            var cusShare = Number(data[i].share + shareWant)
                            var comShare = Number((comData[j].share) - (shareWant))
                            console.log("\nBefore customer share : " + data[i].share + "\nAfter customer share : " + cusShare);
                            console.log("\nBefore company share : " + comData[j].share + "\nAfter company share : " + comShare);

                            /*
                            Amount increase or decrease after company
                            */
                            var amount = shareWant * comData[j].price;
                            console.log("\n*****Share amount those are buy from company*****");
                            console.log("Share amount : " + amount);

                            /*
                            add this shares in Company amount
                            */
                            var addBalanced = comData[j].balanced + amount;
                            console.log("Now -" + comData[j].name + "- Updated Balance is : " + addBalanced);

                            /*
                            updated customer and comapnay shares and company balance,
                            and create a date obj
                            */
                            var date = new Date();

                            if (comData[j].share > shareWant) {
                                data[i].share = cusShare;
                                comData[j].share = comShare;
                                comData[j].balanced = addBalanced;
                                comData[j].time = date

                                file.writeFileSync('/home/admin1/bhupi/Oops Programs/Json files/customer.json', JSON.stringify(this.customerData))
                                file.writeFileSync('/home/admin1/bhupi/Oops Programs/Json files/company.json', JSON.stringify(this.companyData))
                            }
                        }
                    }
                } else {
                    console.log("Id is not present in " + data[i].name + " Account");
                }
            }

        } catch (error) {
            console.log("error message")
        }
    }

    /***********************************************************************************************************************************/
    sell() {
        try {

            /*
           Customer details
           */
            console.log("********Customer Data********\n");
            console.log(this.customerData);
            var data = this.customerData.customer;

            /*
            Enter customer Id
            */
            var id = read.questionInt("\nEnter customer Id that which person share you want : ")
            /*
            check whether Id is present or not in customer Data
            */

            for (var i in data) {

                if (data[i].Id == id) {
                    console.log("\nName of Customer : " + data[i].name + "\n" + data[i].name + " share :" + data[i].share)
                    /*
                    Company Details
                    */
                    console.log("\n********Company Data********");
                    console.log(this.companyData)
                    var comData = this.companyData.company;

                    /*
                    Enter the company name that which company need share
                    */
                    var compName = read.question("\nEnter which company need share : ")
                    for (var j in comData) {
                        if (comData[j].name == compName) {
                            console.log("\nName of company : " + comData[j].name + "\n" + comData[j].name + " shares : " + comData[j].share);

                            var flag = false;
                            do {
                                var shareWant = read.questionInt("\nEnter your share that you want from customer : ")
                                if (shareWant > data[i].share) {
                                    console.log("\nEnter no of shares less than company shares ");
                                } else {
                                    flag = true;
                                }
                            } while (!flag);
                            /*
                           Modified shares and balanced for company and customer
                           */
                            var compShare = Number(comData[j].share + shareWant);
                            var custShare = Number(data[i].share - shareWant);
                            console.log("*****Shares after modified*****");
                            console.log("\nBefore customer share : " + data[i].share + "\nAfter customer share : " + custShare);
                            console.log("Before company share : " + comData[j].share + "\nAfter company share : " + compShare);

                            /*
                            Share balance
                            */
                            var shareBalance = (Number(shareWant)*(data[i].price))
                            console.log("This amount/balanced remove after buy shares in company amount/balanced : " + shareBalance);

                            /*
                            company balanced after modified
                            */
                            var modBalanced = (comData[j].balanced) - (shareBalance);
                            console.log("After Buy share, " + comData[j].name + " balanced is : " + modBalanced);

                            /*
                            updated customer and comapnay shares and company balance,
                            and create a date obj
                            */
                            var date = new Date();

                            if (comData[j].share > shareWant) {
                                data[i].share = custShare;
                                comData[j].share = compShare;
                                comData[j].balanced = modBalanced;
                                comData[j].time = date

                                file.writeFileSync('/home/admin1/bhupi/Oops Programs/Json files/customer.json', JSON.stringify(this.customerData))
                                file.writeFileSync('/home/admin1/bhupi/Oops Programs/Json files/company.json', JSON.stringify(this.companyData))
                            }
                        }
                    }
                }
            }
        } catch (error) {
            console.log("error message")
        }
    }



    /***********************************************************************************************************************************/
    print() {
       var a =  this.customerData.customer;
       var b = this.companyData.company;
       console.log("********Customer Report********");
       console.log(a);
       console.log("\n********Company Report********");
       console.log(b);
    }
}


    /***********************************************************************************************************************************/
module.exports = {
    commercialData
}