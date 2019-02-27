//Bubble sorted
var utility = require('../utility/utility')
function Ab() {
 
    var read = utility.input();
    read.question("Enter the size of array : ", function (num) {
        var arr = [];
        arr = utility.CreateArray(num),
            arr = utility.Bubble(arr),

            read.close();
        console.log("After sorted Array : " + arr);

    })
}
Ab();