module.exports = class Queue {

    constructor(max) {
        this.__value = new Array(max);
        this.__begin = 0;
        this.__end = 0;
        this.__total = 0;
    }

    insert(element) {
        this.isFull();
        this.__value[this.__end] = element;
        this.__end = (this.__end + 1);
        this.__total++;
    }

    isFull() {
        if (this.__value.length === this.__total) {
            throw new Error("Queue is full");
        }
    }

    currentLastElement() {
        return this.__value[this.__end - 1];
    }

    remove() {
        this.isEmpty();
        const element = this.__value[this.__begin];
        this.__begin = (this.__begin + 1);
        this.__total--;
        return element;

    }

    isEmpty() {
        if (this.__total === 0)
            throw new Error('Queue is Empty');
    }

};