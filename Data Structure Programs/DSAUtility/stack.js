
/*****************************************************************************************
 * 
 * Execution    :   1. cmd> node stack.js
 * 
 * 
 * Purpose      :   Stack implementation.
 * 
 * @description
 * 
 * @file        :   stack.js
 * @overview    :   Stack implementation push pop peek and display function.
 * @author      :   Bhupendra Singh<bhupendrasingh.ec18@gmail.com>
 * @version     :   1.0
 * @since       :   02-03-2019
 * 
 * *************************************************************************************/

class Stack {
    constructor() {
        this.items = []
        this.size = 0;
        this.capacity;
        this.top = -1;
    }

    //Capacity function
    stack(capacity) {
        this.capacity = capacity;
        var t = new items[capacity];
    }

    //push function
    //This method adds an element at the top of the stack. 
    push(element) {
        if (this.top == this.capacity - 1) {
            console.log("Stack Overflow");
            return;
        }
        this.size++;
        this.items[++this.top] = element;
    }


    //pop function
    //This method returns the topmost element of stack and removes it.
    pop() {
        if (this.top === -1){
            console.log("stack is empty");
        }
        this.size--;
        return this.items[this.top--];
         
        
    }


    //peek function
    // returns the top most elements in the stack, but doesn’t delete it.

    peak() {

        if (this.top == -1)
            console.log("stack is empty");
        else
            console.log(this.items[top]);

    }

    //isEmpty function
    // return true if the stack is empty

    isEmpty() {

        if (size == 0)
            return true;
        else
            return false;

    }

    //printStack function
    //This method returns a string in which all the element of an stack is concatenated.

    printStack() {

        var string = ""
        for (var j = 0; j < this.size; i++) {
            string = string + " " + items[j]
            return string
        }
    }


    //length function
    //this method return the size

    getSize() {

        return this.size
    }

    //reverse function
    //reverse the elements

    reverseStack(element) {
        var revstack = new Stack()
        var n = this.getSize();

        for (var i = 0; i < n; i++) {
            var r = revstack.push(this.pop());
        }
        return revstack;
    }

}



/*******************************************************************************************************/

// Stack for Exception Handling

class SNode {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}

//Create a class stack for linkedlist
class Stacks {
    constructor() {
        this.top = null;
    }

    //Push method
    push(item) {
        try {
            let node = new SNode(item);
            if (this.top) {
                node.next = this.top;
                this.top = node;
            } else {
                this.top = node;
            }
            
        } catch (error) {
            console.log(error.message);
        }
    }

    //Pop method
    pop() {
        try {
            if (this.top) {
                let itemToPop = this.top;
                this.top = this.top.next;
                return itemToPop.element;
            } else {
                console.log("Stack is empty!");
                return false;
            }
        } catch (error) {
            console.log(error.message);
        }
    }

    //Peak method
    peak() {
        try {
            if (this.top) {
                return this.top.element;
            } else {
                return null;
            }
        } catch (error) {
            console.log(error.message);
        }
    }

    //empty method
    isEmpty() {
        return this.length > 1;
    }

    //size method
    size() {
        let current = this.top;
        let counter = 0;
        while (current) {
            counter++;
            current = current.next;
        }
        return counter;
    }

    //Display method
    print() {
        try {
            
            var string = "";
            var temp = this.top;
            while (temp != null) {
                string = string + " " + temp.element;
                temp = temp.next;
            }
            return string;
        } catch (error) {
            console.log(error.message);
        }
    }

    //print function
    printStock(){
        var arr = [];
        if (this.top == null) {
          return null;
        } else {
          var temp = this.top;
          while (temp) {
            arr.push(temp.element);
            temp = temp.next;
          }
          return arr;
        }
  }

  //remove function
  removeStock(item) {
    var temp = this.top;
    var prev = null;
    while (temp != null) {
     var stock = temp.element;
      if (stock.name == item) {
        if (prev == null) {
          this.top = temp.next;
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
    Stack, Stacks
}
