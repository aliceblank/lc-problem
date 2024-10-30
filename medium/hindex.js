/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
  citations.sort((a, b) => a - b);
  while (citations.length > citations[0]) {
      citations.shift();
  }
  return citations.length;
};