/*
Given a string s, reverse only all the vowels in the string and return it.

The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.
*/
function reverseVowels(s: string): string {
  let vowels: string[] = []
  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'a' ||
        s[i] === 'A' ||
        s[i] === 'e' ||
        s[i] === 'E' ||
        s[i] === 'i' ||
        s[i] === 'I' ||
        s[i] === 'o' ||
        s[i] === 'O' ||
        s[i] === 'u' ||
        s[i] === 'U') {
          vowels.push(s[i]);
        }
  }
  let splitS = s.split('')
  for (let q = 0; q < splitS.length; q++) {
    if (splitS[q].toLowerCase() === 'a' ||
    splitS[q].toLowerCase() === 'e' ||
    splitS[q].toLowerCase() === 'i' ||
    splitS[q].toLowerCase() === 'o' ||
    splitS[q].toLowerCase() === 'u') {
      splitS[q] = vowels.pop() as string;
    }
  }
  return splitS.join('')
};