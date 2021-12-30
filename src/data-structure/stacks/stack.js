const Stack = class Stack {

    static max_stack = 9;

    constructor(max) {
        this.max = (max ? max : Stack.max_stack);
        this.values = [];
        this.top = -1;
    }

    push(element) {
        if (this.isFull()) {
            throw new Error('Stack is full');
        }
        this.values[++this.top] = element;
    }

    isEmpty() {
        return (this.top === -1);
    }

    isFull() {
        return (this.top === this.max);
    }

    pop() {
        if (this.isEmpty()) {
            throw new Error('Stack is empty');
        }
        return this.values[this.top--];
    }


}

module.exports = Stack