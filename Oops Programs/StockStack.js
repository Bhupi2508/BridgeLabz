/***************************************************************************************
 * Execution        : Default node             cmd> node StockStack.js 
 *
 * @file            : StockStack.js
 * 
 * @overview        : The StockAccount class also maintains a list of CompanyShares object which has Stock Symbol                         and Number of Shares as well as DateTime of the transaction, Further maintain the Stock Symbol                      Purchased or Sold in a Stack implementedusing Linked List to indicate transactions done.
 *                     
 * @author          : Bhupendra Singh <bhupendrasingh.ec18@gmail.com>
 * @version         : 1.0.  
 * @since           : 12/03/2019
 * **************************************************************************************/

/*
To require the required files.
*/
var file = require('fs')
var utility = require('../Oops Programs/utility/utility2')
var fileRead = file.readFileSync('/home/admin1/bhupi/Oops Programs/Json files/Stack.json','utf8')
utility.stockStack(fileRead)
