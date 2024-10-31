/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  let matrix = []
  for (let x = 0; x < numRows; x++) {
      matrix.push([])
  }
  let direction = 'down';
  let index = 0;
  let column = 0;
  let zigzagIndex = numRows - 2;
  while (index < s.length) {
      if (direction === 'down') {
          for (let row = 0; row < numRows; row++) {
              matrix[row].push(s[index])
              index++;
          }
          direction = 'zig'
      }
      if (direction === 'zig') {
          for (let r = matrix.length - 1; r >= 0; r--) {
              if (r !== zigzagIndex || r === 0) {
                  matrix[r].push('');
              } else {
                  matrix[r].push(s[index])
                  index++
                  zigzagIndex--
              }
          }
          zigzagIndex = numRows - 2;
          direction = 'down'
      }
  }
  let output = '';
  for (let i = 0; i < matrix.length; i++) {
      for (let q = 0; q < matrix[i].length; q++) {
          if (matrix[i][q]) {
              output+= matrix[i][q]
          }
      }
  }
  return output
};