function groupAnagrams(strs: string[]): string[][] {
    let output: string[][] = []
    let sortedAnagrams = {}
    for (let i = 0; i < strs.length; i++) {
      const currentSorted = strs[i].split('').toSorted()
      if (!sortedAnagrams[currentSorted]) {
        sortedAnagrams[currentSorted] = [i];
      } else {
        sortedAnagrams[currentSorted].push(i);
      }
    }
    for (let anagram in sortedAnagrams) {
      let currentAnagram: string[] = [];
      for (let q = 0; q < sortedAnagrams[anagram].length; q++) {
        currentAnagram.push(strs[sortedAnagrams[anagram][q]])
      }
      output.push(currentAnagram)
    }
    return output;
};