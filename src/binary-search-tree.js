const { NotImplementedError } = require("../extensions/index.js");

// const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 

module.exports = class BinarySearchTree {
  root() {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  add(data) {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  has(data) {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  find(data) {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  remove(data) {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError("Not implemented");
  
  }

  max() {
    throw new NotImplementedError("Not implemented");
  
  }
};
*/

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
  } */

  minNode(node) {
    // если слева от узла ноль тогда это должен быть минимальный узел
    if (node.left === null) return node;
    else return this.minNode(node.left); //исправила findMinNode(node.left) na minNode
  }

  remove(data) {
    this.treeRoot = this.removeNode(this.treeRoot, data); // helper method below
  }

  removeNode(node, data) {
    if (node === null) {
      return null;
      // если данные, которые нужно удалить, меньше, чем данные корня, переходим к левому поддереву
    } else if (data < node.data) {
      node.left = this.removeNode(node.left, data);
      return node;
      // если данные, которые нужно удалить, больше, чем данные корня, переходим к правому поддереву
    } else if (data > node.data) {
      node.right = this.removeNode(node.right, data);
      return node;
      // если данные такие как данные корня, удаляем узел
    } else {
      // удаляем узел без потомков (листовой узел (leaf) или крайний)
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      }
      // удаляем узел с одним потомком
      if (node.left === null) {
        node = node.right;
        return node;
      } else if (node.right === null) {
        node = node.left;
        return node;
      }
      // удаляем узел с двумя потомками
      // minNode правого поддерева хранится в новом узле
      let newNode = this.minNode(node.right);
      node.data = newNode.data;
      node.right = this.removeNode(node.right, newNode.data);
      return node;
    }
  }

  min() {
    let current = this.treeRoot;
    if (current === null) return null;
    let min = this.treeRoot.data;
    while (current.left) {
      if (current.left != null) {
        min = current.left.data;
        current = current.left;
      }
    }
    return min;
  }

  max() {
    let current = this.treeRoot;
    if (current === null) return null;
    let max = this.treeRoot.data;
    while (current.right) {
      if (current.right != null) {
        max = current.right.data;
        current = current.right;
      }
    }
    return max;
  }
};
