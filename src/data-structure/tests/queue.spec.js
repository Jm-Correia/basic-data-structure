const Queue = require("../queues/queue");


describe("QUEUE", () => {

    it("Should create a queue empty", () => {
        const queue = new Queue(10);
        expect(queue).toEqual(
            {
                "__begin": 0,
                "__end": 0,
                "__total": 0,
                "__value": new Array(10),
            }
        );
    });
    it("Should create a queue and insert a new element", () => {
        const queue = new Queue(10);
        expect(!queue.insert(12)).toBeTruthy();
        expect(queue.__end).toBe(1);
        expect(queue.__value[queue.__begin]).toBe(12);
    });
    it("Should create a queue and insert a two new elements", () => {
        const queue = new Queue(5);
        queue.insert(13)
        queue.insert(13)
        expect(queue.__end).toBe(2);
        expect(queue.currentLastElement()).toBe(13);
    });
    it("Should create a queue length one and try to insert two elements", () => {
        const queue = new Queue(1);
        expect(() => {
            queue.insert(1);
            queue.insert(2)
        }
        ).toThrowError('Queue is full');

    });
    it("Should be remove first element", () => {
        const queue = new Queue(2);
        queue.insert(1);
        queue.insert(2);

        expect(queue.remove()).toBe(1);
    });
    it("Should be remove two element and total be 0", () => {
        const queue = new Queue(2);
        queue.insert(1);
        queue.insert(2);
        queue.remove();
        expect(queue.remove()).toBe(2);
        expect(queue.__total).toBe(0);
    });
    it("Should be create queue empty and try to remove a element", () => {
        const queue = new Queue(1);
        expect(() => queue.remove()).toThrow();

    });
});