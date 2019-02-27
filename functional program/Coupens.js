// Coupen number
var utility = require('../utility/utility')
function Coupens(){
var read = utility.input();

read.question("Enter the Number :",function(number){
utility.Coupen(number),
read.close();
})

    }
    Coupens();
