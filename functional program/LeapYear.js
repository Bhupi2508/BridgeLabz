//Flipcoin
var utility = require('../utility/utility')
function Year() {
    var read = utility.input();

    // i = take input from the user

    read.question("Enter the year : ", function (i) {
        utility.Leapyear(i);
        read.close();
    })
}
Year();