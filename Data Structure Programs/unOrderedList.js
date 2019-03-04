//Unsorted List
var read = require('readline-sync')

var utilitys = require('../Data Structure Programs/DSAUtility/utilitys')
var read = require('readline-sync');
//Enter which word want to search
var word = read.question("Enter the word that you want to search : ")
utilitys.unOrderedList(word)
