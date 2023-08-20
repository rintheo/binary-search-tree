import Node from './node.js';

export default class Tree {
  constructor() {
    this.root = null;
  }

  buildTree(array) {
    const middleIndex = Math.floor(array.length / 2);
    const middleNode = new Node(array[middleIndex]);
    const leftArray = array.slice(0, middleIndex);
    const rightArray = array.slice(middleIndex + 1);

    if (leftArray.length !== 0) {
      middleNode.left = this.buildTree(leftArray);
    }
    if (rightArray.length !== 0) {
      middleNode.right = this.buildTree(rightArray);
    }

    return middleNode;
  }

  insert(data) {
    const newNode = new Node(data);
    let currentNode = this.root;
    while (currentNode !== null) {
      if (data < currentNode.data) {
        if (currentNode.left === null) {
          currentNode.left = newNode;
          break;
        }
        currentNode = currentNode.left;
      } else if (data > currentNode.data) {
        if (currentNode.right === null) {
          currentNode.right = newNode;
          break;
        }
        currentNode = currentNode.right;
      }
    }
  }

  delete(data) {
    let currentNode = this.root;
    let currentNodePosition = null;
    let previousNode = null;

    while (currentNode !== null) {
      if (data === currentNode.data) break;
      previousNode = currentNode;
      if (data < currentNode.data) {
        currentNode = currentNode.left;
        currentNodePosition = 'left';
      } else if (data > currentNode.data) {
        currentNode = currentNode.right;
        currentNodePosition = 'right';
      }
    }

    if (currentNode !== null) {
      if ((currentNode.left === null) && (currentNode.right === null)) {
        previousNode[currentNodePosition] = null;
      } else if ((currentNode.left !== null) && (currentNode.right !== null)) {
        // Start looking for successor node in current node's right child
        let successorNode = currentNode.right;
        let previousSuccessorNode = null;

        // Traverse the current node's right child left children until left child is null
        while (successorNode.left !== null) {
          previousSuccessorNode = successorNode;
          successorNode = successorNode.left;
        }

        // If successor node has a right child, move it to the successor node's position in the tree
        previousSuccessorNode.left = successorNode.right ?? null;

        successorNode.left = currentNode.left;
        successorNode.right = currentNode.right;
        if (currentNode !== this.root) {
          previousNode[currentNodePosition] = successorNode;
        } else {
          this.root = successorNode;
        }
      } else if ((currentNode.left !== null) || (currentNode.right !== null)) {
        previousNode[currentNodePosition] = currentNode.left ?? currentNode.right;
      }
    }
  }
}
