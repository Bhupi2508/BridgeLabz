// PrimeNumber
var utility = require('../utility/utility')
var read = require('readline-sync');
var from = read.question("Starting From : ")
var upto = read.question("Range upto : ")
var t = utility.Prime(from, upto)
for(var i = 0;i<t.length;i++){
    console.log(t[i] + " ");
}
