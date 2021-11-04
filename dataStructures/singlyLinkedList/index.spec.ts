import { SinglyLinkedListNode } from ".";

describe('SinglyLinkedListNode', () => {
    it ('Should create an instance of SinglyLinkedListNode class', () => {
        const node = new SinglyLinkedListNode('im node');
        
        expect(node instanceof SinglyLinkedListNode).toBeTruthy();
    });

    it('Should set value', () => {
        const node = new SinglyLinkedListNode('im node');

        expect(node.value).toBe('im node');
    });
});