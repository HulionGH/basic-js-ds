const { NotImplementedError } = require("../extensions/index.js");

// const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */

module.exports = class BinarySearchTree {
  root() {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  add(/* data */) {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  has(/* data */) {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  find(/* data */) {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  remove(/* data */) {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }
};

/* 
class Node {
  constructor(value) {
    this.data = value;
    this.left = null;
    this.right = null;
  }
}

module.exports = class BinarySearchTree {
  constructor() {
    this.treeRoot = null;
  }

  root() {
    return this.treeRoot;
  }

  add(data) {
    let newNode = new Node(data);
    if (this.treeRoot === null) {
      this.treeRoot = newNode;
      return this;
    }

    let current = this.treeRoot;
    while (current) {
      if (data === current.data) return undefined;
      if (data < current.data) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }

  has(data) {
    let current = this.treeRoot;
    while (current) {
      if (data === current.data) return true;
      if (data < current.data) {
        if (current.left === null) {
          return false;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          return false;
        }
        current = current.right;
      }
    }
  }

  find(data) {
    let current = this.treeRoot;
    while (current) {
      if (data === current.data) return current;
      if (data < current.data) {
        if (current.left === null) {
          return null;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          return null;
        }
        current = current.right;
      }
    }
  }

  /*   remove(data) {
    let current = this.treeRoot;
    while (current) {
      if (data === current.data) {
        current = null;
        return null;
      }
      if (data < current.data) {
        if (current.left === null) {
          return null;
        }
        if (data === current.left.data) {
          current.left = null;
          return null;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          return null;
        }
        if (data === current.right.data) {
          current.right = null;
          return null;
        }
        current = current.right;
      }
    }
  } * / ЗДЕСЬ УБРАТЬ ПРОБЕЛ

  remove(data) {
    this.treeRoot = this.removeNode(this.treeRoot, data);
  }

  removeNode(current, data) {
    if (current === null) return current;
    if (data === current.data) {
      // for case 1 and 2, node without child or with one child

      if (current.left === null && current.right === null) {
        return null;
      } else if (current.left === null) {
        return current.right;
      } else if (current.right === null) {
        return current.left;
      } else {
        let tempNode = this.kthSmallestNode(current.right);
        current.data = tempNode.data;
        current.right = this.removeNode(current.right, tempNode.data);
        return current;
      }
    } else if (data < current.data) {
      current.left = this.removeNode(current.left, data);
      return current;
    } else {
      current.right = this.removeNode(current.right, data);
      return current;
    }
  }

  kthSmallestNode(node) {
    while (!node.left === null) node = node.left;
    return node;
  }

  min() {
    let current = this.treeRoot;
    if (current == null) return null;
    let min = this.treeRoot.data;
    while (current) {
      if (current.left != null) {
        min = current.left.data;
      } else {
        current = null;
      }
    }
    return min;
  }

  max() {
    let current = this.treeRoot;
    if (current == null) return null;
    let max = current.data;
    while (current) {
      if (current.right != null) {
        max = current.right.data;
      } else {
        current = null;
      }
    }
    return max;
  }
};
*/
