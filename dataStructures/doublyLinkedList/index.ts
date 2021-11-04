class DoublyLinkedListNode {
    constructor (public value: any, public next: DoublyLinkedListNode | null = null, public prev: DoublyLinkedListNode | null = null) {}
}

class DoublyLinkedList {
    constructor (private head: DoublyLinkedListNode | null = null, private tail: DoublyLinkedListNode | null = null, public length = 0) {}

    push (value: any) {
        const newNode = new DoublyLinkedListNode(value);

        if (this.isEmpty()) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.prev = this.tail;
            this.tail.next = newNode;

            this.tail = newNode;
        }
        
        this.increaseLength();

        return this;
    }

    pop () {
        if (this.isEmpty() || this.isTailEmpty()) return undefined;

        const returnedValue = this.tail;

        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = returnedValue.prev;
            this.tail.next = null;    
        }
        
        this.decreaseLength();

        returnedValue.next = null;
        returnedValue.prev = null;

        return returnedValue;
    }

    shift () {
        if (this.isEmpty() || this.isHeadEmpty()) return undefined;

        const returnedValue = this.head;

        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = returnedValue.next;
            this.head.prev = null;
        }

        this.decreaseLength();

        returnedValue.next = null;
        returnedValue.prev = null;

        return returnedValue;
    }

    unshift (value: any) {
        const newNode = new DoublyLinkedListNode(value);

        if (this.isHeadEmpty()) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }

        this.increaseLength();

        return this;
    }

    get (idx: number): DoublyLinkedListNode | undefined {
        if (idx < 0 || idx >= this.length) return undefined;

        if (idx === 0) return this.head;

        if (idx === this.length - 1) return this.tail;
        
        let middlePoint = Math.floor(this.length / 2);
        let currentNode;
        
        if (idx <= middlePoint) {
            let count = 0;
            currentNode = this.head;
            while (count !== idx) {
                currentNode = currentNode.next;
                count++;
            }
        } else {
            let count = this.length - 1;
            currentNode = this.tail;

            while (count !== idx) {
                currentNode = currentNode.prev;
                count--;
            }
        }

        return currentNode;
    }

    set (value: any, idx: number) {
        const foundNode = this.get(idx);

        if (foundNode) {
            foundNode.val = value;
            return true;
        }

        return false;
    }

    insert (value: any, idx: number) {
        if (idx < 0 || idx > this.length) return false;

        if (idx === 0) return this.unshift(value);

        if (idx === this.length) return this.push(value);

        const previousNode = this.get(idx - 1);
        
        if (previousNode) {
            const newNode = new DoublyLinkedListNode(value);
            const afterNode = previousNode.next;

            newNode.prev = previousNode;
            newNode.next = afterNode;

            previousNode.next = newNode;
            afterNode.prev = newNode;

            this.increaseLength();
        }

    }

    remove (idx: number) {
        const removableNode = this.get(idx - 1);

        if (removableNode) {
            const prev = removableNode.prev;
            const next = removableNode.next;

            next.prev = prev;
            prev.next = next;

            removableNode.next = null, removableNode.prev = null;

            this.decreaseLength();
        }
    }

    private isEmpty () {
        return this.length === 0;
    }
    
    private isHeadEmpty () {
        return this.head === null;
    }

    private isTailEmpty () {
        return this.tail === null;
    }

    private increaseLength () {
        this.length += 1;
    }

    private decreaseLength () {
        this.length -= 1;
    }
}