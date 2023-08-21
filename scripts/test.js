import Tree from './binarySearchTree.js';
import mergeSort from './mergeSort.js';
import removeDuplicate from './removeDuplicate.js';

const tree = new Tree();
const unsortedArray = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
const filteredArray = mergeSort(removeDuplicate(unsortedArray));

const prettyPrint = (node, prefix = '', isLeft = true) => {
  if (node === null) {
    return;
  }
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
  }
  console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
  }
};

tree.root = tree.buildTree(filteredArray);
console.log(`isBalanced: ${tree.isBalanced()}`);
// tree.insert(10);

prettyPrint(tree.root);

// tree.insert(2);
// tree.insert(6);
// tree.insert(11);
// tree.insert(320);
// tree.insert(321);
// tree.insert(325);
// prettyPrint(tree.root);

// console.log(tree.delete(8));
// prettyPrint(tree.root);

// console.log(tree.find(8));
// console.log(tree.find(10));
// console.log(tree.find(23));
// console.log(tree.find(67));
// console.log(tree.find(99999));

// const testFuncLevelOrder = (x) => x + 1;
// console.log(tree.levelOrder());
// console.log(tree.levelOrder(testFuncLevelOrder));
// console.log(tree.levelOrder((x) => x * 2));

// const testFuncInOrder = (x) => x + 1;
// console.log(tree.inOrder());
// // console.log(tree.inOrder(testFuncInOrder));
// // console.log(tree.inOrder((x) => x * 2));

// const testFuncPreOrder = (x) => x + 1;
// console.log(tree.preOrder());
// // console.log(tree.preOrder(testFuncPreOrder));
// // console.log(tree.preOrder((x) => x * 2));

// const testFuncPostOrder = (x) => x + 1;
// console.log(tree.postOrder());
// console.log(tree.postOrder(testFuncPostOrder));
// console.log(tree.postOrder((x) => x * 2));

// const x = 23;
// console.log(`Height: ${tree.height(tree.find(x))}`);
// console.log(`Depth: ${tree.depth(tree.find(x))}`);

// tree.insert(11);
// tree.insert(12);
// console.log(`isBalanced: ${tree.isBalanced()}`);
// prettyPrint(tree.root);

// tree.insert(24);
// console.log(`isBalanced: ${tree.isBalanced()}`);
// prettyPrint(tree.root);

// console.log('Rebalanced Tree:');
// tree.rebalance();
// console.log(`isBalanced: ${tree.isBalanced()}`);
// prettyPrint(tree.root);

// tree.insert(10);
// tree.insert(99);
// console.log(`isBalanced: ${tree.isBalanced()}`);
// prettyPrint(tree.root);

// console.log('Rebalanced Tree:');
// tree.rebalance();
// console.log(`isBalanced: ${tree.isBalanced()}`);
// prettyPrint(tree.root);
