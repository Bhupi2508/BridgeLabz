/***************************************************************************************
 * Execution        : Default node             cmd> node stockClass.js 
 *
 * @file            : stockClass.js
 * 
 * @overview        : stocks class for Stock methods 
 *                     
 * @author          : Bhupendra Singh <bhupendrasingh.ec18@gmail.com>
 * @version         : 1.0.  
 * @since           : 09/03/2019
 * **************************************************************************************/

class Stocks {
    /**
     * 
     * @param {string} stockName 
     * @param {Number} stockShare
     * @param {Number} stockPrice 
     * 
     */
    constructor(stockName, stockShare, stockPrice) {
      this.stockName = stockName;
      this.stockShare = stockShare;
      this.stockPrice = stockPrice;
    }

    totalStocks() {
        /*
        Calculate the value of stocks
        */
        return (this.stockShare * this.stockPrice)
    }

}

module.exports = {
    Stocks
}