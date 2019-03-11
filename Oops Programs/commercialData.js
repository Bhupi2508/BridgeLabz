/***************************************************************************************
 * Execution        : Default node             cmd> node commericalData.js 
 *
 * @file            : commericalData.js
 * 
 * @overview        : The StockAccount class also maintains a list of CompanyShares object which has Stock Symbol and                           Number of Shares as well as DateTime of the transaction. When buy or sell is initiated StockAccount                       checks if CompanyShares are available and accordingly update or create an Object.
 *                     
 * @author          : Bhupendra Singh <bhupendrasingh.ec18@gmail.com>
 * @version         : 1.0.  
 * @since           : 10/03/2019
 * **************************************************************************************/

/*
To require the required files.
*/
var utility = require('../Oops Programs/utility/utility2')
utility.