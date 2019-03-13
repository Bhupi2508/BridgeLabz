/***************************************************************************************
 * Execution        : Default node             cmd> node inventoryClass.js 
 *
 * @file            : inventoryClass.js
 * 
 * @overview        : inventory class method is used for inventory stocks(rice, pulses, wheat)
 *                     
 * @author          : Bhupendra Singh <bhupendrasingh.ec18@gmail.com>
 * @version         : 1.0.  
 * @since           : 09/03/2019
 * **************************************************************************************/

/*
To require the required files.
*/
var read = require('readline-sync');
var file = require('fs');
var utilityutil = require('../utility/utility2')
class invetoryClass {

    /*
    * Function to add the details of the share into JSON file.
    * @param {JSON object} data
    */

    add(data) {
        var rice = data.rice;
        var pulses = data.pulses;
        var wheat = data.wheat;
        try {

            console.log("\nPress 1 for Rice :");
            console.log("Press 2 for pulses :");
            console.log("Press 3 for wheat :");
            console.log("Press 4 to exit :\n");

            var ch = read.questionInt("Enter the number for select the items:\n");

            switch (ch) {
                case 1:
                    var name = read.question("Enter the stock name for add : ");
                    var weight = read.questionInt("Enter the weight : ");
                    var cost = read.questionInt("Enter the price of the weight : ");
                    /*
                    * Push the data given to the end of the array(ie, JSON object)
                    */
                    rice.push({ rname: name, weight: weight, price: cost });
                    break;

                case 2:
                    var name = read.question("Enter the stock name for add : ");
                    var weight = read.questionInt("Enter the weight : ");
                    var cost = read.questionInt("Enter the price of the weight : ");
                    /*
                    * Push the data given to the end of the array(ie, JSON object)
                    */
                    pulses.push({ pname: name, weight: weight, price: cost });
                    break;

                case 3:
                    var name = read.question("Enter the stock name for add : ");
                    var weight = read.questionInt("Enter the weight : ");
                    var cost = read.questionInt("Enter the price of the weight : ");
                    /*
                    * Push the data given to the end of the array(ie, JSON object)
                    */
                    wheat.push({ wname: name, weight: weight, price: cost });
                    break;

                case 4:
                    break;
                default:
                    console.log("\nPlease enter the correct number ");
            }
            /*
            * Use function JSON.stringify() to convert data into a string and write it to JSON file
            */
           var path = require('../Json files/Inventory.json')
            file.writeFileSync(path, JSON.stringify(data));

        } catch (error) {
            console.log(error.message);

        }
    }

    /* 
    * Function to remove the details of the share from JSON file.
    * @param {JSON object} data
    */
    remove(data) {
        try {

            console.log("\nPress 1 for Rice :");
            console.log("Press 2 for pulses :");
            console.log("Press 3 for wheat :");
            console.log("Press 4 to exit :\n");

            var ch = read.questionInt("Enter the number for select the items :\n");
            var name = read.question("Enter the name to remove from stock : ");
            switch (ch) {
                case 1:

                    /*
                    first check the number and find the location then remove by using splice method
                    */
                    for (var i = 0; i < data.rice.length; i++) {
                        if (data.rice[i].rname == name) {
                            var index = data.rice.indexOf(data.rice[i]);
                            data.rice.splice(index, 1);
                        }
                    }

                case 2:

                    for (var i = 0; i < data.pulses.length; i++) {
                        if (data.pulses[i].pname == name) {
                            var index = data.pulses.indexOf(data.pulses[i]);
                            data.pulses.splice(index, 1);
                        }
                    }
                case 3:

                    for (var i = 0; i < data.wheat.length; i++) {
                        if (data.wheat[i].wname == name) {
                            var index = data.wheat.indexOf(data.wheat[i]);
                            data.wheat.splice(index, 1);
                        }
                    }

                case 4:
                    break;
                default:
                    console.log("\nPlease enter the correct number ");
            }

            /*
            * Use function JSON.stringify() to convert data into a string and write it to JSON file
            */
            file.writeFileSync('', JSON.stringify(data));


        } catch (error) {
            console.log(error.message);

        }
    }

    /*
    * Function to print the details of the shares in JSON file.
    * @param {JSON object} data
    */

    print(data) {

        var rice = data.rice;
        var pulses = data.pulses;
        var wheat = data.wheat;
        console.log("\nPress 1 for Rice :");
        console.log("Press 2 for pulses :");
        console.log("Press 3 for wheat :");
        console.log("Press 4 for all data : ");
        console.log("Press 5 to exit :\n");

        var ch = read.questionInt("Enter the number :\n");

        switch (ch) {
            case 1:
                for (const key in rice) {
                    console.log(JSON.stringify(rice[key]));
                } break;
            case 2:
                for (const key in pulses) {
                    console.log(JSON.stringify(pulses[key]));
                } break;
            case 3:
                for (const key in wheat) {
                    console.log(JSON.stringify(wheat[key]));
                } break;
            case 4:
                for (const key in data) {
                    console.log(JSON.stringify(data[key]));
                } 
            case 5:
                break;
            default:
                console.log("\nPlease enter the correct number ");
        }
    }
   
}

module.exports = {
    invetoryClass
}