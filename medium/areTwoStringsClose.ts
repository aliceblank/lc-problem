/*
Two strings are considered close if you can attain one from the other using the following operations:

Operation 1: Swap any two existing characters.
For example, abcde -> aecdb
Operation 2: Transform every occurrence of one existing character into another existing character, and do the same with the other character.
For example, aacabb -> bbcbaa (all a's turn into b's, and all b's turn into a's)
You can use the operations on either string as many times as necessary.

Given two strings, word1 and word2, return true if word1 and word2 are close, and false otherwise.
*/
function closeStrings(word1: string, word2: string): boolean {
  let map1 = new Map();
  for(let c of word1) {
    map1.set(c, (map1.get(c) ?? 0) + 1);
  }
  let map2 = new Map();
  for(let c of word2) {
    map2.set(c, (map2.get(c) ?? 0) + 1);
    if(!map1.has(c)) {
      return false;
    }
  }
  return [...map1.values()].sort().join(``) === [...map2.values()].sort().join(``);
};