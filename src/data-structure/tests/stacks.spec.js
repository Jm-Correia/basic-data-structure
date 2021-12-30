const Stack = require('../stacks/stack')

const newStack = (max_length) => {

    if (max_length) {
        return new Stack(max_length);
    }
    return new Stack()
}
const mackeSut = (max_length) => {
    const stack = newStack(max_length);
    for (let index = 0; index <= 9; index++) {
        const element = Math.floor(Math.random() * 100);
        stack.push(element)
    }

    return stack

}

describe('Stack', () => {


    it('Should create a stack whithout any parameter', () => {
        const newStack = mackeSut();
        expect(newStack).toEqual(newStack)
        expect(newStack.isEmpty()).toBe(false)
        expect(() => {
            newStack.push(8)
        }
        ).toThrow();
        expect(() => {
            newStack.push(8)
        }).toThrowError('Stack is full');
    });
    it('Should create a stack to pass max length', () => {
        const stack = mackeSut(15);
        expect(stack).toEqual(stack)
        expect(stack.isEmpty()).toBe(false)
        expect(stack.max).toBe(15);
        stack.push(8)
        stack.push(8)
        stack.push(8)
        stack.push(8)
        stack.push(8)
        expect(stack.values.length).toBe(15);
    });
    it('Should create a stack and pop last element', () => {
        const stack = mackeSut();
        stack.pop();
        stack.push(8);
        expect(stack.pop()).toBe(8)
    });
    it('Should create a stack and try to remove element', () => {
        const stack = new Stack();
        expect(() => {
            stack.pop();

        }).toThrow('Stack is empty');
    });
})