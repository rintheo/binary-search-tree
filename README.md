# binary-search-tree
A binary search tree module made in JavaScript.

## Node
### Properties
- ```data``` - ```Node``` instance value.
- ```left``` - Reference to the left ```Node``` Object in the binary search tree, otherwise ```null``` if there is nothing assigned. The left ```Node``` value is always lower than the current ```Node``` value.
- ```right``` - Reference to the right ```Node``` Object in the binary search tree, otherwise ```null``` if there is nothing assigned. The right ```Node``` value is always higher than the current ```Node``` value.

## Tree
### Properties
- ```root``` - ```Node``` Object marking the beginning of the binary search tree.

### Methods
- ```buildTree(inputArray)``` - builds the binary search tree using an array ```inputArray``` and returns the resulting root ```Node``` Object. Before building the tree, ```inputArray``` is first sorted using Merge Sort and checked for duplicate values.
- ```insert(data)``` - inserts a new ```Node``` Object with data ```data``` as a leaf node in the tree. Depending on the ```data``` added, the tree might get unbalanced. Will not insert any new ```Node``` Object if the data already exist somewhere in the tree.
- ```delete(data)``` - deletes a ```Node``` Object in tree containing data ```data```. If the deleted ```Node``` has no children, the reference from its parent node is simply removed. If it has 1 child node, that child node moves up from the tree and replaces the deleted node. However, if it has 2 children, the deleted node is replaced with its inorder successor from the tree.
- ```find(data)``` - finds and returns the ```Node``` Object in the tree containing the data ```data```.
- ```levelOrder(callback)``` - returns an array containing values ran through the ```callback``` function in breadth-first level order. If no ```callback``` function is passed as an argument, simply return an array of values.
- ```inOrder(callback)```, ```preOrder(callback)```, ```postOrder(callback)``` - returns an array containing values ran through the ```callback``` function in depth-first level of the corresponding method order. If no ```callback``` function is passed as an argument, simply return an array of values. ```preOrderIteration(callback)``` is an alternative method using iteration instead of recursion.
- ```height(node)``` - returns the height of ```node``` wherein height is defined as the number of edges in the longest path from ```node``` to a leaf node. If no ```node``` is passed as an argument, simply return the height of the tree's root node.
- ```depth(node)``` - returns the depth of ```node``` wherein depth is defined as the number of edges from ```node``` to the tree's root node. If no ```node``` is passed as an argument, simply return the depth of the tree's root node which is always ```0```.
- ```isBalanced()``` - returns ```true``` if the tree is balanced, otherwise returns ```false```. A balanced tree is one where the difference between heights of left subtree and right subtree of every node is not more than 1.
- ```rebalance()``` - rebalances an unbalanced tree and returns the resulting tree's root node.
