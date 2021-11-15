class Node {
  constructor() {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.tree = null;
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
}