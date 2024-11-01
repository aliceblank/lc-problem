/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
  let stack = [];
  let currentDirectory = ''
  let output = '/'
  for (let i = 1; i < path.length; i++) {
      if (path[i] === '/' || i === path.length - 1) {
          if (path[i] !== '/') {
              currentDirectory += path[i]
          };
          if (!currentDirectory.length) {
              continue;
          }
          if (currentDirectory === '.') {
              currentDirectory = ''
              continue;
          }
          if (currentDirectory === '..') {
              stack.pop();
              currentDirectory = ''
              continue;
          }
          stack.push(currentDirectory);
          currentDirectory = ''
      } else {
          currentDirectory += path[i]
      }
  }
  for (let q = 0; q < stack.length; q++) {
      if (q === stack.length - 1) {
          output += stack[q];
      } else {
          output += stack[q] + '/'
      }
  }
  return output
};