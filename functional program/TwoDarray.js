// 2-D array 
var utility = require('../utility/utility')

function TwoD(){
    var read = utility.input();
    read.question("Enter the row : ",function(row){
        read.question("Enter the col : ",function(col){
          
                utility.Array(row, col);
                read.close();
            })
        })
        
    }
TwoD();