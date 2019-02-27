// Distance
var utility = require('../utility/utility');

function Distance1(){
    var read = utility.input();
    read.question("Enter first number : ",function(first){
        read.question("Enter second number : ",function(second){
            utility.Distance(first, second),
            read.close();
        })
    })
}
Distance1();