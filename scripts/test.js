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
tree.insert(10);

prettyPrint(tree.root);

// tree.insert(2);
// tree.insert(6);
// tree.insert(11);
// tree.insert(320);
// tree.insert(321);
// tree.insert(325);
// prettyPrint(tree.root);

tree.delete(81);
prettyPrint(tree.root);
