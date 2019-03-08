/******************************************************************************
 *  Execution       :   1. default node          : cmd> node replaceString.js
 *                      
 * 
 *  Purpose         : To replace String Template “Hello <<UserName>>, How are you?”
 *                    with the given user input.
 * 
 *  @description    
 * 
 *  @file           : replaceString.js
 *  @overview       : To replace String Template with givemn user input.
 *  @author         : Bhupendra Singh<bhupendrasingh.ec18@gmail.com>
 *  @version        : 1.0
 *  @since          : 21/02/2019
 *
 ******************************************************************************/

/*
 * To require the required files.
 */
var utility = require('../utility/utility')
var read = require('readline-sync');

var username = read.question("Enter the Username (String or Number): ")
utility.replaceString(username)

