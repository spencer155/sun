class Node {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  inset(key) {
    const node = new Node(key)
    if (this.root === null) {
      this.root = node
    } else {
      this.insetNode(this.root, node)
    }
  }
  insetNode(node, newNode) {
    if (node.key > newNode.key) {
      if (node.left === null) {
        node.left = newNode
      } else {
        this.insetNode(node.left, newNode)
      }
    } else {
      if (node.right === null) {
        node.right = newNode
      } else {
        this.insetNode(node.right, newNode)
      }
    }
  }
  // 先序遍历
  preOrderTraverse() {
    this.preOrderTraverseNode(this.root)
  }
  preOrderTraverseNode(node) {
    if (node === null) return;
    console.log(node.key)
    this.preOrderTraverseNode(node.left)
    this.preOrderTraverseNode(node.right)
  }
  // 中序遍历
  inOrderTraverse() {
    this.inOrderTraverseNode(this.root)
  }
  inOrderTraverseNode(node) {
    if (node === null) return;
    this.inOrderTraverseNode(node.left)
    console.log(node.key)
    this.inOrderTraverseNode(node.right)
  }
  // 后序遍历
  postOrderTraverse() {
    this.postOrderTraverseNode(this.root)
  }
  postOrderTraverseNode(node) {
    if (node === null) return;
    this.postOrderTraverseNode(node.left)
    this.postOrderTraverseNode(node.right)
    console.log(node.key)
  }
  min() {
    let node = this.root;
    while (node.left !== null) {
      node = node.left
    }
    return node.key
  }
  max() {
    let node = this.root;
    while (node.right !== null) {
      node = node.right
    }
    return node.key
  }
  search(key) {
    return this.searchNode(this.root, key)
  }
  searchNode(node, key) {
    if (node === null) return false;
    
    if (node.key > key) {
      return this.searchNode(node.left, key)
    } else if (node.key < key) {
      return this.searchNode(node.right, key)
    } else {
      return true
    }
  }
  remove(key) {
    let current = this.root;
    let parent = null;
    let isLeftChild = true;

    while (current.key !== key) {
      parent = current
      if (current.key > key) {
        current = current.left
        isLeftChild = true
      } else {
        current = current.right
        isLeftChild = false
      }
      if (current === null) return false
    }
    if (current.left === null && current.right === null) {
      if (current === this.root) {
        this.root = null
      } else {
        if (isLeftChild) {
          parent.left = null
        } else {
          parent.right = null
        }
      }
    } else if (current.right === null) {
      if (current === this.root) {
        this.root = current.left
      } else {
        if (isLeftChild) {
          parent.left = current.left
        } else {
          parent.right = current.left
        }
      }
    } else if (current.left === null) {
      if (current === this.root) {
        this.root = current.right
      } else {
        if (isLeftChild) {
          parent.left = current.right
        } else {
          parent.right = current.right
        }
      }
    } else {
      let successor = this.getSuccessor(current);

      if (this.root === current) {
        this.root = successor
      } else {
        if (isLeftChild) {
          parent.left = successor
        } else {
          parent.right = successor
        }
      }
      successor.left = current.left
    }
    return true
  }
  getSuccessor(delNode) {
    let successorParent = delNode
    let successor = delNode;
    let current = delNode.right;

    while (current !== null) {
      successorParent = successor
      successor = current
      current = current.left
    }

    if (successor !== delNode.right) {
      successorParent.left = successor.right
      successor.right = delNode.right
    }

    return successor
  }
}

const binarySearchTree = new BinarySearchTree()
binarySearchTree.inset(10)
binarySearchTree.inset(6)
binarySearchTree.inset(4)
binarySearchTree.inset(11)
binarySearchTree.inset(1)
binarySearchTree.inset(7)
binarySearchTree.inset(3)
binarySearchTree.inset(20)
binarySearchTree.inset(25)
console.log(binarySearchTree)
// binarySearchTree.preOrderTraverse()
// binarySearchTree.inOrderTraverse()
// binarySearchTree.postOrderTraverse()
// console.log(binarySearchTree.max())
// console.log(binarySearchTree.min())
// console.log(binarySearchTree.search(25))
// console.log(binarySearchTree.search(50)) 

console.log(binarySearchTree.remove(7))
binarySearchTree.inOrderTraverse()