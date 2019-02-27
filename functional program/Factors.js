//Factors
var utility = require('../utility/utility');
function PrimeFactors() {

  var read = utility.input();
  read.question("Enter the value : ", function (numbers) {
    utility.Factors(numbers),
      read.close();
  })


}
PrimeFactors();