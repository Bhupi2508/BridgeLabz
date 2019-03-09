/***************************************************************************************
 * Execution        : Default node             cmd> node Regex.js 

 * @file            : Regex.js
 * @overview        : Read in the following message: Hello <<name>>, We have your full
                      name as <<full name>> in our system. your contact number is 91-xxxxxxxxxx.
                      
 * @author          : Bhupendra Singh<bhupendrasingh.ec18@gmail.com>
 * @version         : 1.0.  
 * @since           : 09/03/2019
 * **************************************************************************************/
/*
To require the required files.
*/

var utility = require('../Oops Programs/utility/utility2')
var read = require('readline-sync');
var res = utility.regex();
console.log("\n Result : " + res);
