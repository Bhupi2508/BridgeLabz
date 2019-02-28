//Binary Search word
var utility = require('../utility/utility')
function Bin(){


var read = require('readline-sync');

var read = utility.input();
var word = read.question("Enter which word you search :",function(word){
    utility.Binary(word),
    read.close();
});
}
Bin();
