class StackNode {
    constructor (public value: any, public next: StackNode = null) {}
}

class StackImpl {
    constructor (public head: StackNode = null, public tail: StackNode = null, public size = 0) {}

    add (value: any) {
        const newNode = new StackNode(value);

        if (this.isHeadEmpty()) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            const temporalNode = this.head;
            this.head = newNode;
            this.head.next = temporalNode;
        }

        this.increaseSize();
    }

    remove () {
        if (this.isHeadEmpty()) return null;

        const temporalNode = this.head;

        if (this.head === this.tail){
            this.tail = null;
        }

        this.head = this.head.next;
        this.decreaseSize();

        return temporalNode.value;
    }

    private increaseSize () {
        this.size += 1;
    }

    private decreaseSize () {
        this.size -= 1;
    }
    
    private isHeadEmpty () {
        return this.head === null;
    }
}