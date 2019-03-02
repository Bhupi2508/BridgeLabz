//Unsorted List
var read = require('readline-sync')

var utilitys = require('../DSAUtility/Utilitys')

try {
    var linkList = new utilitys.LinkedList();
    var data = linkList.fileCall()
    for (var i = 0; i < data.length; i++) {
        linkList.add(data[i])
    }
    var display = linkList.display()
    console.log(display)
    var word = read.question("Enter the word that you want to search : ")
    var check = linkList.search(word)
    console.log(check);

    if(check){
        linkList.remove(word)
        
    }else{
        linkList.add(word)
    }
    var display = linkList.display();
    utilitys.writeFile('/home/admin1/bhupi/Data Structure Programs/file.txt' , display)
}
catch (error) {
    console.error(error);
}