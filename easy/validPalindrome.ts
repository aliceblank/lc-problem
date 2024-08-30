function isPalindrome(s: string): boolean {
  const regex = /[^a-zA-Z0-9\s\:]*/
  return s.toLowerCase().replace(' ', '').replace(regex, '').split('').reverse().join('') === s;
};