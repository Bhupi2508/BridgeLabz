/***************************************************************************************
 * Execution        : Default node             cmd> node InventoryManagement.js 
 * 
 * @file            : InventoryManagement.js
 * 
 * @overview        : Create InventoryManager to manage the Inventory. The Inventory Manager 
                      will use InventoryFactory to create Inventory Object from JSON. The 
                      InventoryManager will call each Inventory Object in its list to calculate
                      the Inventory Price and then call the Inventory Object to return the JSON String.
                      
 * @author          : Bhupendra Singh<bhupendrasingh.ec18@gmail.com>
 * @version         : 1.0.  
 * @since           : 10/03/2019
 * **************************************************************************************/

/*
To require the required files.
*/
var read = require('readline-sync')
var utility = require('../Oops Programs/utility/utility2')
var file = require('fs')
var fileRead = file.readFileSync('../Oops Programs/Json files/Inventory.json')
utility.InventoryManagement(fileRead)