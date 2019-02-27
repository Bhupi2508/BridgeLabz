//Leap year 
var utility = require('../utility/utility')
function Replace1() {
    var read = utility.input();
    read.question("Enter the Username : ", function(username) {
        utility.Replace(username),
        read.close();
    })
}
Replace1();