//Insertion sorted
var utility = require('../utility/utility')
function Sort() {
 
    var read = utility.input();
    read.question("Enter the size of array : ", function (num) {
        var arr1 = [];
        arr1 = utility.CreateArray(num),
            arr1 = utility.Insertion(arr1),

            read.close();
        console.log("After Insertion sorting : " + arr1);

    })
}
Sort();