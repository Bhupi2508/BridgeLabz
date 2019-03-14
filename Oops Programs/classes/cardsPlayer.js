/***************************************************************************************
 * Execution        : Default node             cmd> node cardsPlayer.js 
 *
 * @file            : cardsPlayer.js
 * 
 * @overview        : Create a class for Player Objects or Cards
 *                     
 * @author          : Bhupendra Singh <bhupendrasingh.ec18@gmail.com>
 * @version         : 1.0.  
 * @since           : 13/03/2019
 * **************************************************************************************/

/*
To require the required files.
*/
var sort = require('/home/admin1/bhupi/utility/utility')

class Player {
    constructor(cards) {
        /*
        @param (Object)cards
        */
        this.cards = cards;
    }

    sorting(){
        var sortArr = []
        sortArr = sort.insertionsort(this.cards);
        return sortArr;
    }
}

module.exports = {
    Player
}