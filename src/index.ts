class Node<T> {
  value: T;
  next: Node<T> | null;

  constructor(value: T, next: Node<T> | null = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList<T> {
  head: Node<T> | null;
  tail: Node<T> | null;
  size: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  /**
   * Adds a new node with the given value to the end of the list.
   * @param value The value to add.
   */
  add(value: T): void {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail!.next = newNode;
      this.tail = newNode;
    }
    this.size++;
  }

  /**
   * Inserts a new node with the given value at a specified index.
   * @param value The value to insert.
   * @param index The index at which to insert the value.
   * @returns True if successful, false otherwise.
   */
  insertAt(value: T, index: number): boolean {
    if (index < 0 || index > this.size) {
      return false; // Invalid index
    }

    if (index === this.size) {
      this.add(value); // Add to end
      return true;
    }

    const newNode = new Node(value);
    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      let current = this.head;
      let prev: Node<T> | null = null;
      for (let i = 0; i < index; i++) {
        prev = current;
        current = current!.next;
      }
      newNode.next = current;
      prev!.next = newNode;
    }
    this.size++;
    return true;
  }

  /**
   * Removes the first node with the given value from the list.
   * @param value The value to remove.
   * @returns True if successful, false otherwise.
   */
  remove(value: T): boolean {
    if (!this.head) {
      return false;
    }

    if (this.head.value === value) {
      this.head = this.head.next;
      if (!this.head) {
        this.tail = null;
      }
      this.size--;
      return true;
    }

    let current = this.head;
    let prev: Node<T> | null = null;
    while (current && current.value !== value) {
      prev = current;
      current = current.next;
    }

    if (current) {
      prev!.next = current.next;
      if (current === this.tail) {
        this.tail = prev;
      }
      this.size--;
      return true;
    }
    return false;
  }

  /**
   * Removes a node at a specified index.
   * @param index The index of the node to remove.
   * @returns The value of the removed node, or null if not found.
   */
  removeAt(index: number): T | null {
    if (index < 0 || index >= this.size || !this.head) {
      return null;
    }

    let removedValue: T | null = null;

    if (index === 0) {
      removedValue = this.head.value;
      this.head = this.head.next;
      if (!this.head) {
        this.tail = null;
      }
    } else {
      let current = this.head;
      let prev: Node<T> | null = null;
      for (let i = 0; i < index; i++) {
        prev = current;
        current = current!.next;
      }
      removedValue = current!.value;
      prev!.next = current!.next;
      if (current === this.tail) {
        this.tail = prev;
      }
    }
    this.size--;
    return removedValue;
  }


  /**
   * Finds the first node with the given value.
   * @param value The value to find.
   * @returns The node if found, otherwise null.
   */
  find(value: T): Node<T> | null {
    let current = this.head;
    while (current) {
      if (current.value === value) {
        return current;
      }
      current = current.next;
    }
    return null;
  }

  /**
   * Returns the value of the node at a specific index.
   * @param index The index to retrieve the value from.
   * @returns The value at the index, or null if out of bounds.
   */
  get(index: number): T | null {
    if (index < 0 || index >= this.size) {
      return null;
    }
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current!.next;
    }
    return current!.value;
  }


  /**
   * Iterates through the list and calls the callback function for each node.
   * @param callback A function to call for each node.
   */
  traverse(callback: (value: T) => void): void {
    let current = this.head;
    while (current) {
      callback(current.value);
      current = current.next;
    }
  }

  /**
   * Converts the linked list to an array.
   * @returns An array containing all values in the list.
   */
  toArray(): T[] {
    const arr: T[] = [];
    this.traverse(value => arr.push(value));
    return arr;
  }

  /**
   * Checks if the list is empty.
   * @returns True if the list is empty, false otherwise.
   */
  isEmpty(): boolean {
    return this.size === 0;
  }

  /**
   * Clears the entire list.
   */
  clear(): void {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
}

// Example Usage:
console.log('--- Integer Linked List ---');
const numberList = new LinkedList<number>();
numberList.add(10);
numberList.add(20);
numberList.add(30);
numberList.insertAt(15, 1); // List: 10, 15, 20, 30
console.log('List after additions and insertion:', numberList.toArray()); // [10, 15, 20, 30]
console.log('Size:', numberList.size); // 4

numberList.remove(20); // List: 10, 15, 30
console.log('List after removing 20:', numberList.toArray()); // [10, 15, 30]
console.log('Size:', numberList.size); // 3

console.log('Value at index 1:', numberList.get(1)); // 15
console.log('Found 10:', numberList.find(10)?.value); // 10
console.log('Found 99:', numberList.find(99)); // null

numberList.removeAt(0); // List: 15, 30
console.log('List after removing at index 0:', numberList.toArray()); // [15, 30]
console.log('Size:', numberList.size); // 2

console.log('
--- String Linked List ---');
const stringList = new LinkedList<string>();
stringList.add('Apple');
stringList.add('Banana');
stringList.add('Cherry');
console.log('String List:', stringList.toArray());
stringList.traverse(fruit => console.log(`Fruit: ${fruit}`));
stringList.clear();
console.log('String List after clear:', stringList.toArray()); // []
