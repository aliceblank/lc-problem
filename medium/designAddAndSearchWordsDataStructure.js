var WordDictionary = function() {
  this.root = new Node('start', {});
};

class Node {
constructor (value, children, end) {
  this.value = value ?? null
  this.children = children ?? {};
  this.end = end ?? false;
}
}
/**
* @param {string} word
* @return {void}
*/
WordDictionary.prototype.addWord = function(word) {
  let currentPointer = this.root;
  for (let i = 0; i < word.length; i++) {
    if (currentPointer.children[word[i]]) {
      currentPointer = currentPointer.children[word[i]];
      if (i + 1 === word.length) {
          currentPointer.end = true;
      }
    } else {
      currentPointer.children[word[i]] = new Node(word[i], {})
      currentPointer = currentPointer.children[word[i]];
      if (i + 1 === word.length) {
          currentPointer.end = true;
      }
    }
  }
};

WordDictionary.prototype.search = function(word) {
let flag = false;
let dfs = (node, query) => {
  if (!query.length) {
    if (node.end) {
      flag = true;
    }
    return;
  }
  if (query[0] === '.') {
    for (let child in node.children) {
      dfs(node.children[child], query.slice(1));
    }
  } else {
    if (node.children[query[0]]) {
      dfs(node.children[query[0]], query.slice(1));
    } else {
      return;
    }
  }
}
dfs(this.root, word);
return flag;
};

class Node {
  constructor(value, children, end) {
    this.value = value ?? null
    this.children = children ?? {};
    this.end = end ?? false;
  }
}

var WordDictionary = function () {
  this.root = new Node('start', {});
};
/**
* @param {string} word
* @return {void}
*/
//time: O(n);
//space: O(n);
WordDictionary.prototype.addWord = function (word) {
  let currentPointer = this.root;
  for (let i = 0; i < word.length; i++) {
    if (currentPointer.children[word[i]]) {
      currentPointer = currentPointer.children[word[i]];
    } else {
      currentPointer.children[word[i]] = new Node(word[i], {})
      currentPointer = currentPointer.children[word[i]];
    }
    if (i === word.length - 1) {
      currentPointer.end = true;
    }
  }
};

// time: O(n)
// space: O(1);
WordDictionary.prototype.search = function (word) {
  let flag = false;
  const dfs = (node, index) => {
    if (index === word.length - 1) {
      if (node.end) {
        flag = true;
      }
      return;
    }
    if (query[index] === '.') {
      for (let child in node.children) {
        dfs(node.children[child], index + 1);
      }
    } else {
      if (node.children[query[index]]) {
        dfs(node.children[query[index]], index + 1);
      }
    }
  }
  dfs(this.root, 0);
  return flag;
};

