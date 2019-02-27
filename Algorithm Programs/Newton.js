// Newton's Program
var utility = require('../utility/utility')
function New() {
    var read = utility.input();
    read.question("Enter the value of c : ", function (c) {
       utility.Newton(c);
       
        read.close();

    })
   
}
New();

