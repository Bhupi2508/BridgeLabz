 // Gambler
 var utility = require('../utility/utility')
 function Gambler(){

     var read = utility.input();
     read.question("Enter the Stake :" , function(stake){
        read.question("Enter the goal :" , function(goal){
             read.question("Enter the bets :" , function(bets){
                    utility.Gambler1(stake, goal, bets),
                    read.close();
        })
    })


    })
 }
  Gambler();