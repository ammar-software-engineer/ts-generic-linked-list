# TS Generic Linked List

A comprehensive and type-safe generic Doubly Linked List implementation in TypeScript. This data structure allows for efficient insertion and deletion of elements at various positions, making it suitable for scenarios where dynamic data ordering and manipulation are critical.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
  - [Node Class](#node-class)
  - [LinkedList Class](#linkedlist-class)
    - [Constructor](#constructor)
    - [`add(value: T)` - Add to End](#addvalue-t---add-to-end)
    - [`insertAt(value: T, index: number)` - Insert at Index](#insertatvalue-t-index-number---insert-at-index)
    - [`remove(value: T)` - Remove First Occurrence of Value](#removevalue-t---remove-first-occurrence-of-value)
    - [`removeAt(index: number)` - Remove at Index](#removeatindex-number---remove-at-index)
    - [`find(value: T)` - Find Node by Value](#findvalue-t---find-node-by-value)
    - [`get(index: number)` - Get Value by Index](#getindex-number---get-value-by-index)
    - [`traverse(callback: (value: T) => void)` - Traverse List](#traversecallback-value-t--void---traverse-list)
    - [`toArray(): T[]` - Convert to Array](#toarray-t---convert-to-array)
    - [`isEmpty(): boolean` - Check if Empty](#isempty-boolean---check-if-empty)
    - [`clear(): void` - Clear List](#clear-void---clear-list)
- [Example](#example)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Generic Type Support**: Works with any data type, ensuring type safety through TypeScript generics (`<T>`).
- **Basic Operations**: Includes fundamental linked list operations like adding, inserting, removing, and finding elements.
- **Index-based Operations**: Supports operations based on the index of elements.
- **Traversal**: Provides a method to iterate through all elements.
- **Size Tracking**: Maintains an accurate count of elements in the list.
- **Clear List Functionality**: Easily reset the list to an empty state.
- **Head and Tail Pointers**: Efficiently manages the beginning and end of the list.

## Installation

To use this generic linked list in your TypeScript project, you can integrate the `Node` and `LinkedList` classes directly.

First, ensure you have TypeScript installed:

```bash
npm install -g typescript
```

Then, you can copy the `src/index.ts` file into your project or compile it into a JavaScript module.

## Usage

### Node Class

The `Node` class represents an individual element within the linked list.

```typescript
class Node<T> {
  value: T;
  next: Node<T> | null;

  constructor(value: T, next: Node<T> | null = null) {
    this.value = value;
    this.next = next;
  }
}
```

### LinkedList Class

The `LinkedList` class manages the collection of `Node`s and provides methods to interact with the list.

#### Constructor

Initializes an empty linked list.

```typescript
const myList = new LinkedList<number>();
const myStringList = new LinkedList<string>();
```

#### `add(value: T)` - Add to End

Adds a new node with the given `value` to the end of the list.

```typescript
myList.add(10);
myList.add(20);
// List: 10 -> 20
```

#### `insertAt(value: T, index: number)` - Insert at Index

Inserts a new node with the given `value` at a specified `index`. Returns `true` if successful, `false` otherwise (e.g., invalid index).

```typescript
myList.insertAt(15, 1);
// List: 10 -> 15 -> 20
```

#### `remove(value: T)` - Remove First Occurrence of Value

Removes the first node found with the given `value` from the list. Returns `true` if successful, `false` otherwise.

```typescript
myList.remove(15);
// List: 10 -> 20
```

#### `removeAt(index: number)` - Remove at Index

Removes and returns the value of the node at a specified `index`. Returns `null` if the index is out of bounds or the list is empty.

```typescript
const removed = myList.removeAt(0);
// List: 20, removed = 10
```

#### `find(value: T)` - Find Node by Value

Finds and returns the `Node` object for the first occurrence of the given `value`. Returns `null` if the value is not found.

```typescript
const node = myList.find(20);
// node.value will be 20, or null if not found
```

#### `get(index: number)` - Get Value by Index

Returns the `value` of the node at a specific `index`. Returns `null` if the index is out of bounds.

```typescript
const value = myList.get(0);
// value will be 20
```

#### `traverse(callback: (value: T) => void)` - Traverse List

Iterates through the list, calling the provided `callback` function for each node's value.

```typescript
myList.traverse(item => console.log(`Item: ${item}`));
// Expected output:
// Item: 20
```

#### `toArray(): T[]` - Convert to Array

Converts the linked list into a standard TypeScript array.

```typescript
const listAsArray = myList.toArray();
// listAsArray will be [20]
```

#### `isEmpty(): boolean` - Check if Empty

Returns `true` if the list contains no elements, `false` otherwise.

```typescript
console.log(myList.isEmpty()); // false
```

#### `clear(): void` - Clear List

Removes all elements from the list, making it empty.

```typescript
myList.clear();
console.log(myList.isEmpty()); // true
```

## Example

The `src/index.ts` file includes a complete example demonstrating the usage of the `LinkedList` with both `number` and `string` types, showcasing various operations.

```typescript
// Example Usage (from src/index.ts):
console.log('--- Integer Linked List ---');
const numberList = new LinkedList<number>();
numberList.add(10);
numberList.add(20);
numberList.add(30);
numberList.insertAt(15, 1); // List: 10, 15, 20, 30
console.log('List after additions and insertion:', numberList.toArray());
console.log('Size:', numberList.size);

numberList.remove(20); // List: 10, 15, 30
console.log('List after removing 20:', numberList.toArray());
console.log('Size:', numberList.size);

console.log('Value at index 1:', numberList.get(1));
console.log('Found 10:', numberList.find(10)?.value);
console.log('Found 99:', numberList.find(99));

numberList.removeAt(0); // List: 15, 30
console.log('List after removing at index 0:', numberList.toArray());
console.log('Size:', numberList.size);

console.log('\n--- String Linked List ---');
const stringList = new LinkedList<string>();
stringList.add('Apple');
stringList.add('Banana');
stringList.add('Cherry');
console.log('String List:', stringList.toArray());
stringList.traverse(fruit => console.log(`Fruit: ${fruit}`));
stringList.clear();
console.log('String List after clear:', stringList.toArray());
```

## Contributing

Contributions are welcome! If you have suggestions for improvements, bug fixes, or new features (e.g., implementing a Doubly Linked List, adding more utility methods), please open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details (if applicable).
