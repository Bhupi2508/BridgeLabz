/*********************************************************************************************
 * Execution        : Default node             cmd> node Inventory.js 
 * 
 * @file            : Inventory.js
 * 
 * @overview        : Create a JSON file having Inventory Details for Rice, Pulses and Wheats
                      with properties name, weight, price per kg.Create the JSON from Inventory 
                      Object and output the JSON String.

 * @author          : Bhupendra Singh<bhupendrasingh.ec18@gmail.com>
 *
 * @version         : 1.0.  
 * @since           : 09/03/2019
 * 
 *******************************************************************************************/

/*
To require the required files.
*/

var utility = require('../Oops Programs/utility/utility2')
var file = require('fs');
var readFile = file.readFileSync('/home/admin1/bhupi/Oops Programs/Json files/Inventory.json','utf8')

var data = JSON.parse(readFile);
var check = utility.jsonInventry(data);
var json = JSON.stringify(check)
console.log("In JSON form : " + json);




