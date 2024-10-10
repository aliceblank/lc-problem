var characterReplacement = function(s, k) {
  let visited = {};
  let beg = 0;
  let longest = 0;
  let largestCount = 0;
  for (let i = 0; i < s.length; i++) {
    let current = s[i];
    if (!visited[current]) {
      visited[current] = 1;
    } else {
      visited[current]++;
    }
    if (largestCount < visited[current]) {
      largestCount = visited[current];
    }
    if (i - beg + 1 - largestCount > k) {
      visited[s[beg]] -= 1;
      beg++
    }
    if (longest < i - beg + 1) {
      longest = i - beg + 1;
    }
  }
  return longest;
};