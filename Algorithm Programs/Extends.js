// Newton's Program
var utility = require('../utility/utility')
var read = require('readline-sync');
var from = read.question("Starting From : ")
var upto = read.question("Range upto : ")
var t = utility.Prime(from, upto)
for(var i = 0;i<t.length;i++){
   // console.log(t[i] + " ")
}
for(var j=0;j<t.length-1;j++){
    for(var k=j+1;k<t.length;k++){
        var r = t.reverse()
        if(t[j] == r)
        utility.Anagram1(t[j], r)
    }
}

for(var e = 0;e<t.length;e++){
    let check = utility.Palindrome(t[e])
    if(check == true){
        console.log(t[e]);
        
    }
}

    
