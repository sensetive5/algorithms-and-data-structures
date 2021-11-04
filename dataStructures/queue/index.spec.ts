import { QueueImpl } from "."

let queue;

describe('Queue', () => {
    beforeAll (() => {
        jest.clearAllMocks();

        queue = new QueueImpl();

        queue.enqueue(1);
        queue.enqueue(2);
        queue.enqueue(3);
        queue.enqueue(4);
        queue.enqueue(5);
    });

    it ('Should add task to queue and increase the size of queue', () => {        
        expect(queue.size).toBe(5);
    });
    
    it ('Should remove task from queue and decrease the size of queue', () => {
        const value = queue.dequeue();
        
        expect(queue.size).toBe(4);
        expect(value).toBe(1);
    });
});