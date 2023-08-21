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
      } else break;
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

  find(data) {
    let currentNode = this.root;
    while (currentNode !== null) {
      if (data === currentNode.data) break;
      currentNode = data < currentNode.data ? currentNode.left : currentNode.right;
    }
    return currentNode;
  }

  levelOrder(callback = (data) => data) {
    const orderArray = [];
    const queue = [this.root];
    while (queue.length !== 0) {
      const currentNode = queue[0];
      queue.shift();
      orderArray.push(callback(currentNode.data));
      if (currentNode.left !== null) queue.push(currentNode.left);
      if (currentNode.right !== null) queue.push(currentNode.right);
    }
    return orderArray;
  }

  inOrder(callback = (data) => data) {
    const orderArray = [];
    const traverse = (currentNode = this.root) => {
      if (currentNode.left !== null) traverse(currentNode.left);
      orderArray.push(callback(currentNode.data));
      if (currentNode.right !== null) traverse(currentNode.right);
    };
    traverse();
    return orderArray;
  }

  preOrder(callback = (data) => data) {
    const orderArray = [];
    const traverse = (currentNode = this.root) => {
      orderArray.push(callback(currentNode.data));
      if (currentNode.left !== null) traverse(currentNode.left);
      if (currentNode.right !== null) traverse(currentNode.right);
    };
    traverse();
    return orderArray;
  }

  postOrder(callback = (data) => data) {
    const orderArray = [];
    const traverse = (currentNode = this.root) => {
      if (currentNode.left !== null) traverse(currentNode.left);
      if (currentNode.right !== null) traverse(currentNode.right);
      orderArray.push(callback(currentNode.data));
    };
    traverse();
    return orderArray;
  }

  preOrderIteration(callback = (data) => data) {
    const orderArray = [];
    const stack = [this.root];
    while (stack.length !== 0) {
      const currentNode = stack[stack.length - 1];
      stack.pop();
      orderArray.push(callback(currentNode.data));
      if (currentNode.right !== null) stack.push(currentNode.right);
      if (currentNode.left !== null) stack.push(currentNode.left);
    }
    return orderArray;
  }

  height(node = this.root) {
    let currentNodeHeight = 0;
    const traverse = (currentNode = node, currentDepth = 0) => {
      if (currentDepth > currentNodeHeight) currentNodeHeight = currentDepth;
      if (currentNode.left !== null) traverse(currentNode.left, currentDepth + 1);
      if (currentNode.right !== null) traverse(currentNode.right, currentDepth + 1);
    };
    traverse();
    return currentNodeHeight;
  }

  depth(node = this.root) {
    let currentNode = this.root;
    let currentNodeDepth = 0;
    while (currentNode !== null) {
      if (node.data === currentNode.data) break;
      currentNodeDepth += 1;
      currentNode = node.data < currentNode.data ? currentNode.left : currentNode.right;
    }
    return currentNodeDepth;
  }

  isBalanced() {
    let depthDifference = 0;
    let isBalanced = true;
    const traverse = (currentNode = this.root, currentDepth = 0) => {
      let leftNodeDepth = currentDepth;
      let rightNodeDepth = currentDepth;
      if (currentNode.left !== null) {
        leftNodeDepth = traverse(currentNode.left, currentDepth + 1);
      }
      if (currentNode.right !== null) {
        rightNodeDepth = traverse(currentNode.right, currentDepth + 1);
      }
      depthDifference = Math.abs(leftNodeDepth - rightNodeDepth);
      if (isBalanced) isBalanced = depthDifference <= 1;
      return leftNodeDepth > rightNodeDepth ? leftNodeDepth : rightNodeDepth;
    };
    traverse();
    return isBalanced;
  }

  rebalance() {
    if (!this.isBalanced()) this.root = this.buildTree(this.inOrder());
    return this.root;
  }
}
