// PrimeNumber
var utility = require('../utility/utility')
function Range(){
    var read = utility.input();
    read.question("Starting From : ",function(from){
        read.question("Range upto : ",function(upto){
            utility.Prime(from, upto),
            read.close();
        })
    })
}
Range();