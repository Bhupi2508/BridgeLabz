

class Stack {
    constructor() {
        this.items = []
    }


    //=========================================  push function  =========================================
    //This method adds an element at the top of the stack. 

    push(element) {

        this.items.push(element)
    }


    //==========================================  pop function  =========================================
    //This method returns the topmost element of stack and removes it.

    pop() {

        if (this.items.length == 0) {
            //Return underflow when called on an empty stack. 
            return "UnderFlow"
        }
        return this.items.pop()
    }


    //===============================================  peek function  ===================================
    // returns the top most elements in the stack, but doesn’t delete it.

    peek() {

        return this.items[this.items.length - 1]
    }


    //===============================================  isEmpty function  ================================
    // return true if the stack is empty

    isEmpty() {

        return this.items.length == 0
    }


    //==============================================  printStack function  ==============================
    //This method returns a string in which all the element of an stack is concatenated.

    printStack() {

        var string = ""
        for (var j = 0; j < this.items.length; i++) {
            string = string + this.items[j] + " "
            return string
        }
    }


    //===============================================  length function  =================================
    //this method return the size

    size(){
        
        return this.items.length
    }

}
module.exports = {
    Stack
}

