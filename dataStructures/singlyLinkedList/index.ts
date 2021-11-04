export class SinglyLinkedListNode {
    public next: SinglyLinkedListNode | null;

    constructor (public value: any) {
        this.next = null;
    }
}

export class SinglyLinkedList {
    constructor (public head: SinglyLinkedListNode | null, public tail: SinglyLinkedListNode | null, public length: number) {}

    push (value: any) {
        const node = new SinglyLinkedListNode(value);

        if (this.isHeadEmpty()) {
            this.setHead(node);
            this.setTail(node);
        } else {
            this.setTail(node, node);
        }

        this.increaseLength();
    }

    pop () {
        if (this.isHeadEmpty()) return undefined;

        let currentNode = this.head;
        let newTail = currentNode;

        while (currentNode.next) {
            newTail = currentNode;
            currentNode = currentNode.next;
        }

        this.setTail(newTail);
        this.decreaseLength();

        if (this.length === 0) {
            this.resetHeadAndTail();
        }

        return currentNode;
    }

    shift () {
        if (this.isHeadEmpty()) return undefined;

        const currentHead = this.head;
        this.head = currentHead.next;

        this.decreaseLength();

        if (this.length === 0) {
            this.setTail(null);
        }

        return currentHead;
    }

    unshift (value: any) {
        const newNode = new SinglyLinkedListNode(value);
        
        if (this.isHeadEmpty()) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }

        this.increaseLength();
    }

    get (idx: number) {
        if (idx < 0 || idx > this.length) return undefined;

        let innerIdx = 0;
        let currentNode = this.head;

        while (innerIdx !== idx) {
            currentNode = currentNode.next;
            innerIdx++;
        }

        return currentNode || undefined;
    }

    set (value: any, idx: number) {
        const currentNode = this.get(idx);

        if (currentNode) {
            currentNode.value = value;
        }
    }

    insert (value: any, idx: number) {
        const previousNode = this.get(idx - 1);

        if (previousNode) {
            const newNode = new SinglyLinkedListNode(value);
            const tempNode = previousNode.next;
            newNode.next = tempNode;
            previousNode.next = newNode;
            this.increaseLength();
        }   
    }

    remove (idx: number) {
        const prevNode = this.get(idx - 1);

        if (prevNode) {
            const removableNode = prevNode.next;
            const nextNode = removableNode.next;
            
            prevNode.next = nextNode;
            this.decreaseLength();
        }
    }

    reverse () {
        let node = this.head;

        this.head = this.tail;
        this.tail = node;
        
        let previousNode = null;
        let nextNode = null;

        for (let i = 0; i < this.length; i++) {
            nextNode = node.next;
            node.next = previousNode;
            previousNode = node;
            node = nextNode;
        }
    }

    private resetHeadAndTail () {
        this.setHead(null);
        this.setTail(null);
    }

    private isTail (node: SinglyLinkedListNode) {
        return node.next === null;
    }

    private isHeadEmpty () {
        return this.head == null;
    }

    private setHead (node: SinglyLinkedListNode) {
        this.head = node;
    }

    private increaseLength () {
        this.length += 1;
    }

    private decreaseLength () {
        this.length -= 1;
    }

    private setTail (node: SinglyLinkedListNode, next?: SinglyLinkedListNode) {
        this.tail = node;

        this.tail.next = next ?? null;
    }
}

