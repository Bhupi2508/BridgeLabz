/*************************************************************************************
* Execution    :   1. cmd> node Deque.js
* Purpose      :   To have all the functionalities of DataStructure Programs.
* 
* @description
* 
* @file        :   Deque.js
* @overview    :   Export the functionalities to developers for reuseability,
*                  simplification of coding.
* @author      :   Bhupendra Singh<bhupendrasingh.ec18@gmail.com>
* @version     :   1.0
* @since       :   05-03-2019
* 
* *************************************************************************************/

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