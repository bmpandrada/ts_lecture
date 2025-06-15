// Ang Linked List ay isang data structure kung saan ang bawat elemento (node) ay naglalaman ng:
// value/data (ang laman ng node)
// pointer/reference sa susunod na node sa listahan
class ListNode<T> {
  next?: ListNode<T>; // Pointer to the next node in the list

  constructor(public value: T) {} 
}

class LinkedList<T> {// A generic LinkedList class that can hold any type of data
  // The LinkedList class contains:
  // - root: the first node in the list
  // - tail: the last node in the list
  // - length: the number of nodes in the list
  private root?: ListNode<T>;
  private tail?: ListNode<T>;
  private length = 0;

  add(value: T) {
    const node = new ListNode(value); // Create a new ListNode with the given value
    // If the list is empty, set both root and tail to the new node
    // If the list is not empty, link the new node to the end of the list
    // and update the tail to point to the new node
    // Finally, increment the length of the list
    if (!this.root || !this.tail) {
      this.root = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
  }

  insertAt(value: T, pos: number) { // Insert a new node with the given value at the specified position
    // If the position is valid (between 0 and length), create a new node
    // and insert it at the specified position in the list
    // If the position is 0, set the new node as the root
    // If the position is greater than 0, traverse the list to find the correct position
    // and link the new node accordingly
    // Finally, increment the length of the list
    // If the position is invalid, return false
    // If the position is valid (between 0 and length), create a new node
    // and insert it at the specified position in the list
    // If the position is 0, set the new node as the root
    // If the position is greater than 0, traverse the list to find the correct position
    // and link the new node accordingly
    // Finally, increment the length of the list
    // If the position is invalid, return false
    if (pos > -1 && pos < this.length && this.root) {
      let current = this.root;
      let index = 0;
      let previous = current;
      let node = new ListNode(value);

      if (pos === 0) {
        node.next = this.root;
        this.root = node;
      } else {
        while (index++ < pos && current.next) {
          previous = current;
          current = current.next;
        }
        node.next = current;
        previous.next = node;
      }
      this.length++;
      return true;
    } else {
      return false;
    }
  }

  removeAt(pos: number) {// Remove the node at the specified position
    // If the position is valid (between 0 and length), traverse the list to find the node at the specified position
    // If the position is 0, set the root to the next node
    // If the position is greater than 0, link the previous node to the next node of the current node
    // Finally, decrement the length of the list and return the removed node
    // If the position is invalid, return null
    // Remove the node at the specified position
    // If the position is valid (between 0 and length), traverse the list to find the node at the specified position
    // If the position is 0, set the root to the next node
    // If the position is greater than 0, link the previous node to the next node of the current node
    // Finally, decrement the length of the list and return the removed node
    // If the position is invalid, return null
    // Remove the node at the specified position
    // If the position is valid (between 0 and length), traverse the list to find the node at the specified position
    // If the position is 0, set the root to the next node
    // If the position is greater than 0, link the previous node to the next node of the current node
    // Finally, decrement the length of the list and return the removed node
    // If the position is invalid, return null
    // Remove the node at the specified position
    // If the position is valid (between 0 and length), traverse the list to find the node at the specified position
    // If the position is 0, set the root to the next node
    // If the position is greater than 0, link the previous node to the next node of the current node
    // Finally, decrement the length of the list and return the removed node
    // If the position is invalid, return null
    // Remove the node at the specified position
    // If the position is valid (between 0 and length), traverse the list to find the node at the specified position
    // If the position is 0, set the root to the next node
    // If the position is greater than 0, link the previous node to the next node of the current node
    // Finally, decrement the length of the list and return the removed node
    // If the position is invalid, return null
    // Remove the node at the specified position
    // If the position is valid (between 0 and length), traverse the list to find the node at the specified position
    // If the position is 0, set the root to the next node
    // If the position is greater than 0, link the previous node to the next node of the current node
    // Finally, decrement the length of the list and return the removed node
    // If the position is invalid, return null
    // Remove the node at the specified position
    // If the position is valid (between 0 and length), traverse the list to find the node at the specified position
    // If the position is 0, set the root to the next node
    // If the position is greater than 0, link the previous node to the next node of the current node
    // Finally, decrement the length of the list and return the removed node
    // If the position is invalid, return null
    // Remove the node at the specified position
    // If the position is valid (between 0 and length), traverse the list to find the node at the specified position
    // If the position is 0, set the root to the next node
    // If the position is greater than 0, link the previous node to the next node of the current node
    // Finally, decrement the length of the list and return the removed node
    // If the position is invalid, return null
    // Remove the node at the specified position  
    if (pos > -1 && pos < this.length && this.root) {
      let current = this.root;
      let previous: ListNode<T> = current;
      let index = 0;

      if (pos === 0) {
        this.root = current.next;
      } else {
        while (index++ < pos && current.next) {
          previous = current;
          current = current.next;
        }
        previous.next = current.next;
      }
      this.length--;
      return current;
    } else {
      return null;
    }
  }

  getNumberOfElements() {
    return this.length;
  }

  print() {
    let current = this.root;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }
}

const numberList = new LinkedList<number>();

numberList.add(10);
numberList.add(5);
numberList.add(-3);

console.log('Length: ' + numberList.getNumberOfElements());
numberList.print();

console.log('--- NOW REMOVING INDEX 1 ---');
numberList.removeAt(1);
console.log('Length: ' + numberList.getNumberOfElements());
numberList.print();

console.log('--- NOW INSERTING AT INDEX 1 ---');
numberList.insertAt(100, 1);
console.log('Length: ' + numberList.getNumberOfElements());
numberList.print();

const nameList = new LinkedList<string>();
