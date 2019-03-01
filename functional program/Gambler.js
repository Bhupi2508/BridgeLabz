 // Gambler
 var utility = require('../utility/utility')
 var read = require('readline-sync');

 var stake = read.question("Enter the Stake :");
 var goal = read.question("Enter the goal :");
 var bets = read.question("Enter the bets :");
 utility.Gambler1(stake, goal, bets)
     
