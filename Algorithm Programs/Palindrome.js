// Palindrome
var utility = require('../utility/utility')
function Drome(){
    var read = utility.input();
    read.question("Starting From : ",function(from){
        read.question("Range upto : ",function(upto){
            utility.Palindrome(from, upto),
            read.close();
        })
    })
}
Drome();