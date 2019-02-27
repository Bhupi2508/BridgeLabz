//Flip coin
var utility = require('../utility/utility')
function Flipcoin(){

	var read = utility.input();
	read.question("Enter the num :",function(num){
		utility.Flipcoin(num);
    	read.close();
	})
}
Flipcoin();