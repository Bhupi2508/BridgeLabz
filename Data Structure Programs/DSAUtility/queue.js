/*****************************************************************************************
 * Execution    :   1. cmd> node queue.js
 *                   
 * 
 * Purpose      :   Queue implementation.
 * 
 * @description
 * 
 * @file        :   queue.js
 * @overview    :   Queue implementation enqueue dequeue and display function.
 * @author      :   Bhupendra Singh<bhupendrasingh.ec18@gmail.com>
 * @version     :   1.0
 * @since       :   03-03-2019
 * 
 * *************************************************************************************/

class Queue {
    constructor() {
        this.items = [];
        this.size = 0;
        this.capacity;
        this.front = -1;
        this.rear = -1;
    }

    //capacity function
    //capacity ,size of the element
    queueCapacity(capacity) {
        this.capacity = capacity;
        var t = new items[capacity];
    }

    //enque function
    //enque, insert the element
    enque(data) {
        //console.log(data);/
        if (this.top == this.capacity - 1) {
            console.log("Queue Overflow");
            return;
        }
        if (this.front == -1) {
            this.front++;
        }
        this.size++;
        this.items[++this.rear] = data;

    }

    //deque function
    //deque, delete the element
    deque() {
        if (this.front == -1) {
            console.log("Queue is empty");
            return null;
        }
        var ele = this.items[this.front++];
        // console.log(this.front)
        this.size--;
        if (this.front > this.rear) {
            this.front = this.rear = -1;
        }
        return ele;
    }


    //size function
    //return the size of the element
    getSize() {
        return this.size;

    }

    //empty function
    //check whether is empty or not
    isempty() {
        if (size == 0)
            return true;
        else
            return false;

    }

    //display function
    //display all the elements
    display() {
        var res = "";
        for (var i = this.front; i <= this.rear; i++) {
            var res = res + this.items[i];
            if (i < this.rear) {
                res = res + ",";
            }

        }
        return res;
    }

}



//=======================================================================================================
// Queue for Linked List

//Create a Node
class Node {
    constructor(element) {
        this.element = element
        this.next = null
    }
}

//Create LinkedList Class
class QueueLinkedList {
    constructor() {
        this.head = null;
        this.size = 0
    }

    //add element 
    enqueue(element) {
        var n = new Node(element)
        if (this.head == null) {
            this.head = n;
            this.size++;
            return
        }
        else {
            var current = this.head;
            while (current.next) {
                current = current.next;
            }
            this.size++;
            current.next = n;
        }
    }

    //remove element
    deque() {
        if (this.size == 0) {
            console.log("Queue is empty ");
            return
        }
        else {
            var n = this.head.element;
            this.head = this.head.next;
            this.size--;
            return n
        }
    }

    //print
    print() {
        try {
            var string = " ";
            var temp = this.head;
            while (temp) {
                string = string + " " + temp.element
                temp = temp.next;
            }
            return string;
        }
        catch (error) {
            console.log("error message");

        }
    }

    //size
    size() {

        return this.size;
    }

    //isEmpty
    isEmpty() {
        if (this.size == 0) {
            return true;
        }
        else {
            return false;
        }
    }

    //get element
    getElement() {
        var current = this.head;
        var str = " ";
        while (current) {
            str = str + current.element;
            if (current.element != null) {
                str = str + " "
            }
            current.element
        }
        return str;
    }

    //print function
    printStock() {
        var arr = [];
        if (this.head == null) {
            return null;
        } else {
            var temp = this.head;
            while (temp) {
                arr.push(temp.element);
                temp = temp.next;
                
            }
            return arr;
        }
    }

    //remove function
    removeStock(item) {
        var temp = this.head;
        var prev = null;
        while (temp != null) {
            var stock = temp.element;
            if (stock.name == item) {
                if (prev == null) {
                    this.head = temp.next;
                } else {
                    prev.next = temp.next;
                }
                this.size--;
                return temp.element;
            }
            prev = temp;
            temp = temp.next;
        }
        return -1;
    }
}


module.exports = {
    Queue, QueueLinkedList,
    monthof(month) {
        switch (month) {
            case 1: return 31;
                break;
            case 2: return 28;
                break;
            case 3: return 31;
                break;
            case 4: return 30;
                break;
            case 5: return 31;
                break;
            case 6: return 30;
                break;
            case 7: return 31;
                break;
            case 8: return 31;
                break;
            case 9: return 30;
                break;
            case 10: return 31;
                break;
            case 11: return 30;
                break;
            case 12: return 31;
                break;

        }
    }
}