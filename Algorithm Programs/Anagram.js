// Anagram
var utility = require('../utility/utility')
function Ana(){
    var read = utility.input();
    read.question("Enter first string : ",function(string1){
        read.question("Enter Second string : ",function(string2){
            utility.Anagram(string1, string2),
            read.close();
        })
    })
}
Ana();