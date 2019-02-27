// Permutation
var utility = require('../utility/utility')

function Permu() {
    var read = utility.input();
    read.question("Enter the String : ", function (string) {
        utility.Permutation(string),
            read.close();
    })

}
Permu();