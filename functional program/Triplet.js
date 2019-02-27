// Triplet 
var utility = require('../utility/utility')

function Triplets() {
    var read = utility.input();
    read.question("Enter the size : ", function (m) {
        utility.Triplet(m),
            read.close();
    })

}
Triplets();