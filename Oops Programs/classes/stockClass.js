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