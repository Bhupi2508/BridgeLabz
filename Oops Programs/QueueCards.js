/***************************************************************************************
 * Execution        : Default node             cmd> node QueueCards.js 
 *
 * @file            : QueueCards.js
 * 
 * @overview        : Extend the above program to create a Player Object having Deck of Cards, and having ability to                      Sort by Rank and maintain the cards in a Queue implemented using Linked List. Do not use any                        Collection Library. Further the Player are also arranged in Queue. Finally Print the Player                         and the Cards received by each Player.
 *                     
 * @author          : Bhupendra Singh <bhupendrasingh.ec18@gmail.com>
 * @version         : 1.0.  
 * @since           : 13/03/2019
 * **************************************************************************************/

/*
To require the required files.
*/
var utility = require('../Oops Programs/utility/utility2')
var take = utility.cards()
utility.QueueCards(take)
