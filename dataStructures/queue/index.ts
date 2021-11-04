class QueueNode {
    constructor (public value: any, public next: QueueNode = null) {}
}

export class QueueImpl {
    constructor (public head: QueueNode = null, public tail: QueueNode = null, public size = 0) {}

    enqueue(value: any){
        const newNode = new QueueNode(value);

        if (this.isHeadEmpty()) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        
        this.increaseSize();
    }

    dequeue () {
        if (this.isHeadEmpty()) return null;

        const temporalNode = this.head;

        if (this.head === this.tail) {
            this.tail = null;
        }

        this.head = this.head.next;

        this.decreseSize();

        return temporalNode.value;
    }

    private isHeadEmpty () {
        return this.head === null;
    }

    private increaseSize () {
        this.size += 1;
    }

    private decreseSize () {
        this.size -= 1;
    }
}