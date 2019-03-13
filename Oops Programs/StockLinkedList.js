/***************************************************************************************
 * Execution        : Default node             cmd> node StockLinkedList.js 
 *
 * @file            : StockLinkedList.js
 * 
 * @overview        : The StockAccount class also maintains a list of CompanyShares object which has Stock Symbol and
 *		              Number of Shares as well as DateTime of the transaction, Maintain the List of CompanyShares 
 *                    in a Linked List So new CompanyShares can be added or removed easily.
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
var listFile = file.readFileSync('/home/admin1/bhupi/Oops Programs/Json files/LinkedList.json','utf8')
utility.stockLinkedList(listFile)
