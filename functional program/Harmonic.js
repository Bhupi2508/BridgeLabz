// Harmonic  Series
var utility = require('../utility/utility')
function HarmonicSeries(){

    var read = utility.input();
    read.question("Enter the number : ", function(value){
        utility.Harmonic(value),
        read.close();
    })
}
HarmonicSeries();