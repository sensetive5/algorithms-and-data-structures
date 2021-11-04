class BSTNode {
    constructor (public value: any, public left: BSTNode = null, public right: BSTNode = null) {}
}

class BST {
    constructor (public root: BSTNode = null) {}

    insert (value: any) {
        const newNode = new BSTNode(value);

        if (this.root === null) {
            this.root = newNode;
        } else {
            let current = this.root;

            while (true) {
                if (value === current.value) {
                    return false;
                } else if (value < current.value) {
                    if (current.left === null) {
                        current.left = newNode;
                        return;
                    } else {
                        current = current.left;
                    }
                } else if (value > current.value) {
                    if (current.right === null) {
                        current.right = newNode;
                        return;
                    } else {
                        current = current.right;
                    }
                }
            }
        }
    }

    find (value: any) {

    }
}