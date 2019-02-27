// Quadratic
var utility = require('../utility/utility')

function Num() {
    var read = utility.input();
    read.question("Enter value of a : ", function (a) {
       read.question("Enter value of b : ", function (b) {
        read.question("Enter value of c : ", function (c) {
        utility.Quadratic(a, b, c),
            read.close();
         })
    })
})
}
Num();