//Insertion sorted
var utility = require('../utility/utility')
function Sorting() {
 
    var read = utility.input();
    read.question("Enter the size of array : ", function (num) {
        var arr = [];
        arr = utility.CreateArray(num),
            arr = utility.Insertion(arr),

            read.close();
        console.log("After Insertion sorting : " + arr);

    })
}
Sorting();