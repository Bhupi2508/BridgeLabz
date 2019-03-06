/*
Deque Implementation
*/

class Deque {
    constructor() {
        this.items = [];
    }

    //add function
    //add element at front
    addFront(element) {
       return this.items.unshift(element);
    }

    //add element at rear
    addRear(element) {
       return this.items.push(element);
    }

    //remove function
    //remove element at front
    removeFront() {
        if (this.isEmpty()) 
        return "underFlow";
        return this.items.shift();
    }

    //remove element ar rear
    removeRear() {
        return this.items.pop();
    }

    //isEmpty function
    //check whether empty or not
    isEmpty() {
        return this.items.length == 0;
    }

    //size function
    //return the size
    size() {
        return this.items.length;
    }
}

module.exports = {
    Deque
}