//Vending Machine
var utility = require('../utility/utility')
function Machine() {

    var read = utility.input();
    read.question("Enter the Amount : ", function (amount) {
        utility.VendingMachine(amount, 0, 0),
        
        read.close();
        

    })
}
Machine();