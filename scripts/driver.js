import Tree from './binarySearchTree.js';

const generateArray = () => {
  const generatedArray = [];
  const shuffledArray = [];
  const randomLength = Math.ceil(Math.random() * 100);
  for (let i = 0; i < randomLength; i += 1) {
    generatedArray.push(i);
  }
  while (generatedArray.length > 0) {
    shuffledArray.push(
      ...generatedArray.splice(Math.floor(generatedArray.length * Math.random()), 1),
    );
  }
  return shuffledArray;
};

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

const array = generateArray();
const tree = new Tree();
console.log(array);
tree.buildTree(array);
prettyPrint(tree.root);

console.log('Is tree balanced:');
console.log(tree.isBalanced());

console.log('Level Order:');
console.log(tree.levelOrder());
console.log('Pre Order:');
console.log(tree.preOrder());
console.log('Post Order:');
console.log(tree.postOrder());
console.log('In Order:');
console.log(tree.inOrder());

tree.insert(101);
tree.insert(555);
tree.insert(999);
tree.insert(1337);
tree.insert(9000);
prettyPrint(tree.root);

console.log('Is tree balanced:');
console.log(tree.isBalanced());

console.log('Rebalanced Tree:');
tree.rebalance();
prettyPrint(tree.root);

console.log('Is tree balanced:');
console.log(tree.isBalanced());

console.log('Level Order:');
console.log(tree.levelOrder());
console.log('Pre Order:');
console.log(tree.preOrder());
console.log('Post Order:');
console.log(tree.postOrder());
console.log('In Order:');
console.log(tree.inOrder());
