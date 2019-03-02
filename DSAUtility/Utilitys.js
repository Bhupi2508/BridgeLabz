var read = require('readline-sync');

//Create a node class
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

//Create a Linked class
class LinkedList {
    constructor() {
        this.first = null;
        this.size = 0;
    }

    // Add function
    add(data) {
        var node = new Node(data);
        if (this.first == null) {
            this.first = node;
            this.size++;

        }
        else {
            var temp = this.first;
            while (temp.next) {
                temp = temp.next;
                this.size++;
                temp.next = node;
            }


        }
    }

    //search function
    search(item) {
        if (this.first == null) {
            return false;
        }

        var temp = this.first;
        while (temp) {
            if (temp.data == item) {
                return true;
            }

            temp = temp.next;
        }
        return false;
    }


    //Remove function
    remove(data) {

        var temp = this.first;
        if (temp.data == data) {
            this.deleteFirst();
            return;
        }
        var prev = temp;
        while (temp) {
            if (temp.data == data) {
                prev.next = temp.next;
                this.size--;
                return temp.data;

            }

            prev = temp;
            temp = temp.next;
        }
        return null;
    }

    //Display element
    display() {
        var temp = this.first;
        var str = "";
        while (temp) {
            str = str + " " + temp.data;
            temp = temp.next;
        }
        return str;
    }

    //Empty elements
    isEmpty() {
        return this.size == 0;
    }

    //Insert first element
    insertFirst(element) {
        var n = new Node(element);
        if (this.head == null) {
            this.head = n;
            this.size++;
            return;
        } else {
            n.next = this.head;
            this.head = n;
            this.size++;
            return;
        }
    }

    //Delete first element
    deleteFirst() {
        if (this.head == null) {
            return;
        }
        var n = this.head.element;
        this.head = this.head.next;
        this.size--;
        return n;
    }


    printList() {
        try {
            var curr = this.head;
            var str = "";
            while (curr) {
                str += curr.data + " ";
                curr = curr.next;
            }
            return str;
        } catch (error) {
            console.log(error.message);
        }
    }

    fileCall() {
        var file = require('fs')
        var arr = []
        var data = file.readFileSync('/home/admin1/bhupi/Data Structure Programs/file.txt', 'utf8')
        var arr = data.split(" ")
        return arr;
    }

    writeFile(path, display) {
        var file = require('fs')
        file.writeFileSync(path, display, function (err) {
            if (err) {
                console.log(err);
            }
        })

    }

}


module.exports = {
    LinkedList
}   
